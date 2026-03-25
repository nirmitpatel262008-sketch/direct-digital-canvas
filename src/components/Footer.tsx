const Footer = () => (
  <footer className="border-t border-border/30 py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="/" className="font-display text-xl font-bold text-gradient">NEXUS</a>
        <div className="flex gap-6 text-sm text-muted-foreground">
          {["Privacy", "Terms", "Support"].map((link) => (
            <a key={link} href="#" className="hover:text-foreground transition-colors">{link}</a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Nexus. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
