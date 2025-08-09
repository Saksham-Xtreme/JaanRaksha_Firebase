"use server";

import { z } from "zod";
import type { PointTransaction, LeaderboardEntry, User, Reward, LeaderboardPeriod } from "@/lib/types";

// Mock data for demonstration - in a real app, this would be in a database
let users: User[] = [
  {
    id: "u1",
    name: "Rajesh Kumar",
    email: "rajesh@example.com",
    totalPoints: 150,
    joinDate: new Date("2024-01-01"),
    level: 2,
    achievements: []
  },
  {
    id: "u2", 
    name: "Priya Sharma",
    email: "priya@example.com",
    totalPoints: 320,
    joinDate: new Date("2024-01-15"),
    level: 4,
    achievements: []
  },
  {
    id: "u3",
    name: "Amit Patel", 
    email: "amit@example.com",
    totalPoints: 85,
    joinDate: new Date("2024-02-01"),
    level: 1,
    achievements: []
  },
  {
    id: "u4",
    name: "Sunita Devi",
    email: "sunita@example.com",
    totalPoints: 450,
    joinDate: new Date("2023-12-01"),
    level: 5,
    achievements: []
  },
  {
    id: "u5",
    name: "Vikram Singh",
    email: "vikram@example.com",
    totalPoints: 280,
    joinDate: new Date("2024-01-20"),
    level: 3,
    achievements: []
  }
];

let transactions: PointTransaction[] = [];
let rewards: Reward[] = [
  {
    id: "r1",
    name: "Jeev Daya T-Shirt",
    description: "Exclusive t-shirt for animal protectors with traditional Indian design",
    pointsRequired: 100,
    image: "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?w=800&h=600&fit=crop",
    type: "shirt",
    available: true
  },
  {
    id: "r2", 
    name: "Pashu Mitra Badge",
    description: "Special badge for animal welfare heroes",
    pointsRequired: 200,
    image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&h=600&fit=crop",
    type: "badge",
    available: true
  },
  {
    id: "r3",
    name: "Gau Seva Certificate",
    description: "Certificate for land donors and animal welfare supporters",
    pointsRequired: 500,
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop", 
    type: "certificate",
    available: true
  },
  {
    id: "r4",
    name: "Ahimsa Medal",
    description: "Special medal for those who practice non-violence towards animals",
    pointsRequired: 300,
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=600&fit=crop",
    type: "badge",
    available: true
  }
];

const awardPointsSchema = z.object({
  userId: z.string(),
  action: z.enum(['pet_animal', 'protect_animal', 'donate_land', 'fundraise', 'adopt_animal', 'submit_protection_report']),
  animalId: z.string().optional(),
  shelterId: z.string().optional(),
  description: z.string()
});

export async function awardPoints(values: z.infer<typeof awardPointsSchema>) {
  const parsed = awardPointsSchema.safeParse(values);
  
  if (!parsed.success) {
    return { success: false, message: "Invalid data provided." };
  }

  const { userId, action, animalId, shelterId, description } = parsed.data;

  // Determine points based on action
  let points = 0;
  switch (action) {
    case 'pet_animal':
      points = 20;
      break;
    case 'protect_animal':
      points = 20;
      break;
    case 'donate_land':
      points = 100;
      break;
    case 'fundraise':
      points = 100;
      break;
    case 'adopt_animal':
      points = 50;
      break;
    case 'submit_protection_report':
      points = 20;
      break;
  }

  // Create transaction
  const transaction: PointTransaction = {
    id: `tx_${Date.now()}`,
    userId,
    points,
    action,
    description,
    timestamp: new Date(),
    animalId,
    shelterId
  };

  // Add to transactions
  transactions.push(transaction);

  // Update user points
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex !== -1) {
    users[userIndex].totalPoints += points;
    
    // Calculate level (every 100 points = 1 level)
    const newLevel = Math.floor(users[userIndex].totalPoints / 100) + 1;
    users[userIndex].level = newLevel;
  }

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return { 
    success: true, 
    points,
    totalPoints: users[userIndex]?.totalPoints || 0,
    level: users[userIndex]?.level || 1
  };
}

export async function getLeaderboard(period: LeaderboardPeriod = 'weekly') {
  // Filter transactions based on period
  const now = new Date();
  let startDate: Date;
  
  switch (period) {
    case 'daily':
      startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
      break;
    case 'weekly':
      startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      break;
    case 'monthly':
      startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      break;
    case 'yearly':
      startDate = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
      break;
  }

  // Calculate points for each user in the period
  const periodPoints = new Map<string, number>();
  
  transactions
    .filter(tx => tx.timestamp >= startDate)
    .forEach(tx => {
      const current = periodPoints.get(tx.userId) || 0;
      periodPoints.set(tx.userId, current + tx.points);
    });

  // Create leaderboard entries
  const leaderboard: LeaderboardEntry[] = [];
  
  for (const [userId, points] of periodPoints) {
    const user = users.find(u => u.id === userId);
    if (user) {
      leaderboard.push({
        userId: user.id,
        userName: user.name,
        userAvatar: user.avatar,
        points,
        rank: 0, // Will be set below
        level: user.level
      });
    }
  }

  // Sort by points and assign ranks
  leaderboard.sort((a, b) => b.points - a.points);
  leaderboard.forEach((entry, index) => {
    entry.rank = index + 1;
  });

  return leaderboard.slice(0, 10); // Top 10
}

export async function getUserProfile(userId: string) {
  const user = users.find(u => u.id === userId);
  if (!user) {
    return null;
  }

  const userTransactions = transactions
    .filter(tx => tx.userId === userId)
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .slice(0, 10);

  return {
    user,
    recentTransactions: userTransactions
  };
}

export async function getAvailableRewards() {
  return rewards.filter(r => r.available);
}

export async function claimReward(userId: string, rewardId: string) {
  const user = users.find(u => u.id === userId);
  const reward = rewards.find(r => r.id === rewardId);

  if (!user || !reward) {
    return { success: false, message: "User or reward not found." };
  }

  if (user.totalPoints < reward.pointsRequired) {
    return { success: false, message: "Insufficient points." };
  }

  // Deduct points
  const userIndex = users.findIndex(u => u.id === userId);
  users[userIndex].totalPoints -= reward.pointsRequired;

  // In a real app, you would create a claim record
  console.log(`User ${userId} claimed reward ${rewardId}`);

  return { 
    success: true, 
    message: `Successfully claimed ${reward.name}!`,
    remainingPoints: users[userIndex].totalPoints
  };
}

export async function getMockUsers() {
  return users;
}
