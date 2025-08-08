import { AnimalListing } from "./AnimalListing";

export default function AdoptPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Meet Your Future Family Member</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            Browse our loving animals who are looking for a forever home. Each one has a unique story and a lot of love to give. Your journey to finding a new best friend starts here.
          </p>
        </div>
        <AnimalListing />
      </div>
    </div>
  );
}
