import { landPlots } from "@/lib/data";
import { LandPlotCard } from "@/components/shared/LandPlotCard";

export default function LandPlotsPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Land for a Cause</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            Explore available land plots generously offered by landowners to build new shelters and sanctuaries.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landPlots.map(plot => (
            <LandPlotCard key={plot.id} plot={plot} />
          ))}
        </div>
      </div>
    </div>
  );
}
