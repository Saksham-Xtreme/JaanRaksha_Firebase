import { shelters } from "@/lib/data";
import { ShelterCard } from "@/components/shared/ShelterCard";

export default function SheltersPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Partner Shelters</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            These organizations are the backbone of our rescue efforts. Learn more about them, their needs, and how you can help.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shelters.map(shelter => (
            <ShelterCard key={shelter.id} shelter={shelter} />
          ))}
        </div>
      </div>
    </div>
  );
}
