import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo showText={true} />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HavenNest. All rights reserved.
          </p>
          <nav className="flex items-center gap-4 md:gap-6">
            <Link href="/about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/adopt" className="text-sm hover:text-primary transition-colors">
              Adopt
            </Link>
            <Link href="/shelters" className="text-sm hover:text-primary transition-colors">
              Shelters
            </Link>
            <Link href="/doctor" className="text-sm hover:text-primary transition-colors">
              Veterinary
            </Link>
            <Link href="/payment" className="text-sm hover:text-primary transition-colors">
              Donate
            </Link>
            <Link href="/leaderboard" className="text-sm hover:text-primary transition-colors">
              Leaderboard
            </Link>
            <Link href="/rewards" className="text-sm hover:text-primary transition-colors">
              Rewards
            </Link>
            <Link href="/demo" className="text-sm hover:text-primary transition-colors">
              Demo
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
