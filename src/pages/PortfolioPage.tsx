import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { projects } from '@/data/projects';

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Realizacje - Streamly Production</title>
        <meta name="description" content="Zobacz nasze wybrane realizacje - produkcje telewizyjne, filmy korporacyjne, relacje z wydarzeń i więcej." />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow block mb-4">Portfolio</span>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Nasze realizacje
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Od produkcji telewizyjnych po filmy korporacyjne - zobacz projekty, 
                które stworzyliśmy dla naszych klientów.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Masonry Grid */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="break-inside-avoid mb-6"
                >
                  <div className="project-card group cursor-pointer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover img-hover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                      <span className="eyebrow mb-2">{project.category}</span>
                      <h3 className="font-display text-xl md:text-2xl font-bold">{project.title}</h3>
                      {project.year && (
                        <span className="text-sm text-muted-foreground mt-2">{project.year}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PortfolioPage;
