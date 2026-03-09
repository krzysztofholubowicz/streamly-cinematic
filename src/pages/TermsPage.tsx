import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Regulamin"
        description="Regulamin korzystania z usług Streamly Production – warunki współpracy, prawa i obowiązki stron."
        path="/regulamin" />
      
      <Header />
      <main className="pt-32 section-padding">
        <Link to="/" className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm uppercase tracking-[0.15em]">Powrót</span>
        </Link>
        <h1 className="font-display font-bold text-3xl md:text-4xl mb-8">Regulamin</h1>
        <div className="max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">§ 1. POSTANOWIENIA OGÓLNE</h2>
            <p>
              Serwis internetowy Streamly Production, dostępny pod adresem streamlyproduction.com, należy do KRZYSZTOF HOŁUBOWICZ 
              z siedzibą przy ul. Międzynarodowa 58/60A/165, 03-922 Warszawa, NIP: 7122966925.
            </p>
            <p className="mt-3">
              Niniejszy Regulamin określa zasady korzystania z serwisu prezentującego ofertę studia produkcyjnego wideo 
              (produkcja, transmisje live, wynajem sprzętu filmowego).
            </p>
            <p className="mt-3">
              Formularz kontaktowy służy wyłącznie do składania zapytań ofertowych – nie stanowi oferty handlowej ani zawarcia umowy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">§ 2. WYMAGANIA TECHNICZNE</h2>
            <p>
              Wystarczy dowolna przeglądarka internetowa (Chrome, Firefox, Safari) i połączenie z Internetem. 
              Strona zoptymalizowana pod urządzenia mobilne.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">§ 3. USŁUGI SERWISU</h2>
            <p>Serwis prezentuje:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 ml-4">
              <li>Portfolio realizacji (programy TV, reklamy, transmisje live, VOD)</li>
              <li>Ofertę wynajmu sprzętu (Sony FX9/FX6, obiektywy GM, ATEM switcher, Sachtler)</li>
              <li>Formularz zapytania o indywidualną wycenę</li>
            </ul>
            <p className="mt-3">
              Umowy produkcyjne/wynajmu zawiera się osobno po kontakcie mailowym/telefonicznym.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">§ 4. ZASADY WYNAJMU SPRZĘTU</h2>
            <p>
              Wysłanie formularza w zakładce "Wynajem Sprzętu" nie rezerwuje automatycznie sprzętu ani nie stanowi zawarcia umowy. 
              Jest to wyłącznie zapytanie o dostępność i wycenę.
            </p>
            <p className="mt-3">
              Właściwa rezerwacja i wynajem regulowane są osobną umową pisemną lub elektroniczną, podpisywaną przy odbiorze sprzętu 
              lub po uzgodnieniu warunków.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">§ 5. PŁATNOŚCI</h2>
            <p>
              Wyceny i faktury wysyłane indywidualnie po akceptacji oferty.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">§ 6. PRAWA AUTORSKIE</h2>
            <p>
              Wszystkie materiały publikowane na stronie – w tym teksty, zdjęcia, grafiki oraz realizacje wideo prezentowane 
              w portfolio – stanowią własność Streamly Production lub jej klientów i są chronione prawem autorskim.
            </p>
            <p className="mt-3">
              Kopiowanie, publikowanie lub wykorzystywanie tych materiałów w jakiejkolwiek formie bez pisemnej zgody właściciela jest zabronione.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">§ 7. ODPOWIEDZIALNOŚĆ</h2>
            <p>
              Usługodawca nie ponosi odpowiedzialności za decyzje biznesowe Klienta podjęte na podstawie informacji ze strony. 
              Dane techniczne sprzętu mogą ulec zmianie.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">§ 8. REKLAMACJE DOTYCZĄCE DZIAŁANIA SERWISU</h2>
            <p>
              Ewentualne problemy techniczne z działaniem strony (np. niedziałający formularz, błędy wyświetlania) można zgłaszać 
              na adres: <a className="text-foreground underline hover:no-underline" href="mailto:hello@streamlyproduction.com">hello@streamlyproduction.com</a>
            </p>
            <p className="mt-3">
              Reklamacje rozpatrywane są w ciągu 14 dni roboczych od daty zgłoszenia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">§ 9. DOSTĘPNOŚĆ I JĘZYK</h2>
            <p>
              Serwis dostępny globalnie, głównie po polsku dla klientów z Polski. Kontakt międzynarodowy po uzgodnieniu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">§ 10. KOMUNIKACJA I DANE OSOBOWE</h2>
            <p>
              Dane z formularza używane są tylko do odpowiedzi na zapytanie. Zgoda na marketing jest dobrowolna.
            </p>
            <p className="mt-3">
              Szczegółowe informacje o przetwarzaniu danych osobowych znajdują się w{' '}
              <a href="/polityka-prywatnosci" className="text-foreground underline hover:no-underline">Polityce Prywatności</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">§ 11. POSTANOWIENIA KOŃCOWE</h2>
            <p>
              Regulamin może ulec zmianie. W sprawach nieuregulowanych stosuje się Kodeks Cywilny.
            </p>
            <p className="mt-6 pt-6 border-t border-border">
              <strong>Kontakt:</strong><br />
              Email: <a className="text-foreground underline hover:no-underline" href="mailto:hello@streamlyproduction.com">hello@streamlyproduction.com</a><br />
              Telefon: <a href="tel:+48695709701" className="text-foreground underline hover:no-underline">+48 695 709 701</a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>);

};

export default TermsPage;