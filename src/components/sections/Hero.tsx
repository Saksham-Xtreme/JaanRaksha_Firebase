import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Happy Indian street dog in a field"
        data-ai-hint="happy indian dog field"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 container mx-auto px-4 md:px-6 flex flex-col items-center gap-6 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
          JaanRaksha - Protecting Every Life
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-primary-foreground/90">
          India's revolutionary animal welfare platform. Rescue, adopt, donate, and earn rewards while making a difference in millions of lives.
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
