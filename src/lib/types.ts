export interface Animal {
  id: string;
  name: string;
  species: string;
  story: string;
  photos: string[];
  status: 'available_for_adoption' | 'adoption_pending' | 'adopted';
  registeredAt: Date;
}

export interface Shelter {
  id: string;
  name: string;
  description: string;
  animalCount: number;
  fundsRaised: number;
  location: string;
  photo: string;
}

export interface LandPlot {
  id: string;
  ownerName: string;
  location: string;
  address: string;
  photos: string[];
  description: string;
  status: 'pending_verification' | 'available' | 'in_use';
}

// Point System Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  totalPoints: number;
  joinDate: Date;
  level: number;
  achievements: Achievement[];
}

export interface PointTransaction {
  id: string;
  userId: string;
  points: number;
  action: 'pet_animal' | 'protect_animal' | 'donate_land' | 'fundraise' | 'adopt_animal';
  description: string;
  timestamp: Date;
  animalId?: string;
  shelterId?: string;
  landPlotId?: string;
}

export interface LeaderboardEntry {
  userId: string;
  userName: string;
  userAvatar?: string;
  points: number;
  rank: number;
  level: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  pointsRewarded: number;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  pointsRequired: number;
  image: string;
  type: 'shirt' | 'badge' | 'certificate' | 'other';
  available: boolean;
}

export type LeaderboardPeriod = 'daily' | 'weekly' | 'monthly' | 'yearly';
