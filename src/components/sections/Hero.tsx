import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <Image
        src="https://placehold.co/1920x1080"
        alt="Happy dog running in a field"
        data-ai-hint="happy dog field"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 container mx-auto px-4 md:px-6 flex flex-col items-center gap-6 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
          Find Your New Best Friend
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-primary-foreground/90">
          We connect loving homes with animals in need. Discover available land, support local shelters, and open your heart to a new companion.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button asChild size="lg" className="transform transition-transform hover:scale-105">
            <Link href="/adopt">Adopt a Pet</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="transform transition-transform hover:scale-105">
            <Link href="/shelters">Support a Shelter</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
