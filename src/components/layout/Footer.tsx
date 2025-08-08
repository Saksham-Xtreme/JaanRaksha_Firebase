import Link from "next/link";
import { PawPrint } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold font-headline">HavenNest</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HavenNest. All rights reserved.
          </p>
          <nav className="flex items-center gap-4 md:gap-6">
            <Link href="/adopt" className="text-sm hover:text-primary transition-colors">
              Adopt
            </Link>
            <Link href="/shelters" className="text-sm hover:text-primary transition-colors">
              Shelters
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
