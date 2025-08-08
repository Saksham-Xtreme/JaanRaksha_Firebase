'use client';

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { awardPoints, getMockUsers } from "@/app/actions/points";
import { useToast } from "@/hooks/use-toast";
import { Heart, Shield, Home, DollarSign, PawPrint } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

export default function DemoPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await getMockUsers();
      setUsers(data);
    } catch (error) {
      console.error('Failed to load users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDemoAction = async (action: string, points: number, description: string) => {
    try {
      const result = await awardPoints({
        userId: "u1",
        action: action as any,
        description
      });
      
      if (result.success) {
        toast({
          title: "Points Earned! 🎉",
          description: `You earned ${result.points} points for ${description}!`,
        });
        // Reload users to show updated points
        await loadUsers();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to award points. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Logo size="lg" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">
            Point System Demo
          </h1>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Experience our gamified animal welfare platform. Earn points by helping animals and compete on leaderboards!
          </p>
        </div>

        {/* Demo Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Pet an Animal
              </CardTitle>
              <CardDescription>Show love to animals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span>Points:</span>
                <Badge variant="default">+20 pts</Badge>
              </div>
              <Button 
                onClick={() => handleDemoAction('pet_animal', 20, 'Petting a friendly dog')}
                className="w-full"
              >
                Pet an Animal
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-500" />
                Protect an Animal
              </CardTitle>
              <CardDescription>Help animals in need</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span>Points:</span>
                <Badge variant="default">+20 pts</Badge>
              </div>
              <Button 
                onClick={() => handleDemoAction('protect_animal', 20, 'Protecting a stray cat')}
                className="w-full"
              >
                Protect an Animal
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Home className="h-5 w-5 text-green-500" />
                Donate Land
              </CardTitle>
              <CardDescription>Provide space for shelters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span>Points:</span>
                <Badge variant="default">+100 pts</Badge>
              </div>
              <Button 
                onClick={() => handleDemoAction('donate_land', 100, 'Donating land for animal shelter')}
                className="w-full"
              >
                Donate Land
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-yellow-500" />
                Help Fundraising
              </CardTitle>
              <CardDescription>Support shelter operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span>Points:</span>
                <Badge variant="default">+100 pts</Badge>
              </div>
              <Button 
                onClick={() => handleDemoAction('fundraise', 100, 'Helping with shelter fundraising')}
                className="w-full"
              >
                Help Fundraising
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PawPrint className="h-5 w-5 text-purple-500" />
                Adopt an Animal
              </CardTitle>
              <CardDescription>Give a forever home</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <span>Points:</span>
                <Badge variant="default">+50 pts</Badge>
              </div>
              <Button 
                onClick={() => handleDemoAction('adopt_animal', 50, 'Adopting a rescue dog')}
                className="w-full"
              >
                Adopt an Animal
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Load Demo Users</CardTitle>
              <CardDescription>See current user points</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={loadUsers}
                disabled={loading}
                className="w-full"
              >
                {loading ? "Loading..." : "Load Users"}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* User Points Display */}
        {users.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Current User Points</CardTitle>
              <CardDescription>Demo users and their point totals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {users.map((user) => (
                  <div key={user.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{user.name}</span>
                      <Badge variant="secondary">Level {user.level}</Badge>
                    </div>
                    <div className="text-2xl font-bold text-primary">{user.totalPoints}</div>
                    <div className="text-sm text-muted-foreground">Total Points</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Features Overview */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Leaderboards</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Daily, weekly, monthly, and yearly rankings</li>
                <li>• Top performers get exclusive rewards</li>
                <li>• Real-time point tracking</li>
                <li>• Competitive leaderboards</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rewards System</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• T-shirts, badges, and certificates</li>
                <li>• Points-based reward claiming</li>
                <li>• Exclusive brand partnerships</li>
                <li>• Achievement tracking</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
