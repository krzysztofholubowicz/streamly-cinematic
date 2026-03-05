import { motion } from 'framer-motion';

const features = [
  {
    icon: '🔴',
    tag: 'LIVE',
    title: 'Transmisje na żywo z dowolnego miejsca',
  },
  {
    icon: '📁',
    tag: 'VOD',
    title: 'Archiwum wideo dostępne 24/7',
  },
  {
    icon: '📊',
    tag: 'ANALYTICS',
    title: 'Analityka widowni w czasie rzeczywistym',
  },
];

export const StreamlyStudio = () => {
  return (
    <section id="studio" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="eyebrow block mb-4"
            >
              Platforma VOD
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="section-title mb-8"
            >
              Streamly
              <br />
              <span className="gradient-text">Studio</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-10 text-lg"
            >
              Własna platforma streamingowa white-label dla Twojej marki.
              Pełna kontrola nad dystrybucją treści, brak zależności od
              zewnętrznych platform, profesjonalne narzędzia analityczne.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="#kontakt"
              className="btn-primary inline-block"
            >
              Zamów demo
            </motion.a>
          </div>

          {/* Right - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="feature-card flex items-start gap-5"
              >
                <span className="text-3xl">{feature.icon}</span>
                <div>
                  <span className="eyebrow block mb-1">{feature.tag}</span>
                  <p className="text-foreground font-medium text-lg">{feature.title}</p>
                </div>
              </motion.div>
            ))}

            {/* Viewers stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass-card p-6 text-center"
            >
              <p className="text-muted-foreground text-sm mb-2">Aktywni widzowie</p>
              <span className="stat-number text-4xl gradient-text">2.4K</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
