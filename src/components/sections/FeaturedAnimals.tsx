import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimalCard } from "@/components/shared/AnimalCard";
import { animals } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function FeaturedAnimals() {
  const featured = animals.filter(a => a.status === 'available_for_adoption').slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Ready for a Home</h2>
          <p className="max-w-2xl mt-4 text-muted-foreground">
            These wonderful animals are waiting for a loving family. Could it be you?
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/adopt">
              View All Animals <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
