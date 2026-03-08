import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ArrowLeft, Camera, Monitor, Mic, Users, GraduationCap, Briefcase, TrendingUp, Tv } from 'lucide-react';
import { Link } from 'react-router-dom';

const equipment = [
  'Kamery Sony FX9 i Sony FX6',
  'Obiektywy Sony FE 24-70mm f/2.8 GM, Sony FE 70-200mm f/2.8 GM OSS, Sony FE 16-35mm f/2.8 GM',
  'Mikser wideo Blackmagic ATEM Television Studio HD8 ISO — do produkcji wielokamerowej i transmisji na żywo',
  'Monitory podglądowe',
];

const audiences = [
  {
    icon: Users,
    text: 'Organizatorzy targów, wystaw i kongresów szukający formatu online lub hybrydowego',
  },
  {
    icon: Tv,
    text: 'Firmy z sektora kultury, edukacji i eventowego potrzebujące profesjonalnej obsługi transmisji',
  },
  {
    icon: Briefcase,
    text: 'Klienci oczekujący kompleksowej usługi — od sprzętu i transmisji, po platformę zarządzania wydarzeniem',
  },
];

const projectDetails = [
  { label: 'Beneficjent', value: 'Krzysztof Hołubowicz' },
  { label: 'Nr umowy', value: 'KPOD.01.03-IW.01-8867/24' },
  { label: 'Tytuł projektu', value: 'Rozszerzenie działalności o organizację targów, wystaw i kongresów online oraz hybrydowych' },
  { label: 'Całkowita wartość projektu', value: '642 064,55 zł', highlight: true },
  { label: 'Dofinansowanie z Unii Europejskiej', value: '469 803,38 zł (90% kosztów kwalifikowalnych)', highlight: true },
  { label: 'Program', value: 'Inwestycja A1.2.1 KPO – Odporność i konkurencyjność gospodarki' },
  { label: 'Operator', value: 'Towarzystwo Inwestycji Społeczno-Ekonomicznych S.A. (TISE)' },
  { label: 'Jednostka wspierająca', value: 'Polska Agencja Rozwoju Przedsiębiorczości (PARP)' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const KPOPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground noise-overlay">
      <SEO
        title="Projekt KPO – Streamly Studio"
        description="Streamly Production realizuje inwestycję w ramach Krajowego Planu Odbudowy – profesjonalne studio produkcyjne z systemem wielokamerowym i transmisją live."
        path="/kpo"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Project',
          name: 'Streamly Studio – Projekt KPO',
          description: 'Budowa profesjonalnego studia produkcyjnego w ramach Krajowego Planu Odbudowy i Zwiększania Odporności.',
          funder: { '@type': 'Organization', name: 'Unia Europejska – NextGenerationEU' },
        }}
      />
      <Header />

      <main className="pt-32">
        {/* Back link */}
        <div className="section-padding !pb-0">
          <Link to="/" className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-[0.15em]">Powrót</span>
          </Link>
        </div>

        {/* ── EU Logo Bar ── */}
        <section className="section-padding !pt-12 !pb-0">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto">
            <div className="px-8 py-5 rounded-2xl flex items-center justify-center bg-white">
              <img src="/images/kpo/kpo-banner.jpg" alt="Krajowy Plan Odbudowy – Rzeczpospolita Polska – Sfinansowane przez Unię Europejską NextGenerationEU" className="w-full max-w-3xl object-contain" />
            </div>
            <p className="text-center mt-4 text-xs text-muted-foreground tracking-wider uppercase">
              Finansowane przez Unię Europejską — NextGenerationEU
            </p>
          </motion.div>
        </section>

        {/* ── Hero ── */}
        <section className="section-padding !pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span {...fadeUp} transition={{ duration: 0.6 }} className="eyebrow block mb-6">
              Projekt KPO
            </motion.span>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display font-bold tracking-tight leading-[1.05] mb-8"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', letterSpacing: '-1px' }}
            >
              Rozszerzamy działalność o organizację targów, wystaw i&nbsp;kongresów{' '}
              <span className="hero-accent">online oraz hybrydowych</span>
            </motion.h1>

            <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Dzięki dofinansowaniu z Krajowego Planu Odbudowy budujemy profesjonalne zaplecze do organizacji wydarzeń w&nbsp;formule online i&nbsp;hybrydowej. Projekt łączy zakup sprzętu audiowizualnego najwyższej klasy z&nbsp;budową własnej platformy streamingowej — tak, aby móc kompleksowo obsługiwać targi, wystawy i&nbsp;kongresy dla klientów z&nbsp;kraju i&nbsp;zagranicy.
            </motion.p>
          </div>
        </section>

        {/* ── Sprzęt ── */}
        <section className="section-padding !pt-0">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'hsl(35 60% 55% / 0.1)', border: '1px solid hsl(35 60% 55% / 0.15)' }}>
                    <Camera className="w-5 h-5" style={{ color: 'hsl(35 60% 55%)' }} />
                  </div>
                  <span className="eyebrow">Co kupujemy?</span>
                </div>
                <h2 className="section-title text-foreground mb-6">
                  Sprzęt audiowizualny
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Sercem inwestycji jest profesjonalny sprzęt do produkcji wideo i&nbsp;transmisji na żywo:
                </p>
                <div className="space-y-4">
                  {equipment.map((item, i) => (
                    <motion.div
                      key={i}
                      {...fadeUp}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="flex items-start gap-4 p-5 rounded-xl border border-border/60 transition-all duration-300 hover:border-accent-warm/30"
                      style={{ background: 'hsl(30 6% 10% / 0.6)' }}
                    >
                      <span className="eyebrow mt-0.5 shrink-0">0{i + 1}</span>
                      <p className="text-foreground text-sm md:text-base leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'hsl(35 60% 55% / 0.1)', border: '1px solid hsl(35 60% 55% / 0.15)' }}>
                    <Monitor className="w-5 h-5" style={{ color: 'hsl(35 60% 55%)' }} />
                  </div>
                  <span className="eyebrow">Platforma</span>
                </div>
                <h2 className="section-title text-foreground mb-6">
                  Platforma streamingowa
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Obok sprzętu budujemy dedykowaną platformę do zarządzania wydarzeniami online. Umożliwi ona transmisję na żywo, panele dyskusyjne oraz analizę zaangażowania — wszystko pod własną domeną i&nbsp;marką klienta.
                </p>

                {/* Szkolenia */}
                <div className="mt-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'hsl(35 60% 55% / 0.1)', border: '1px solid hsl(35 60% 55% / 0.15)' }}>
                      <GraduationCap className="w-5 h-5" style={{ color: 'hsl(35 60% 55%)' }} />
                    </div>
                    <span className="eyebrow">Szkolenia i doradztwo</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: 'hsl(35 60% 55% / 0.5)' }} />
                      Szkolenia z zarządzania wydarzeniami (event management), marketingu cyfrowego i&nbsp;sprzedaży
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: 'hsl(35 60% 55% / 0.5)' }} />
                      Doradztwo strategiczne w&nbsp;zakresie rozwoju firmy i&nbsp;zielonej transformacji produkcji audiowizualnej
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Dla kogo? ── */}
        <section className="section-padding border-t border-border/60">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
              <span className="eyebrow block mb-4">Dla kogo?</span>
              <h2 className="section-title text-foreground">Odbiorcy projektu</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {audiences.map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative p-8 md:p-10 rounded-2xl border border-border/60 hover:border-accent-warm/30 transition-all duration-500"
                  style={{ background: 'hsl(30 6% 10% / 0.6)' }}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(180deg, hsl(35 60% 55% / 0.03), transparent 60%)' }} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: 'hsl(35 60% 55% / 0.08)', border: '1px solid hsl(35 60% 55% / 0.12)' }}>
                      <item.icon className="w-5 h-5" style={{ color: 'hsl(35 60% 55%)' }} />
                    </div>
                    <p className="text-foreground text-sm md:text-base leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Rezultat ── */}
        <section className="section-padding border-t border-border/60">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-8" style={{ background: 'hsl(35 60% 55% / 0.1)', border: '1px solid hsl(35 60% 55% / 0.15)' }}>
                <TrendingUp className="w-6 h-6" style={{ color: 'hsl(35 60% 55%)' }} />
              </div>
              <span className="eyebrow block mb-4">Rezultat</span>
              <h2 className="section-title text-foreground mb-8">Co z tego wyniknie?</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Po zakończeniu projektu firma dysponuje kompletnym, profesjonalnym zapleczem do obsługi wydarzeń online i&nbsp;hybrydowych — sprzętem, platformą i&nbsp;przeszkoloną kadrą.
              </p>
              <p className="text-foreground font-semibold text-lg mt-6">
                Nowy segment usług i&nbsp;trwała dywersyfikacja przychodów.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Dane projektu ── */}
        <section className="section-padding border-t border-border/60">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
              <span className="eyebrow block mb-4">Informacje formalne</span>
              <h2 className="section-title text-foreground">Dane projektu</h2>
            </motion.div>

            <div className="rounded-2xl border border-border/60 overflow-hidden" style={{ background: 'hsl(30 6% 10% / 0.6)' }}>
              {projectDetails.map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`flex flex-col md:flex-row md:items-start gap-2 md:gap-8 px-8 py-5 ${i !== projectDetails.length - 1 ? 'border-b border-border/40' : ''}`}
                >
                  <span className="text-xs text-muted-foreground uppercase tracking-wider md:w-64 shrink-0 pt-0.5">{item.label}</span>
                  <p className={`leading-relaxed ${item.highlight ? 'stat-number text-xl text-foreground' : 'text-foreground font-medium text-sm md:text-base'}`}>
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer logos + hashtags ── */}
        <section className="section-padding border-t border-border/60">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 px-8 py-5 rounded-2xl flex items-center justify-center bg-white">
              <img src="/images/kpo/kpo-banner.jpg" alt="Krajowy Plan Odbudowy – Rzeczpospolita Polska – Sfinansowane przez Unię Europejską NextGenerationEU" className="w-full max-w-3xl object-contain" />
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Projekt współfinansowany ze środków Unii Europejskiej w ramach Krajowego Planu Odbudowy i&nbsp;Zwiększania Odporności.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['#FunduszeUE', '#FunduszeEuropejskie', '#NextGenerationEU'].map((tag) => (
                <span key={tag} className="deliverable-pill">{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KPOPage;
