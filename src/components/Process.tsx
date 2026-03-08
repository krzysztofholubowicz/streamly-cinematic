import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Porozmawiamy o Twojej wizji',
    description: 'Słuchamy. Pytamy. Zrozumiemy dokładnie, czego chcesz osiągnąć i dla kogo. To fundament każdej udanej produkcji.',
  },
  {
    number: '02',
    title: 'Planujemy każdy kadr',
    description: 'Koncepcja, scenorys, zakres techniczny, budżet – wszystko jasne i przejrzyste. Żadnych niespodzianek, Ty decydujesz.',
  },
  {
    number: '03',
    title: 'Realizujemy na najwyższym poziomie',
    description: 'Profesjonalny zespół, najnowszy sprzęt, kreatywne pomysły. Oddajemy Ci gotowy materiał, który długo będzie na Ciebie pracować.',
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
          className="text-center mb-20"
        >
          <span className="eyebrow block mb-4">Proces</span>
          <h2 className="section-title">
            Jak pracujemy?
            <br />
            <span className="text-muted-foreground">Spokojnie, kreatywnie, profesjonalnie.</span>
          </h2>
        </motion.div>

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
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};