'use client';

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Heart, Calendar } from "lucide-react";
import { getUserProfile } from "@/app/actions/points";
import type { User, PointTransaction } from "@/lib/types";

export function UserProfile() {
  const [profile, setProfile] = useState<{
    user: User;
    recentTransactions: PointTransaction[];
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    setLoading(true);
    try {
      // For demo purposes, using a mock user ID
      const data = await getUserProfile("u1");
      setProfile(data);
    } catch (error) {
      console.error('Failed to load profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const getActionLabel = (action: string) => {
    switch (action) {
      case 'pet_animal':
        return 'Pet an Animal';
      case 'protect_animal':
        return 'Protect an Animal';
      case 'donate_land':
        return 'Donate Land';
      case 'fundraise':
        return 'Help with Fundraising';
      case 'adopt_animal':
        return 'Adopt an Animal';
      default:
        return action;
    }
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'pet_animal':
        return <Heart className="h-4 w-4" />;
      case 'protect_animal':
        return <Trophy className="h-4 w-4" />;
      case 'donate_land':
        return <Star className="h-4 w-4" />;
      case 'fundraise':
        return <Star className="h-4 w-4" />;
      case 'adopt_animal':
        return <Heart className="h-4 w-4" />;
      default:
        return <Star className="h-4 w-4" />;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Profile not found</p>
      </div>
    );
  }

  const { user, recentTransactions } = profile;
  const pointsToNextLevel = 100 - (user.totalPoints % 100);
  const progressToNextLevel = ((user.totalPoints % 100) / 100) * 100;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* User Info Card */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-4">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-16 h-16 rounded-full"
                  />
                ) : (
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-xl">
                      {user.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <CardTitle className="text-2xl">{user.name}</CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{user.totalPoints}</div>
                  <div className="text-sm text-muted-foreground">Total Points</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">Level {user.level}</div>
                  <div className="text-sm text-muted-foreground">Current Level</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{user.achievements.length}</div>
                  <div className="text-sm text-muted-foreground">Achievements</div>
                </div>
              </div>

              {/* Level Progress */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progress to Level {user.level + 1}</span>
                  <span className="text-sm text-muted-foreground">{pointsToNextLevel} points needed</span>
                </div>
                <Progress value={progressToNextLevel} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Your latest point-earning activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              {recentTransactions.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No recent activity. Start helping animals to earn points!
                </div>
              ) : (
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-4 rounded-lg border bg-card"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-full">
                          {getActionIcon(transaction.action)}
                        </div>
                        <div>
                          <p className="font-medium">{getActionLabel(transaction.action)}</p>
                          <p className="text-sm text-muted-foreground">
                            {transaction.description}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {transaction.timestamp.toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="default" className="text-sm">
                          +{transaction.points} pts
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
