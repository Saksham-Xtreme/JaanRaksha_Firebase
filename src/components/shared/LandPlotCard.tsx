'use client';

import { useState } from "react";
import Image from "next/image";
import type { LandPlot } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Heart } from "lucide-react";
import { awardPoints } from "@/app/actions/points";
import { useToast } from "@/hooks/use-toast";

export function LandPlotCard({ plot }: { plot: LandPlot }) {
    const [donating, setDonating] = useState(false);
    const { toast } = useToast();

    const getStatusBadge = () => {
        switch (plot.status) {
        case "available":
            return <Badge variant="default">Available</Badge>;
        case "pending_verification":
            return <Badge variant="secondary">Pending</Badge>;
        case "in_use":
            return <Badge variant="outline">In Use</Badge>;
        }
    };

    const handleDonateLand = async () => {
        setDonating(true);
        try {
            const result = await awardPoints({
                userId: "u1", // In a real app, this would be the logged-in user's ID
                action: "donate_land",
                landPlotId: plot.id,
                description: `Donated land at ${plot.location} for animal welfare`
            });
            
            if (result.success) {
                toast({
                    title: "Land Donation Points! 🏞️",
                    description: `You earned ${result.points} points for donating land!`,
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to award points. Please try again.",
                variant: "destructive",
            });
        } finally {
            setDonating(false);
        }
    };
    
  return (
    <Card className="overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-52 w-full">
        <Image
          src={plot.photos[0]}
          alt={`Photo of land at ${plot.address}`}
          data-ai-hint="empty land field"
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
            <CardTitle className="font-headline text-2xl">{plot.location}</CardTitle>
            {getStatusBadge()}
        </div>
        <CardDescription className="pt-2 !mt-0 text-sm text-muted-foreground flex items-center">
            <MapPin className="h-4 w-4 mr-1.5" /> {plot.address}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-foreground">{plot.description}</p>
        <p className="text-xs text-muted-foreground mt-2">Offered by: {plot.ownerName}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button 
          onClick={handleDonateLand} 
          variant="outline" 
          disabled={donating}
          className="w-full"
        >
          <Heart className="mr-2 h-4 w-4" />
          {donating ? "Donating..." : "Donate Land (+100 pts)"}
        </Button>
        <Button variant="outline" className="w-full">
          Inquire About This Land
        </Button>
      </CardFooter>
    </Card>
  );
}
