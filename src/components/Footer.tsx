import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-2xl font-bold text-foreground">
              Streamly
            </Link>
            <p className="text-muted-foreground mt-4 max-w-sm leading-relaxed">
              Produkcja wideo, TV, video marketing, transmisje online
              dla marek, które liczą się z wynikami.
            </p>
            <p className="text-muted-foreground mt-3 text-sm">
              Streamly Studio – platforma VOD do dystrybucji Twoich materiałów wideo
            </p>
          </div>

          <div>
            <span className="eyebrow block mb-4">Nawigacja</span>
            <div className="space-y-3">
              <a href="/#uslugi" className="block text-muted-foreground hover:text-foreground transition-colors">Usługi</a>
              <a href="/#realizacje" className="block text-muted-foreground hover:text-foreground transition-colors">Realizacje</a>
              <a href="/#studio" className="block text-muted-foreground hover:text-foreground transition-colors">Streamly Studio</a>
              <Link to="/wynajem" className="block text-muted-foreground hover:text-foreground transition-colors">Wynajem Sprzętu</Link>
              <Link to="/kpo" className="block text-muted-foreground hover:text-foreground transition-colors">Projekt KPO</Link>
            </div>
          </div>

          <div>
            <span className="eyebrow block mb-4">Social</span>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">YouTube</a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Streamly Production. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-muted-foreground max-w-md">
            Projekt współfinansowany ze środków Unii Europejskiej w ramach
            Krajowego Planu Odbudowy i Zwiększania Odporności.
          </p>
        </div>
      </div>
    </footer>
  );
};