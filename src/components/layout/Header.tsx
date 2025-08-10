"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/adopt", label: "Adopt" },
  { href: "/shelters", label: "Shelters" },
  { href: "/provide-shelter", label: "Provide Shelter" },
  { href: "/protect", label: "Protect Animals" },
  { href: "/doctor", label: "Veterinary" },
  { href: "/payment", label: "Donate" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/rewards", label: "Rewards" },
  { href: "/profile", label: "Profile" },
  { href: "/demo", label: "Demo" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="transition-transform hover:scale-105">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary font-bold" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/auth/login" className="text-sm font-medium hover:text-primary">
              Sign In
            </Link>
            <Button asChild>
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </nav>
          <Button asChild className="hidden md:flex">
            <Link href="/contact">Get Involved</Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-6">
                  <Link href="/" className="mb-4">
                    <Logo />
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        pathname === link.href ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="mt-4">
                    <Link href="/contact">Get Involved</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
