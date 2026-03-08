import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Polityka prywatności"
        description="Polityka prywatności Streamly Production – informacje o przetwarzaniu danych osobowych, plikach cookies i prawach użytkowników."
        path="/polityka-prywatnosci"
      />
      <Header />
      <main className="pt-32 section-padding">
        <Link to="/" className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm uppercase tracking-[0.15em]">Powrót</span>
        </Link>
        <h1 className="font-display font-bold text-3xl md:text-4xl mb-8">Polityka prywatności</h1>
        <div className="max-w-4xl text-muted-foreground leading-relaxed">
          <section className="mb-8">
            <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4">1. INFORMACJE O ADMINISTRATORZE DANYCH</h2>
            <p className="mb-4">
              Administratorem danych osobowych Użytkowników Serwisu jest <strong>KRZYSZTOF HOŁUBOWICZ</strong> z siedzibą przy ul. Międzynarodowa 58/60A/165, 03-922 Warszawa, NIP: 7122966925 (dalej: „Administrator").
            </p>
            <p>
              Kontakt: <a href="mailto:hello@streamlyproduction.pl" className="text-primary hover:underline">hello@streamlyproduction.pl</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4">2. JAKIE DANE ZBIERAMY I W JAKIM CELU?</h2>
            <p className="mb-4">Przetwarzamy dane zgodnie z RODO:</p>
            <ul className="space-y-3 ml-6">
              <li className="list-disc"><strong>Formularz kontaktowy</strong> (imię, email, telefon, wiadomość): Obsługa zapytań o wynajem sprzętu/produkcję wideo. Podstawa: Art. 6 ust. 1 lit. b RODO (wykonanie umowy/oferty).</li>
              <li className="list-disc"><strong>Marketing (Newsletter)</strong>: email po dobrowolnej zgodzie. Podstawa: Art. 6 ust. 1 lit. a RODO.</li>
              <li className="list-disc"><strong>Analityka i bezpieczeństwo</strong>: adres IP, dane urządzenia, logi. Podstawa: Art. 6 ust. 1 lit. f RODO (uzasadniony interes – bezpieczeństwo serwisu).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4">3. KOMU PRZEKAZUJEMY TWOJE DANE?</h2>
            <ul className="space-y-2 ml-6">
              <li className="list-disc"><strong>Hosting</strong>: Lovable (do obsługi strony internetowej)</li>
              <li className="list-disc"><strong>Formularze</strong>: Web3Forms (do obsługi zapytań kontaktowych)</li>
              <li className="list-disc"><strong>Płatności</strong>: PayU (tylko przy realizacji usług)</li>
              <li className="list-disc"><strong>Marketing</strong>: dostawcy usług email marketingu (przy zgodzie)</li>
              <li className="list-disc"><strong>Analityka</strong>: Google Analytics (do analizy ruchu na stronie)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4">4. PRZEKAZYWANIE DANYCH POZA EOG</h2>
            <p>
              Dane mogą być przetwarzane poza Europejskim Obszarem Gospodarczym (EOG) przez dostawców chmurowych (AWS, Cloudflare, Google) stosujących Standardowe Klauzule Umowne zapewniające odpowiedni poziom ochrony danych.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4">5. OKRES PRZECHOWYWANIA DANYCH</h2>
            <ul className="space-y-2 ml-6">
              <li className="list-disc"><strong>Zapytania</strong>: 2 lata lub do zakończenia sprawy</li>
              <li className="list-disc"><strong>Marketing</strong>: do wycofania zgody</li>
              <li className="list-disc"><strong>Logi bezpieczeństwa</strong>: 14 dni</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4">6. TWOJE PRAWA</h2>
            <p className="mb-4">Zgodnie z RODO przysługują Ci następujące prawa:</p>
            <ul className="space-y-2 ml-6">
              <li className="list-disc">Prawo dostępu do swoich danych</li>
              <li className="list-disc">Prawo sprostowania danych</li>
              <li className="list-disc">Prawo usunięcia danych ("prawo do bycia zapomnianym")</li>
              <li className="list-disc">Prawo ograniczenia przetwarzania</li>
              <li className="list-disc">Prawo sprzeciwu wobec przetwarzania</li>
              <li className="list-disc">Prawo cofnięcia zgody (w każdej chwili)</li>
              <li className="list-disc">Prawo złożenia skargi do Prezesa Urzędu Ochrony Danych Osobowych (UODO)</li>
            </ul>
            <p className="mt-4">
              Aby skorzystać z powyższych praw, skontaktuj się z nami pod adresem: <a href="mailto:hello@streamlyproduction.pl" className="text-primary hover:underline">hello@streamlyproduction.pl</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4">7. PLIKI COOKIES</h2>
            <p className="mb-4">
              Używamy plików cookies w celu poprawy funkcjonowania strony:
            </p>
            <ul className="space-y-2 ml-6">
              <li className="list-disc"><strong>Cookies sesyjne</strong>: do utrzymania stanu formularzy i sesji użytkownika</li>
              <li className="list-disc"><strong>Cookies analityczne</strong>: Google Analytics do analizy ruchu i optymalizacji strony</li>
            </ul>
            <p className="mt-4">
              Możesz wyłączyć obsługę plików cookies w ustawieniach swojej przeglądarki, jednak może to wpłynąć na funkcjonalność strony.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-4">8. BEZPIECZEŃSTWO DANYCH</h2>
            <p>
              Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony Twoich danych osobowych przed nieupoważnionym dostępem, utratą, zniszczeniem lub modyfikacją, w tym szyfrowanie połączeń HTTPS oraz regularne aktualizacje bezpieczeństwa.
            </p>
          </section>

          <div className="mt-12 p-6 bg-muted/20 rounded-lg">
            <p className="text-sm">
              <strong>Data ostatniej aktualizacji:</strong> 8 marca 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
