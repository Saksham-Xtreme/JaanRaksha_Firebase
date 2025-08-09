"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Image from "next/image";
import { PawPrint, Sparkles, ChevronDown, Heart, Shield, CheckCircle, AlertCircle, Image as ImageIcon } from "lucide-react";
import { summarizeAnimalStory } from "@/app/actions/summarize";
import { awardPoints } from "@/app/actions/points";
import { AdoptionForm, type AdoptionFormData } from "./AdoptionForm";

import type { Animal } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "../ui/skeleton";
import { useToast } from "@/hooks/use-toast";

interface AnimalCardProps {
  animal: Animal;
}

export function AnimalCard({ animal }: AnimalCardProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [petting, setPetting] = useState(false);
  const [protecting, setProtecting] = useState(false);
  const [showAdoptionForm, setShowAdoptionForm] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { toast } = useToast();

  const getSummary = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSummary(null);
    const result = await summarizeAnimalStory({ story: animal.story });
    setIsLoading(false);
    if (result.summary) {
      setSummary(result.summary);
    } else {
      setError("Could not generate summary.");
    }
  };

  const getStatusBadge = () => {
    switch (animal.status) {
      case "available_for_adoption":
        return <Badge variant="default">Available</Badge>;
      case "adoption_pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "adopted":
        return <Badge variant="outline">Adopted</Badge>;
    }
  };
  
  const getAnimalIcon = () => {
    return <PawPrint className="h-4 w-4 mr-2 text-muted-foreground" />;
  }

  const handlePetAnimal = async () => {
    setPetting(true);
    try {
      const result = await awardPoints({
        userId: "u1", // In a real app, this would be the logged-in user's ID
        action: "pet_animal",
        animalId: animal.id,
        description: `Pet ${animal.name} the ${animal.species}`
      });
      
      if (result.success) {
        toast({
          title: "Points Earned! 🎉",
          description: `You earned ${result.points} points for petting ${animal.name}!`,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to award points. Please try again.",
        variant: "destructive",
      });
    } finally {
      setPetting(false);
    }
  };

  const handleProtectAnimal = async () => {
    setProtecting(true);
    try {
      // Redirect to protect animal form
      window.location.href = `/protect?animalType=${encodeURIComponent(animal.species)}&animalName=${encodeURIComponent(animal.name)}`;
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to redirect to protection form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setProtecting(false);
    }
  };

  const handleAdoptAnimal = () => {
    setShowAdoptionForm(true);
  };

  const handleAdoptionSubmit = async (formData: AdoptionFormData) => {
    try {
      // Award points for adoption
      const result = await awardPoints({
        userId: "u1", // In a real app, this would be the logged-in user's ID
        action: "adopt_animal",
        animalId: animal.id,
        description: `Adopted ${animal.name} the ${animal.species}`
      });

      if (result.success) {
        toast({
          title: "Adoption Application Submitted!",
          description: `You earned ${result.points} points for adopting ${animal.name}! We'll contact you soon.`,
        });
        setShowAdoptionForm(false);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit adoption application",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-60 w-full">
        {imageError ? (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <div className="text-center">
              <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Image not available</p>
            </div>
          </div>
        ) : (
          <Image
            src={animal.photos[0]}
            alt={`Photo of ${animal.name}`}
            data-ai-hint={`${animal.species}`}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            priority={false}
          />
        )}
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle className="font-headline text-2xl">{animal.name}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                    {getAnimalIcon()}
                    {animal.species}
                </div>
            </div>
            {getStatusBadge()}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <span className="font-semibold">Read {animal.name}'s Story</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {animal.story}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="mt-4">
          {isLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ) : (
            summary && (
              <Alert>
                <Sparkles className="h-4 w-4" />
                <AlertTitle className="font-headline">AI Summary</AlertTitle>
                <AlertDescription>{summary}</AlertDescription>
              </Alert>
            )
          )}
          {error && <p className="text-destructive text-sm mt-2">{error}</p>}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <div className="flex gap-2 w-full">
          <Button 
            onClick={handlePetAnimal} 
            variant="outline" 
            size="sm" 
            disabled={petting}
            className="flex-1"
          >
            <Heart className="mr-2 h-4 w-4" />
            {petting ? "Petting..." : "Pet (+20 pts)"}
          </Button>
          <Button 
            onClick={handleProtectAnimal} 
            variant="outline" 
            size="sm" 
            disabled={protecting}
            className="flex-1"
          >
            <Shield className="mr-2 h-4 w-4" />
            {protecting ? "Redirecting..." : "Protect (+20 pts)"}
          </Button>
        </div>
        <div className="flex gap-2 w-full">
          <form onSubmit={getSummary} className="flex-1">
            <Button type="submit" variant="outline" className="w-full" disabled={isLoading}>
              <Sparkles className="mr-2 h-4 w-4" />
              {summary ? "Regenerate Summary" : "Summarize Story"}
            </Button>
          </form>
          <Button 
            className="flex-1" 
            disabled={animal.status !== 'available_for_adoption'}
            onClick={handleAdoptAnimal}
          >
            Adopt Me
          </Button>
        </div>
      </CardFooter>
      
      {/* Adoption Form Modal */}
      {showAdoptionForm && (
        <AdoptionForm
          animal={animal}
          onClose={() => setShowAdoptionForm(false)}
          onSubmit={handleAdoptionSubmit}
        />
      )}
    </Card>
  );
}
