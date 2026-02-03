import { motion } from 'framer-motion';
import { Wifi, Users, Shield, Globe } from 'lucide-react';
import liveImage from '@/assets/live-production.jpg';

const features = [
  {
    icon: Wifi,
    title: 'Streaming bez przerw',
    description: 'Gwarantujemy stabilną transmisję nawet przy najtrudniejszych warunkach sieciowych.',
  },
  {
    icon: Users,
    title: 'Wielokamerowe realizacje',
    description: 'Profesjonalne przełączanie między kamerami, grafiki na żywo, napisy.',
  },
  {
    icon: Shield,
    title: 'Backup na każdym etapie',
    description: 'Redundantne połączenia, zapasowe zasilanie, pełne bezpieczeństwo techniczne.',
  },
  {
    icon: Globe,
    title: 'Globalna dystrybucja',
    description: 'YouTube, Facebook, LinkedIn, własna platforma – stream gdzie chcesz.',
  },
];

export const LiveStreaming = () => {
  return (
    <section id="transmisje" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={liveImage}
          alt="Live production with professional camera"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/80" />
      </div>

      <div className="relative container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-6">
              Transmisje Online
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Na żywo,{' '}
              <span className="text-gradient-secondary">bez kompromisów</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Konferencje, eventy, koncerty, premiery – realizujemy transmisje, które budują 
              napięcie i angażują widzów. Nasza infrastruktura gwarantuje zero problemów 
              technicznych w najważniejszym momencie.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-10 text-center">
              <div className="mb-8">
                <span className="text-7xl md:text-8xl font-display font-bold text-gradient-secondary">
                  15+
                </span>
                <p className="text-xl text-muted-foreground mt-4">
                  lat doświadczenia w produkcji telewizyjnej
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-foreground/10">
                <div>
                  <span className="text-3xl font-display font-bold text-foreground">1000+</span>
                  <p className="text-sm text-muted-foreground mt-1">transmisji live</p>
                </div>
                <div>
                  <span className="text-3xl font-display font-bold text-foreground">99.9%</span>
                  <p className="text-sm text-muted-foreground mt-1">uptime gwarantowany</p>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-secondary/5 rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
