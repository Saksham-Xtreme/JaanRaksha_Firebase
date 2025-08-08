import Image from "next/image";
import type { Shelter } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, PawPrint, DollarSign, MapPin } from "lucide-react";

export function ShelterCard({ shelter }: { shelter: Shelter }) {
  return (
    <Card className="overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-52 w-full">
        <Image
          src={shelter.photo}
          alt={`Photo of ${shelter.name}`}
          data-ai-hint="animal shelter building"
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-2xl flex items-center gap-2"><Home className="h-6 w-6 text-primary"/>{shelter.name}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground pt-1">
            <MapPin className="h-4 w-4 mr-1.5" /> {shelter.location}
        </div>
        <CardDescription className="pt-2">{shelter.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex items-center text-sm">
            <PawPrint className="h-5 w-5 mr-3 text-primary" />
            <span className="font-semibold">{shelter.animalCount}</span>
            <span className="text-muted-foreground ml-1.5">Animals Sheltered</span>
        </div>
         <div className="flex items-center text-sm">
            <DollarSign className="h-5 w-5 mr-3 text-primary" />
            <span className="font-semibold">${shelter.fundsRaised.toLocaleString()}</span>
            <span className="text-muted-foreground ml-1.5">Funds Raised</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Learn More & Donate
        </Button>
      </CardFooter>
    </Card>
  );
}
