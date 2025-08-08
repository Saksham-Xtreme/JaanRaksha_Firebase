'use client';

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Star, Award, Shirt } from "lucide-react";
import { getAvailableRewards, claimReward } from "@/app/actions/points";
import type { Reward } from "@/lib/types";

export function Rewards() {
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [loading, setLoading] = useState(true);
  const [claiming, setClaiming] = useState<string | null>(null);

  useEffect(() => {
    loadRewards();
  }, []);

  const loadRewards = async () => {
    setLoading(true);
    try {
      const data = await getAvailableRewards();
      setRewards(data);
    } catch (error) {
      console.error('Failed to load rewards:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClaim = async (rewardId: string) => {
    setClaiming(rewardId);
    try {
      // For demo purposes, using a mock user ID
      const result = await claimReward("u1", rewardId);
      if (result.success) {
        // In a real app, you'd show a success message
        console.log(result.message);
        // Reload rewards to update availability
        await loadRewards();
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error('Failed to claim reward:', error);
    } finally {
      setClaiming(null);
    }
  };

  const getRewardIcon = (type: Reward['type']) => {
    switch (type) {
      case 'shirt':
        return <Shirt className="h-6 w-6" />;
      case 'badge':
        return <Award className="h-6 w-6" />;
      case 'certificate':
        return <Star className="h-6 w-6" />;
      default:
        return <Gift className="h-6 w-6" />;
    }
  };

  const getRewardTypeLabel = (type: Reward['type']) => {
    switch (type) {
      case 'shirt':
        return 'T-Shirt';
      case 'badge':
        return 'Badge';
      case 'certificate':
        return 'Certificate';
      default:
        return 'Reward';
    }
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Exclusive Rewards</h2>
          <p className="max-w-2xl mt-4 text-muted-foreground">
            Earn points by helping animals and claim exclusive rewards from our brand partners!
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rewards.map((reward) => (
              <Card key={reward.id} className="overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48 w-full">
                  <img
                    src={reward.image}
                    alt={reward.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {getRewardIcon(reward.type)}
                      {getRewardTypeLabel(reward.type)}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-primary" />
                    {reward.name}
                  </CardTitle>
                  <CardDescription>{reward.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">Points Required:</span>
                    <span className="font-bold text-primary">{reward.pointsRequired}</span>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => handleClaim(reward.id)}
                    disabled={claiming === reward.id}
                  >
                    {claiming === reward.id ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Claiming...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Gift className="h-4 w-4" />
                        Claim Reward
                      </div>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Points Info */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>How to Earn Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Pet an animal</span>
                    <Badge variant="outline">+20 pts</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Protect an animal</span>
                    <Badge variant="outline">+20 pts</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Adopt an animal</span>
                    <Badge variant="outline">+50 pts</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Donate land</span>
                    <Badge variant="outline">+100 pts</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Help with fundraising</span>
                    <Badge variant="outline">+100 pts</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
