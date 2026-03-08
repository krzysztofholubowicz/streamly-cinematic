import { motion } from 'framer-motion';
import { Play, Radio, BarChart3, Film } from 'lucide-react';
import { useCountUp } from '@/hooks/use-count-up';

const features = [
  {
    tag: 'LIVE',
    title: 'Transmisja w jakości 4K',
    icon: Radio,
  },
  {
    tag: 'VOD',
    title: 'Biblioteka materiałów 24/7',
    icon: Film,
  },
  {
    tag: 'ANALITYKA',
    title: 'Dane o widowni w czasie rzeczywistym',
    icon: BarChart3,
  },
];

export const StreamlyStudio = () => {
  const viewerStat = useCountUp(2400, 2000);

  return (
    <section id="studio" className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(30 8% 7%) 0%, hsl(30 6% 9%) 50%, hsl(30 8% 7%) 100%)' }}>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04]" style={{ background: 'radial-gradient(circle, hsl(35 60% 55%), transparent 70%)' }} />
      
      <div className="section-padding">
        <div className="container mx-auto">
          {/* Header – centered, cinematic */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 relative z-10"
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

          {/* Feature grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 relative z-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative p-8 rounded-2xl border border-border/60 hover:border-accent-warm/30 transition-all duration-500"
                style={{ background: 'hsl(30 6% 10% / 0.8)', backdropFilter: 'blur(12px)' }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, hsl(35 60% 55% / 0.05), transparent)' }} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'hsl(35 60% 55% / 0.1)', border: '1px solid hsl(35 60% 55% / 0.15)' }}>
                      <feature.icon className="w-5 h-5" style={{ color: 'hsl(35 60% 55%)' }} />
                    </div>
                    <span className="eyebrow">{feature.tag}</span>
                  </div>
                  <p className="text-foreground font-medium text-lg">{feature.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Browser mockup + stats row */}
          <div className="grid lg:grid-cols-5 gap-6 relative z-10">
            {/* Mockup – takes 3 cols */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 rounded-2xl overflow-hidden border border-border/60"
              style={{ background: 'hsl(30 6% 10%)' }}
            >
              <div className="flex items-center gap-2 px-5 py-3 border-b border-border/60" style={{ background: 'hsl(30 5% 12%)' }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'hsl(var(--muted-foreground) / 0.25)' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'hsl(var(--muted-foreground) / 0.18)' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'hsl(var(--muted-foreground) / 0.12)' }} />
                <span className="text-xs text-muted-foreground ml-3 tracking-wider">streamly.studio</span>
              </div>
              <div className="p-12 md:p-16 flex items-center justify-center" style={{ minHeight: '240px' }}>
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 cursor-pointer"
                    style={{ background: 'hsl(35 60% 55% / 0.12)', border: '1.5px solid hsl(35 60% 55% / 0.25)' }}
                  >
                    <Play className="w-8 h-8 ml-1" style={{ color: 'hsl(35 60% 55%)' }} />
                  </motion.div>
                  <p className="text-muted-foreground text-sm tracking-wider uppercase">Live preview</p>
                </div>
              </div>
            </motion.div>

            {/* Stats panel – takes 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              <div className="flex-1 rounded-2xl border border-border/60 p-8 flex flex-col items-center justify-center text-center" style={{ background: 'hsl(30 6% 10% / 0.8)' }}>
                <p className="text-muted-foreground text-sm mb-3 tracking-wide">Aktywnych widzów miesięcznie</p>
                <span ref={viewerStat.ref as React.RefObject<HTMLSpanElement>} className="stat-number text-5xl md:text-6xl text-foreground">
                  {viewerStat.count >= 1000 ? `${(viewerStat.count / 1000).toFixed(1)}K+` : `${viewerStat.count}+`}
                </span>
              </div>

              <motion.a
                href="https://www.streamlystudio.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="block rounded-2xl border p-8 text-center transition-all duration-500 cursor-pointer"
                style={{ background: 'hsl(35 60% 55% / 0.08)', borderColor: 'hsl(35 60% 55% / 0.2)' }}
              >
                <span className="text-foreground font-semibold text-lg tracking-wide">Poznaj platformę</span>
                <span className="block text-muted-foreground text-sm mt-2">streamlystudio.com →</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
