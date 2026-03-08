import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Briefing i strategia',
    description: 'Zaczynamy od rozmowy – nie od wyceny. Chcemy zrozumieć Twój cel biznesowy, grupę docelową i kontekst. Na tej podstawie budujemy brief kreatywny i techniczny.',
    deliverable: 'Brief + wycena w 48h',
  },
  {
    number: '02',
    title: 'Pre-produkcja i scenariusz',
    description: 'Scenorys, harmonogram zdjęciowy, zakres techniczny, casting – wszystko zatwierdzasz przed wejściem na plan. Pełna transparentność budżetowa. Żadna pozycja nie jest ukryta.',
    deliverable: 'Scenorys + harmonogram + budżet',
  },
  {
    number: '03',
    title: 'Produkcja i dostarczenie',
    description: 'Profesjonalny zespół, własny sprzęt broadcastowy, sprawdzone procesy. Dostarczamy gotowy materiał w uzgodnionym terminie – zmasterowany, zoptymalizowany, ready to publish.',
    deliverable: 'Gotowy materiał + licencje + pliki źródłowe',
  },
];

export const Process = () => {
  return (
    <section className="section-padding border-t border-border">
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
            Trzy etapy.
            <br />
            <span className="text-muted-foreground">Zero niespodzianek.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline connector line – desktop only */}
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
                <h3 className="font-display text-xl font-bold mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
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
