import { motion } from 'framer-motion';

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
              <span className="text-muted-foreground">Studio</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              Własna platforma streamingowa white-label dla Twojej marki. 
              Pełna kontrola nad dystrybucją treści, brak zależności od 
              zewnętrznych platform, profesjonalne narzędzia analityczne.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {[
                'Transmisje live i VOD w jednym miejscu',
                'Własny branding i domena',
                'Monetyzacja treści',
                'Analityka widowni w czasie rzeczywistym',
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-foreground" />
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              href="#kontakt"
              className="btn-primary inline-block mt-10"
            >
              Zamów demo
            </motion.a>
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Browser mockup */}
            <div className="editorial-card overflow-hidden">
              {/* Browser header */}
              <div className="flex items-center gap-2 p-4 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-muted" />
                <div className="w-3 h-3 rounded-full bg-muted" />
                <div className="w-3 h-3 rounded-full bg-muted" />
                <div className="flex-1 mx-4">
                  <div className="h-6 bg-muted rounded-sm flex items-center px-3">
                    <span className="text-xs text-muted-foreground">streamly.studio</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="aspect-video bg-background p-8">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="h-4 w-24 bg-muted mb-4" />
                    <div className="h-8 w-48 bg-foreground/10" />
                  </div>
                  
                  {/* Video grid mockup */}
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="aspect-video bg-muted" />
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="h-3 w-32 bg-muted" />
                    <div className="h-8 w-8 bg-foreground/20" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats card overlay */}
            <div className="absolute -bottom-8 -left-8 editorial-card p-6 bg-background">
              <span className="eyebrow block mb-2">Aktywni widzowie</span>
              <span className="stat-number text-4xl">2.4K</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
