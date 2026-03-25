import { Wallet, Upload, ShoppingCart } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "Connect Wallet",
    description: "Link your crypto wallet to start buying and selling digital assets securely.",
  },
  {
    icon: Upload,
    title: "Create or Browse",
    description: "Mint your own NFT or explore thousands of unique artworks from independent artists.",
  },
  {
    icon: ShoppingCart,
    title: "Buy & Own Forever",
    description: "Purchase with crypto. Ownership is recorded on the blockchain — truly yours, forever.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-xs text-primary uppercase tracking-widest mb-2">How it works</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Start in <span className="text-gradient">3 Steps</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center group">
              <div className="mx-auto mb-5 w-16 h-16 rounded-2xl glass flex items-center justify-center transition-all group-hover:glow-primary">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-display font-bold text-muted-foreground">
                {i + 1}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
