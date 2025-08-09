import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const footerLinks = [
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
    { href: "/demo", label: "Demo" },
  ];

  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo showText={true} />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HavenNest. All rights reserved.
          </p>
          <nav className="flex items-center gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
