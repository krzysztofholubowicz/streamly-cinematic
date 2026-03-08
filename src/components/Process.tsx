import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Briefing i strategia',
    description: 'Zaczynamy od rozmowy — nie od wyceny. Rozumiemy cel, grupę docelową, kontekst.',
    deliverable: 'Brief + wycena w 48h',
  },
  {
    number: '02',
    title: 'Pre-produkcja',
    description: 'Scenorys, harmonogram, budżet — wszystko zatwierdzasz przed wejściem na plan.',
    deliverable: 'Scenorys + kosztorys',
  },
  {
    number: '03',
    title: 'Produkcja i dostarczenie',
    description: 'Własny sprzęt, sprawdzony zespół, gotowy materiał w terminie.',
    deliverable: 'Materiał gotowe do publikacji',
  },
];

export const Process = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="eyebrow block mb-4">Proces</span>
          <h2 className="section-title">
            <span className="gradient-text-gold">Trzy etapy.</span>
            <br />
            <span className="gradient-text-gold">Zero niespodzianek.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline connector line – desktop */}
          <div className="hidden md:block timeline-line">
            <div className="timeline-dot" />
            <div className="timeline-dot" style={{ animationDelay: '1.3s' }} />
            <div className="timeline-dot" style={{ animationDelay: '2.6s' }} />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <span className="step-number block mb-6">{step.number}</span>
                <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {step.description}
                </p>
                <span className="deliverable-pill">{step.deliverable}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
