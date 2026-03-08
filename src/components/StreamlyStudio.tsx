import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useCountUp } from '@/hooks/use-count-up';

const features = [
{
  tag: 'LIVE',
  title: 'Transmisja w jakości 4K'
},
{
  tag: 'VOD',
  title: 'Biblioteka materiałów 24/7'
},
{
  tag: 'ANALITYKA',
  title: 'Dane o widowni w czasie rzeczywistym'
}];


export const StreamlyStudio = () => {
  const viewerStat = useCountUp(2400, 2000);

  return (
    <section id="studio" className="section-padding relative" style={{ background: 'hsl(30 6% 11%)' }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="eyebrow block mb-4">TWOJA PLATFORMA VOD


            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="section-title mb-8">
              
              Streamly Studio
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-10 text-lg">Bez algorytmów, które decydują za Ciebie.
Pełna kontrola nad treścią, widownią i danymi.



            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="#kontakt"
              className="btn-primary inline-flex items-center gap-3">
              
              Poproś o demo
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5">
            
            {/* Browser mockup */}
            <div className="browser-mockup">
              <div className="browser-mockup-bar">
                <div className="browser-dot" style={{ background: 'hsl(var(--muted-foreground) / 0.3)' }} />
                <div className="browser-dot" style={{ background: 'hsl(var(--muted-foreground) / 0.2)' }} />
                <div className="browser-dot" style={{ background: 'hsl(var(--muted-foreground) / 0.15)' }} />
                <span className="text-xs text-muted-foreground ml-3">streamly.studio</span>
              </div>
              <div className="p-6 flex items-center justify-center" style={{ minHeight: '160px' }}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center mx-auto mb-3">
                    <Play className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground">Live preview</p>
                </div>
              </div>
            </div>

            {features.map((feature, index) =>
            <motion.div
              key={feature.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="feature-card flex items-center gap-5">
              
                <span className="eyebrow min-w-[80px]">{feature.tag}</span>
                <p className="text-foreground font-medium">{feature.title}</p>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass-card p-6 text-center">
              
              <p className="text-muted-foreground text-sm mb-2">Aktywnych widzów miesięcznie</p>
              <span ref={viewerStat.ref as React.RefObject<HTMLSpanElement>} className="stat-number text-4xl text-foreground">
                {viewerStat.count >= 1000 ? `${(viewerStat.count / 1000).toFixed(1)}K+` : `${viewerStat.count}+`}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

};