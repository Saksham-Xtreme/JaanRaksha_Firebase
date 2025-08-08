import Image from "next/image";
import type { LandPlot } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

export function LandPlotCard({ plot }: { plot: LandPlot }) {
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
      <CardFooter>
        <Button variant="outline" className="w-full">
          Inquire About This Land
        </Button>
      </CardFooter>
    </Card>
  );
}
