import { Hero } from "@/components/sections/Hero";
import { DynamicIntro } from "@/components/sections/DynamicIntro";
import { FeaturedAnimals } from "@/components/sections/FeaturedAnimals";
import { Stats } from "@/components/sections/Stats";
import { Leaderboard } from "@/components/sections/Leaderboard";
import { Rewards } from "@/components/sections/Rewards";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <DynamicIntro />
      <FeaturedAnimals />
      <Stats />
      <Leaderboard />
      <Rewards />
    </div>
  );
}
