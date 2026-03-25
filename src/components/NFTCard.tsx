import { Heart } from "lucide-react";

interface NFTCardProps {
  image: string;
  title: string;
  artist: string;
  price: string;
  currency?: string;
  likes: number;
  timeLeft?: string;
}

const NFTCard = ({ image, title, artist, price, currency = "ETH", likes, timeLeft }: NFTCardProps) => {
  return (
    <div className="group relative rounded-xl overflow-hidden glass transition-all duration-300 hover:glow-primary hover:-translate-y-1">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={512}
          height={512}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display font-semibold text-foreground truncate">{title}</h3>
            <p className="text-xs text-muted-foreground">by {artist}</p>
          </div>
          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-accent transition-colors">
            <Heart className="w-3.5 h-3.5" />
            {likes}
          </button>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Price</p>
            <p className="font-display font-semibold text-primary">
              {price} <span className="text-xs text-muted-foreground">{currency}</span>
            </p>
          </div>
          {timeLeft && (
            <div className="text-right">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Ends in</p>
              <p className="text-sm font-medium text-foreground">{timeLeft}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
