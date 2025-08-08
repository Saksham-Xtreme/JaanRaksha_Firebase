import { Hero } from "@/components/sections/Hero";
import { FeaturedAnimals } from "@/components/sections/FeaturedAnimals";
import { Stats } from "@/components/sections/Stats";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedAnimals />
      <Stats />
    </div>
  );
}
