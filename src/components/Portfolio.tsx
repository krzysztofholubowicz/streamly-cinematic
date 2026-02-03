import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

// Placeholder for portfolio items - in real app, would use actual project images
const portfolioItems = [
  { title: 'Polsat Events', category: 'TV Production', featured: true },
  { title: 'Impact CEE Conference', category: 'Live Streaming' },
  { title: 'Corporate Training Series', category: 'Video Marketing' },
  { title: 'Product Launch Event', category: 'Live Streaming' },
];

export const Portfolio = () => {
  return (
    <section id="realizacje" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Nasze{' '}
            <span className="text-gradient-primary">realizacje</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wybrane projekty, które pokazują nasz styl pracy i standardy jakości.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${
                item.featured ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Placeholder background */}
              <div
                className={`w-full bg-gradient-to-br from-muted to-card ${
                  item.featured ? 'h-[400px] md:h-full min-h-[500px]' : 'h-[280px]'
                }`}
              >
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/30 blur-3xl" />
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-secondary/30 blur-2xl" />
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-wider text-primary mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                
                {/* Play button */}
                <div className="flex items-center gap-3">
                  <button className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                    <Play className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors fill-current" />
                  </button>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    Zobacz projekt
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
          >
            Zobacz więcej realizacji
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
