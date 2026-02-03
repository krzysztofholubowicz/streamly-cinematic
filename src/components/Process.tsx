import { motion } from 'framer-motion';
import cameraImage from '@/assets/camera-closeup.jpg';

const steps = [
  {
    number: '01',
    title: 'Porozmawiamy o Twojej wizji',
    description:
      'Słuchamy. Pytamy. Zrozumiemy dokładnie, czego chcesz osiągnąć i dla kogo. To fundament każdej udanej produkcji.',
  },
  {
    number: '02',
    title: 'Planujemy każdy kadr',
    description:
      'Koncepcja, scenorys, zakres techniczny, budżet – wszystko jasne i przejrzyste. Żadnych niespodzianek, Ty decydujesz.',
  },
  {
    number: '03',
    title: 'Realizujemy na najwyższym poziomie',
    description:
      'Profesjonalny zespół, najnowszy sprzęt, kreatywne pomysły. Oddajemy Ci gotowy materiał, który wciąż Cię zadziwiać będzie.',
  },
];

export const Process = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={cameraImage}
          alt="Professional camera equipment"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="relative container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Jak pracujemy?{' '}
            <span className="text-gradient-secondary">Spokojnie, kreatywnie, profesjonalnie.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="glass-card rounded-2xl p-8 h-full">
                <span className="text-6xl md:text-7xl font-display font-bold text-gradient-primary opacity-80">
                  {step.number}
                </span>
                <h3 className="text-xl font-display font-semibold text-foreground mt-4 mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
