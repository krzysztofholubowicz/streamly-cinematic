import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        {/* EU / KPO funding bar */}
        <div className="mb-16">
          <div className="px-8 py-5 rounded-2xl flex items-center justify-center bg-white max-w-4xl mx-auto">
            <img
              src="/images/kpo/kpo-banner.jpg"
              alt="Krajowy Plan Odbudowy – Rzeczpospolita Polska – Sfinansowane przez Unię Europejską NextGenerationEU"
              className="w-full max-w-3xl object-contain"
            />
          </div>
          <p className="text-center mt-4 text-xs text-muted-foreground tracking-wider uppercase">
            Finansowane przez Unię Europejską — NextGenerationEU
          </p>
          <p className="text-center mt-2 text-xs text-muted-foreground max-w-2xl mx-auto">
            Projekt współfinansowany ze środków Unii Europejskiej w ramach Krajowego Planu Odbudowy i Zwiększania Odporności.{' '}
            <Link to="/kpo" className="underline hover:text-foreground transition-colors">Dowiedz się więcej</Link>
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-2xl font-bold text-foreground">
              Streamly Production
            </Link>
            <p className="text-muted-foreground mt-4 max-w-sm leading-relaxed">
              Produkcja video i telewizyjna, organizacja targów, wystaw i kongresów online oraz hybrydowych.
              Transmisje, wynajem sprzętu i własna platforma VOD Streamly Studio.
            </p>
          </div>

          <div>
            <span className="eyebrow block mb-4">Nawigacja</span>
            <div className="space-y-3">
              <a href="/#uslugi" className="block text-muted-foreground hover:text-foreground transition-colors">Usługi</a>
              <a href="/#realizacje" className="block text-muted-foreground hover:text-foreground transition-colors">Portfolio</a>
              <a href="/#studio" className="block text-muted-foreground hover:text-foreground transition-colors">Streamly Studio</a>
              <Link to="/wynajem" className="block text-muted-foreground hover:text-foreground transition-colors">Wynajem sprzętu</Link>
              <Link to="/kpo" className="block text-muted-foreground hover:text-foreground transition-colors">Projekt KPO</Link>
            </div>
          </div>

          <div>
            <span className="eyebrow block mb-4">Dokumenty</span>
            <div className="space-y-3">
              <Link to="/polityka-prywatnosci" className="block text-muted-foreground hover:text-foreground transition-colors">Polityka prywatności</Link>
              <Link to="/regulamin" className="block text-muted-foreground hover:text-foreground transition-colors">Regulamin</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Streamly Production. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-muted-foreground max-w-md">


          </p>
        </div>
      </div>
    </footer>);

};