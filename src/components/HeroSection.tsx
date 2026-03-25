import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Digital art background"
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
      </div>

      <div className="container relative mx-auto px-4 pt-24">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs text-primary">
            <TrendingUp className="w-3 h-3" />
            Blockchain-verified ownership
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Collect & Sell{" "}
            <span className="text-gradient">Digital Art</span>{" "}
            Directly
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            A decentralized marketplace where artists sell directly to collectors. 
            Ownership verified on-chain — no middlemen, no company servers.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
              Explore Collection
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted">
              Create NFT
            </Button>
          </div>

          <div className="flex gap-10 pt-6">
            {[
              { value: "12.4K+", label: "Artworks" },
              { value: "5.2K", label: "Artists" },
              { value: "98K", label: "Owners" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
