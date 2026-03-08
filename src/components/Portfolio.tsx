import { motion } from 'framer-motion';
import liveImage from '@/assets/live-production.jpg';
import cameraImage from '@/assets/camera-closeup.jpg';
import studioImage from '@/assets/studio-camera.jpg';

const projects = [
  { title: 'Polsat Events', category: 'TV Production', year: '2024', image: liveImage, featured: true },
  { title: 'Impact CEE Conference', category: 'Live Streaming', year: '2024', image: cameraImage },
  { title: 'Corporate Training', category: 'Video Production', year: '2023', image: studioImage },
];

export const Portfolio = () => {
  return (
    <section id="realizacje" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="eyebrow block mb-4">Portfolio</span>
            <h2 className="section-title">
              Wybrane
              <br />
              <span className="gradient-text">realizacje</span>
            </h2>
          </div>
          <a href="#kontakt" className="text-link mt-6 md:mt-0">Zobacz więcej projektów</a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-6">
          <div className="project-card group cursor-pointer aspect-[21/9]">
            <img src={projects[0].image} alt={projects[0].title} className="w-full h-full object-cover img-hover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 md:p-12">
              <span className="eyebrow mb-2">{projects[0].category}</span>
              <h3 className="font-display text-3xl md:text-5xl font-bold mb-2">{projects[0].title}</h3>
              <span className="text-muted-foreground">{projects[0].year}</span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(1).map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="project-card group cursor-pointer">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover img-hover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8">
                <span className="eyebrow mb-2">{project.category}</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-1">{project.title}</h3>
                <span className="text-muted-foreground text-sm">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};