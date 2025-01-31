import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge as BadgeIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Navbar() {
  const [location] = useLocation();

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = location === href;
    return (
      <Link href={href}>
        <Button
          variant={isActive ? "secondary" : "ghost"}
          className={cn(
            "font-rye text-lg",
            isActive && "bg-amber-100 hover:bg-amber-200"
          )}
        >
          {children}
        </Button>
      </Link>
    );
  };

  return (
    <nav className="border-b bg-card shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <BadgeIcon className="h-8 w-8 text-amber-800" />
            <Badge variant="outline" className="font-rye text-lg">
              Wild West Sheriff
            </Badge>
          </div>

          <div className="flex gap-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/jokes">Jokes</NavLink>
            <NavLink href="/sayings">Sayings</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}