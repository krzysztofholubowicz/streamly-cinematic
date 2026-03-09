import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import liveImage from '@/assets/live-production.jpg';
import cameraImage from '@/assets/camera-closeup.jpg';
import studioImage from '@/assets/studio-camera.jpg';

const projects = [
  { title: 'Polsat', category: 'Realizacja eventowa multicam', image: liveImage },
  { title: 'Impact CEE', category: 'Relacja z konferencji', image: cameraImage },
  { title: 'Seria onboardingowa', category: 'Produkcja korporacyjna', image: studioImage },
];

const FeaturedProject = ({ project }: { project: typeof projects[0] }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-6"
    >
      <div className="project-card group cursor-pointer overflow-hidden" style={{ aspectRatio: '21/9' }}>
        <motion.img
          style={{ y, scale }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="eyebrow mb-2">{project.category}</span>
            <h3 className="font-display text-2xl md:text-4xl font-bold">{project.title}</h3>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export const Portfolio = () => {
  return (
    <section id="realizacje" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <span className="eyebrow block mb-4">Portfolio</span>
            <h2 className="section-title">Wybrane realizacje</h2>
          </div>
          <a href="#kontakt" className="text-link text-sm mt-6 md:mt-0 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            Zobacz wszystkie <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Featured project – full width */}
        <FeaturedProject project={projects[0]} />

        {/* Two side-by-side */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card group cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover img-hover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8">
                <span className="eyebrow mb-2">{project.category}</span>
                <h3 className="font-display text-xl md:text-2xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
