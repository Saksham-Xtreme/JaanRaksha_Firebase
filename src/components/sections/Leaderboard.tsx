'use client';

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, Star } from "lucide-react";
import { getLeaderboard } from "@/app/actions/points";
import type { LeaderboardEntry, LeaderboardPeriod } from "@/lib/types";

export function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [period, setPeriod] = useState<LeaderboardPeriod>('weekly');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLeaderboard();
  }, [period]);

  const loadLeaderboard = async () => {
    setLoading(true);
    try {
      const data = await getLeaderboard(period);
      setLeaderboard(data);
    } catch (error) {
      console.error('Failed to load leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return <Star className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getPeriodLabel = (p: LeaderboardPeriod) => {
    switch (p) {
      case 'daily':
        return 'Daily';
      case 'weekly':
        return 'Weekly';
      case 'monthly':
        return 'Monthly';
      case 'yearly':
        return 'Yearly';
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Leaderboard</h2>
          <p className="max-w-2xl mt-4 text-muted-foreground">
            See who's making the biggest impact in animal welfare. Top performers get exclusive rewards!
          </p>
        </div>

        {/* Period Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 p-1 bg-secondary rounded-lg">
            {(['daily', 'weekly', 'monthly', 'yearly'] as LeaderboardPeriod[]).map((p) => (
              <Button
                key={p}
                variant={period === p ? "default" : "ghost"}
                size="sm"
                onClick={() => setPeriod(p)}
                className="text-sm"
              >
                {getPeriodLabel(p)}
              </Button>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Top Animal Protectors</CardTitle>
            <CardDescription className="text-center">
              {getPeriodLabel(period)} rankings based on points earned
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : (
              <div className="space-y-4">
                {leaderboard.map((entry, index) => (
                  <div
                    key={entry.userId}
                    className={`flex items-center justify-between p-4 rounded-lg border transition-all hover:shadow-md ${
                      index < 3 ? 'bg-gradient-to-r from-primary/5 to-primary/10' : 'bg-card'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        {getRankIcon(entry.rank)}
                        <span className="font-bold text-lg">#{entry.rank}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        {entry.userAvatar ? (
                          <img
                            src={entry.userAvatar}
                            alt={entry.userName}
                            className="w-10 h-10 rounded-full"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                            <span className="text-primary font-semibold">
                              {entry.userName.charAt(0)}
                            </span>
                          </div>
                        )}
                        <div>
                          <p className="font-semibold">{entry.userName}</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">Level {entry.level}</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{entry.points}</p>
                      <p className="text-sm text-muted-foreground">points</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Rewards Info */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            🎁 Top performers receive exclusive rewards including t-shirts, badges, and certificates!
          </p>
        </div>
      </div>
    </section>
  );
}
