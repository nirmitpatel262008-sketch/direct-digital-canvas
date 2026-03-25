import NFTCard from "./NFTCard";
import nft1 from "@/assets/nft-1.jpg";
import nft2 from "@/assets/nft-2.jpg";
import nft3 from "@/assets/nft-3.jpg";
import nft4 from "@/assets/nft-4.jpg";
import nft5 from "@/assets/nft-5.jpg";
import nft6 from "@/assets/nft-6.jpg";

const nfts = [
  { image: nft1, title: "Cosmic Genesis", artist: "AuraVoid", price: "2.45", likes: 342, timeLeft: "8h 12m" },
  { image: nft2, title: "Crystalline Dream", artist: "NeonSoul", price: "1.80", likes: 218, timeLeft: "3h 45m" },
  { image: nft3, title: "Chrome Infinity", artist: "MetaForge", price: "5.20", likes: 571 },
  { image: nft4, title: "Atlantis Rising", artist: "DeepFrame", price: "3.10", likes: 189, timeLeft: "12h 30m" },
  { image: nft5, title: "Neon Ruins", artist: "GlitchKing", price: "1.55", likes: 403 },
  { image: nft6, title: "Liquid Gold", artist: "AuraVoid", price: "4.75", likes: 627, timeLeft: "1d 6h" },
];

const TrendingSection = () => {
  return (
    <section id="explore" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs text-primary uppercase tracking-widest mb-2">Marketplace</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Trending <span className="text-gradient">Artworks</span>
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            {["All", "Art", "Music", "Virtual Worlds"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-1.5 text-xs rounded-full transition-colors ${
                  tab === "All"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft) => (
            <NFTCard key={nft.title} {...nft} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
