import { useState } from "react";
import { Wallet, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="font-display text-xl font-bold text-gradient">
          NEXUS
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Explore", "Create", "Artists", "Stats"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 border-primary/30 text-primary hover:bg-primary/10">
            <Wallet className="w-4 h-4" />
            Connect Wallet
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-border/50 px-4 pb-4 pt-2 space-y-3">
          {["Explore", "Create", "Artists", "Stats"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-sm text-muted-foreground hover:text-foreground py-2"
            >
              {item}
            </a>
          ))}
          <Button variant="outline" size="sm" className="w-full gap-2 border-primary/30 text-primary hover:bg-primary/10">
            <Wallet className="w-4 h-4" />
            Connect Wallet
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
