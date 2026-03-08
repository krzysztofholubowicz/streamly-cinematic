import { motion } from 'framer-motion';
import { Radio, Film, BarChart3, ArrowUpRight } from 'lucide-react';
import { useCountUp } from '@/hooks/use-count-up';

const features = [
  { icon: Radio, label: 'Live 4K', desc: 'Transmisja w jakości broadcastowej' },
  { icon: Film, label: 'VOD 24/7', desc: 'Własna biblioteka na żądanie' },
  { icon: BarChart3, label: 'Analityka', desc: 'Dane o widowni w real-time' },
];

export const StreamlyStudio = () => {
  const viewerStat = useCountUp(2400, 2000);

  return (
    <section id="studio" className="relative">
      {/* Full-bleed dark band */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, hsl(30 8% 7%) 0%, hsl(28 10% 5%) 50%, hsl(30 8% 7%) 100%)',
      }} />

      {/* Subtle cinematic amber line at top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, hsl(35 60% 55% / 0.2) 30%, hsl(35 60% 55% / 0.3) 50%, hsl(35 60% 55% / 0.2) 70%, transparent)',
      }} />

      <div className="section-padding relative z-10">
        <div className="container mx-auto">

          {/* Two-column editorial layout */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">

            {/* Left: Text column – sticky on desktop */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="eyebrow block mb-8">Platforma VOD</span>

                {/* Big display type */}
                <h2 className="font-display font-bold leading-[0.9] mb-6" style={{
                  fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                  letterSpacing: '-2px',
                }}>
                  Streamly
                  <br />
                  <span style={{
                    background: 'linear-gradient(135deg, hsl(35 70% 60%) 0%, hsl(30 50% 75%) 50%, hsl(38 80% 65%) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Studio
                  </span>
                </h2>

                <div className="w-12 h-px mb-8" style={{ background: 'hsl(35 60% 55% / 0.4)' }} />

                <p className="text-muted-foreground leading-relaxed text-base mb-10 max-w-sm">
                  Bez algorytmów, które decydują za Ciebie. Pełna kontrola nad treścią, widownią i danymi — na Twojej domenie, pod Twoją marką.
                </p>

                {/* Stat */}
                <div className="mb-10">
                  <span
                    ref={viewerStat.ref as React.RefObject<HTMLSpanElement>}
                    className="stat-number block text-foreground"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}
                  >
                    {viewerStat.count >= 1000 ? `${(viewerStat.count / 1000).toFixed(1)}K+` : `${viewerStat.count}+`}
                  </span>
                  <span className="text-muted-foreground text-sm tracking-wide">aktywnych widzów / miesiąc</span>
                </div>

                {/* CTA */}
                <motion.a
                  href="https://www.streamlystudio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-3 group"
                >
                  <span className="font-semibold text-foreground tracking-wide text-sm uppercase" style={{ letterSpacing: '0.15em' }}>
                    Poznaj platformę
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ color: 'hsl(35 60% 55%)' }} />
                </motion.a>
              </motion.div>
            </div>

            {/* Right: Visual column */}
            <div className="lg:col-span-7 space-y-4">

              {/* Feature pills – horizontal on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap gap-3 mb-2"
              >
                {features.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    className="flex items-center gap-3 px-5 py-3 rounded-full"
                    style={{
                      background: 'hsl(30 6% 11%)',
                      border: '1px solid hsl(30 8% 18%)',
                    }}
                  >
                    <f.icon className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(35 60% 55% / 0.7)' }} />
                    <span className="text-foreground text-sm font-medium">{f.label}</span>
                    <span className="hidden sm:inline text-muted-foreground text-xs">— {f.desc}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Main visual – dark terminal/dashboard aesthetic */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="rounded-xl overflow-hidden"
                style={{
                  border: '1px solid hsl(30 8% 16%)',
                  background: 'hsl(28 8% 8%)',
                }}
              >
                {/* Top bar */}
                <div className="flex items-center justify-between px-5 py-3" style={{
                  borderBottom: '1px solid hsl(30 8% 14%)',
                  background: 'hsl(28 7% 9%)',
                }}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: 'hsl(35 60% 55% / 0.5)' }} />
                    <span className="text-xs text-muted-foreground tracking-widest uppercase">streamly.studio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="live-dot" />
                    <span className="text-xs text-muted-foreground">LIVE</span>
                  </div>
                </div>

                {/* Dashboard grid */}
                <div className="p-5 grid grid-cols-3 gap-3" style={{ minHeight: '280px' }}>
                  {/* Video area */}
                  <div className="col-span-2 rounded-lg flex items-center justify-center relative overflow-hidden" style={{
                    background: 'linear-gradient(135deg, hsl(28 10% 6%), hsl(30 8% 10%))',
                    border: '1px solid hsl(30 8% 14%)',
                  }}>
                    {/* Fake waveform / visual */}
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-[2px] px-6 pb-4 opacity-30">
                      {Array.from({ length: 40 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="rounded-full"
                          style={{
                            width: '3px',
                            background: 'hsl(35 60% 55%)',
                            height: `${8 + Math.sin(i * 0.5) * 20 + Math.random() * 15}px`,
                          }}
                          animate={{ height: [`${8 + Math.sin(i * 0.5) * 20}px`, `${12 + Math.cos(i * 0.7) * 25}px`, `${8 + Math.sin(i * 0.5) * 20}px`] }}
                          transition={{ duration: 2 + Math.random(), repeat: Infinity, ease: 'easeInOut', delay: i * 0.05 }}
                        />
                      ))}
                    </div>
                    <div className="relative z-10 text-center">
                      <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center" style={{
                        background: 'hsl(35 60% 55% / 0.1)',
                        border: '1px solid hsl(35 60% 55% / 0.2)',
                        boxShadow: '0 0 40px hsl(35 60% 55% / 0.08)',
                      }}>
                        <div className="w-0 h-0 ml-1" style={{
                          borderTop: '7px solid transparent',
                          borderBottom: '7px solid transparent',
                          borderLeft: '12px solid hsl(35 60% 55% / 0.8)',
                        }} />
                      </div>
                      <span className="text-xs text-muted-foreground tracking-widest">ODTWARZAJ</span>
                    </div>
                  </div>

                  {/* Side stats */}
                  <div className="flex flex-col gap-3">
                    <div className="flex-1 rounded-lg p-4 flex flex-col justify-center" style={{
                      background: 'hsl(30 6% 10%)',
                      border: '1px solid hsl(30 8% 14%)',
                    }}>
                      <span className="text-xs text-muted-foreground mb-1">Widzowie</span>
                      <span className="text-foreground font-bold text-lg font-display">847</span>
                      <span className="text-xs mt-1" style={{ color: 'hsl(145 60% 45%)' }}>↑ 12%</span>
                    </div>
                    <div className="flex-1 rounded-lg p-4 flex flex-col justify-center" style={{
                      background: 'hsl(30 6% 10%)',
                      border: '1px solid hsl(30 8% 14%)',
                    }}>
                      <span className="text-xs text-muted-foreground mb-1">Retencja</span>
                      <span className="text-foreground font-bold text-lg font-display">73%</span>
                      <div className="w-full h-1 rounded-full mt-2" style={{ background: 'hsl(30 8% 16%)' }}>
                        <div className="h-full rounded-full" style={{ width: '73%', background: 'hsl(35 60% 55% / 0.6)' }} />
                      </div>
                    </div>
                    <div className="flex-1 rounded-lg p-4 flex flex-col justify-center" style={{
                      background: 'hsl(30 6% 10%)',
                      border: '1px solid hsl(30 8% 14%)',
                    }}>
                      <span className="text-xs text-muted-foreground mb-1">Materiały</span>
                      <span className="text-foreground font-bold text-lg font-display">2.4K</span>
                    </div>
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="px-5 py-3 flex items-center justify-between" style={{
                  borderTop: '1px solid hsl(30 8% 14%)',
                  background: 'hsl(28 7% 9%)',
                }}>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-muted-foreground">Jakość: <span className="text-foreground">4K HDR</span></span>
                    <span className="text-xs text-muted-foreground">Latencja: <span className="text-foreground">&lt;2s</span></span>
                  </div>
                  <span className="text-xs text-muted-foreground">White-label ready</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom amber line */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{
        background: 'linear-gradient(90deg, transparent, hsl(35 60% 55% / 0.12) 30%, hsl(35 60% 55% / 0.12) 70%, transparent)',
      }} />
    </section>
  );
};
