import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectData = [
  { label: 'Numer umowy', value: 'KPOD.01.03-IW.01-8867/24' },
  { label: 'Tytuł projektu', value: 'Rozszerzenie działalności o organizację targów, wystaw i kongresów online oraz hybrydowych' },
  { label: 'Ostateczny Odbiorca Wsparcia', value: 'KRZYSZTOF HOŁUBOWICZ' },
  { label: 'Wysokość dofinansowania', value: '402 347,29 zł', highlight: true },
  { label: 'Instytucja Wdrażająca', value: 'Polska Agencja Rozwoju Przedsiębiorczości (PARP)' },
  { label: 'Priorytet KPO', value: '1.3 – Cyfryzacja MŚP' },
  { label: 'Region', value: 'Mazowieckie' },
];

const investments = [
  'Nowoczesny sprzęt broadcastowy do realizacji wielokamerowych transmisji na żywo',
  'Platformę Streamly Studio – własne rozwiązanie VOD/live streaming white-label',
  'Szkolenia zespołu w zakresie realizacji eventów hybrydowych',
  'Rozwój procesów produkcyjnych dostosowanych do targów, wystaw i kongresów',
];

const benefits = [
  { title: 'Zero ryzyka technicznego', desc: 'Infrastruktura przetestowana na największych eventach w Polsce' },
  { title: 'Własna platforma streamingowa', desc: 'Pełna kontrola nad transmisją, brak zależności od zewnętrznych platform' },
  { title: 'Kompleksowa obsługa', desc: 'Od koncepcji eventu przez realizację live po archiwizację w VOD' },
  { title: 'Doświadczenie potwierdzone liczbami', desc: '15+ lat produkcji dla Polsat, TVP, Impact CEE, UMCS' },
];

const KPOPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32">
        <div className="section-padding pb-0">
          <Link to="/" className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-[0.15em]">Powrót</span>
          </Link>
        </div>

        <section className="section-padding">
          <div className="max-w-5xl kpo-container pl-8">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="eyebrow block mb-6">
              Projekt współfinansowany z UE
            </motion.span>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="section-title text-foreground mb-8">
              Projekt KPO: Rozszerzenie działalności o organizację targów, wystaw i kongresów online oraz hybrydowych
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Streamly Production realizuje przedsięwzięcie współfinansowane ze środków
              Unii Europejskiej w ramach Krajowego Planu Odbudowy i Zwiększania Odporności.
            </motion.p>
          </div>
        </section>

        <div className="divider" />

        <section className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="eyebrow block mb-8">Dane projektu</span>
              <div className="space-y-4">
                {projectData.map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="editorial-card p-5 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</span>
                      <p className={`mt-1 ${item.highlight ? 'stat-number text-2xl text-foreground' : 'text-foreground font-medium'}`}>
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <span className="eyebrow block mb-8">Cel projektu</span>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                Projekt ma na celu rozbudowę infrastruktury technicznej oraz kompetencji
                Streamly Production w zakresie organizacji profesjonalnych wydarzeń online
                i hybrydowych. Dzięki wsparciu z KPO inwestujemy w:
              </p>
              <div className="space-y-4">
                {investments.map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4">
                    <span className="step-number text-lg">{`0${index + 1}`}</span>
                    <p className="text-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        <section className="section-padding">
          <span className="eyebrow block mb-8">Korzyści dla klientów</span>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card !p-8">
                <h3 className="font-display font-bold text-lg mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-padding border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-12 mb-8">
            {['Unia Europejska', 'Krajowy Plan Odbudowy', 'PARP'].map((logo) => (
              <div key={logo} className="glass-card px-6 py-3">
                <span className="text-muted-foreground text-sm font-medium">{logo}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground max-w-2xl mx-auto">
            Projekt współfinansowany ze środków Unii Europejskiej w ramach
            Krajowego Planu Odbudowy i Zwiększania Odporności.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KPOPage;