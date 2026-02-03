import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const KPOPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-32">
        {/* Back link */}
        <div className="section-padding pb-0">
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-[0.15em]">Powrót</span>
          </Link>
        </div>

        {/* Hero */}
        <section className="section-padding">
          <div className="max-w-5xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow block mb-6"
            >
              Projekt współfinansowany z UE
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="section-title text-foreground mb-8"
            >
              Krajowy Plan Odbudowy
              <br />
              <span className="text-muted-foreground">Cyfryzacja MŚP</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Streamly Production realizuje przedsięwzięcie współfinansowane ze środków 
              Unii Europejskiej w ramach Krajowego Planu Odbudowy i Zwiększania Odporności.
            </motion.p>
          </div>
        </section>

        <div className="divider" />

        {/* Project Data */}
        <section className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="eyebrow block mb-8">Dane projektu</span>
              
              <div className="space-y-6">
                <div className="editorial-card p-6">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Numer umowy</span>
                  <p className="text-lg mt-2 font-medium">KPOD.01.03-IW.01-8867/24</p>
                </div>
                
                <div className="editorial-card p-6">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Tytuł projektu</span>
                  <p className="text-lg mt-2">Rozszerzenie działalności o organizację targów, wystaw i kongresów online oraz hybrydowych</p>
                </div>
                
                <div className="editorial-card p-6">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Wysokość dofinansowania</span>
                  <p className="stat-number mt-2">402 347,29 zł</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="editorial-card p-6">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Instytucja</span>
                    <p className="text-lg mt-2 font-medium">PARP</p>
                  </div>
                  
                  <div className="editorial-card p-6">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Region</span>
                    <p className="text-lg mt-2 font-medium">Mazowieckie</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="eyebrow block mb-8">Cel projektu</span>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                Projekt ma na celu rozbudowę infrastruktury technicznej oraz kompetencji 
                Streamly Production w zakresie organizacji profesjonalnych wydarzeń online 
                i hybrydowych.
              </p>

              <div className="space-y-4">
                {[
                  'Nowoczesny sprzęt broadcastowy do realizacji wielokamerowych transmisji na żywo',
                  'Platforma Streamly Studio – własne rozwiązanie VOD/live streaming white-label',
                  'Szkolenia zespołu w zakresie realizacji eventów hybrydowych',
                  'Rozwój procesów produkcyjnych dostosowanych do wymogów targów i kongresów'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="text-muted-foreground text-sm mt-1">0{index + 1}</span>
                    <p className="text-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* Benefits */}
        <section className="section-padding">
          <span className="eyebrow block mb-8">Korzyści dla klientów</span>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Zero ryzyka', desc: 'Infrastruktura przetestowana na największych eventach w Polsce' },
              { title: 'Własna platforma', desc: 'Pełna kontrola nad transmisją, brak zależności od zewnętrznych platform' },
              { title: 'Kompleksowa obsługa', desc: 'Od koncepcji eventu przez realizację live po archiwizację w VOD' },
              { title: '15+ lat doświadczenia', desc: 'Potwierdzone współpracą z Polsat, TVP, Impact CEE, UMCS' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="editorial-card p-8"
              >
                <h3 className="font-display font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EU Logos */}
        <section className="section-padding border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-12">
            <span className="text-muted-foreground text-sm">Unia Europejska</span>
            <span className="text-muted-foreground text-sm">Krajowy Plan Odbudowy</span>
            <span className="text-muted-foreground text-sm">PARP</span>
          </div>
          
          <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
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
