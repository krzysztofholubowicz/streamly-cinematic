import { motion, useScroll, useTransform } from 'framer-motion';
import { Radio, BarChart3, Film, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    tag: 'LIVE',
    title: 'Transmisja w jakości 4K',
    description: 'Wielokamerowe transmisje na żywo z adaptacyjnym bitrate i ultra-niskim opóźnieniem.',
    icon: Radio,
    stat: '4K',
    statLabel: 'Ultra HD',
  },
  {
    tag: 'VOD',
    title: 'Biblioteka materiałów 24/7',
    description: 'Pełna kontrola nad katalogiem treści, monetyzacją i dostępem użytkowników.',
    icon: Film,
    stat: '∞',
    statLabel: 'Bez limitów',
  },
  {
    tag: 'ANALITYKA',
    title: 'Dane w czasie rzeczywistym',
    description: 'Szczegółowe statystyki widowni, zaangażowania i retencji — bez pośredników.',
    icon: BarChart3,
    stat: '24/7',
    statLabel: 'Real-time',
  },
];

export const StreamlyStudio = () => {
  return (
    <section id="studio" className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(30 8% 7%) 0%, hsl(30 6% 9%) 50%, hsl(30 8% 7%) 100%)' }}>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-[0.03]" style={{ background: 'radial-gradient(circle, hsl(35 60% 55%), transparent 70%)' }} />

      <div className="section-padding">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24 relative z-10"
          >
            <span className="eyebrow block mb-6">TWOJA PLATFORMA VOD</span>
            <h2 className="font-display font-bold tracking-tight leading-[0.95] mb-8" style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)', letterSpacing: '-2px' }}>
              <span className="text-foreground">Streamly</span>
              <br />
              <span className="hero-accent">Studio</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              Bez algorytmów, które decydują za Ciebie.
              <br />
              Pełna kontrola nad treścią, widownią i danymi.
            </p>
          </motion.div>

          {/* Premium feature cards */}
          <div className="grid md:grid-cols-3 gap-px relative z-10 rounded-2xl overflow-hidden border border-border/40" style={{ background: 'hsl(30 5% 15% / 0.5)' }}>
            {features.map((feature, index) => (
              <motion.div
                key={feature.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative p-10 md:p-12 transition-all duration-500"
                style={{ background: 'hsl(30 6% 9%)' }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: 'linear-gradient(180deg, hsl(35 60% 55% / 0.04), transparent 60%)' }} />

                <div className="relative z-10">
                  {/* Stat number - large, editorial */}
                  <div className="mb-8">
                    <span className="stat-number block leading-none text-foreground" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', letterSpacing: '-2px' }}>
                      {feature.stat}
                    </span>
                    <span className="eyebrow mt-2 block">{feature.statLabel}</span>
                  </div>

                  {/* Divider */}
                  <div className="w-8 h-px mb-6" style={{ background: 'hsl(35 60% 55% / 0.3)' }} />

                  {/* Icon + tag */}
                  <div className="flex items-center gap-3 mb-4">
                    <feature.icon className="w-4 h-4" style={{ color: 'hsl(35 60% 55%)' }} />
                    <span className="eyebrow">{feature.tag}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-foreground font-semibold text-lg mb-3">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16 relative z-10"
          >
            <motion.a
              href="https://www.streamlystudio.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-semibold tracking-[0.1em] transition-all duration-300"
              style={{
                background: 'hsl(35 60% 55% / 0.1)',
                border: '1px solid hsl(35 60% 55% / 0.25)',
                color: 'hsl(35 60% 55%)',
              }}
            >
              POZNAJ STREAMLY STUDIO
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
