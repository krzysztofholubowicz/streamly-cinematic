import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Zero ryzyka technicznego – infrastruktura przetestowana na największych eventach w Polsce',
  'Własna platforma streamingowa – pełna kontrola nad transmisją, brak zależności od zewnętrznych platform',
  'Kompleksowa obsługa – od koncepcji eventu przez realizację live po archiwizację w VOD',
  'Doświadczenie potwierdzone liczbami – 15+ lat produkcji dla Polsat, TVP, Impact CEE, UMCS',
];

export const KPO = () => {
  return (
    <section id="kpo" className="section-padding relative bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-6">
              Projekt współfinansowany przez UE
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
              Projekt KPO: Rozszerzenie działalności o organizację targów, wystaw i kongresów{' '}
              <span className="text-gradient-secondary">online oraz hybrydowych</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Streamly Production realizuje przedsięwzięcie współfinansowane ze środków Unii
              Europejskiej w ramach Krajowego Planu Odbudowy i Zwiększania Odporności.
            </p>
          </div>

          {/* Project Data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 mb-12"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Numer umowy</p>
                <p className="text-foreground font-medium">KPOD.01.03-IW.01-8867/24</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Wysokość dofinansowania</p>
                <p className="text-foreground font-medium text-primary">402 347,29 zł</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Instytucja Wdrażająca</p>
                <p className="text-foreground font-medium">PARP</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Priorytet KPO</p>
                <p className="text-foreground font-medium">1.3 – Cyfryzacja MŚP</p>
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-6">
              Korzyści dla klientów
            </h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs text-muted-foreground/60 mt-12 text-center"
          >
            Projekt współfinansowany ze środków Unii Europejskiej w ramach Krajowego Planu
            Odbudowy i Zwiększania Odporności.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
