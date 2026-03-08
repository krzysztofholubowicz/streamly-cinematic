import { motion } from 'framer-motion';
import { useState } from 'react';

const projectTypes = [
  'Program TV',
  'Kampania wideo',
  'Transmisja live',
  'Produkcja VOD',
  'Film korporacyjny',
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', projectType: '', timeline: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const inputClass = "w-full bg-transparent border-b border-border px-0 py-3.5 text-foreground focus:border-foreground/30 outline-none transition-colors placeholder:text-muted-foreground/30";

  return (
    <section id="kontakt" className="section-padding border-t border-border">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="eyebrow block mb-4">
              Kontakt
            </motion.span>

            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="section-title mb-8">
              Porozmawiajmy
              <br />
              <span className="text-muted-foreground">o Twoim projekcie.</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-muted-foreground leading-relaxed mb-12 text-lg">
              Opisz swój pomysł – odezwiemy się w ciągu 2 godzin z wstępną propozycją.
              Bez zobowiązań, bez corporate bullshitu.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-6">
              <div>
                <span className="eyebrow block mb-2">Email</span>
                <a href="mailto:hello@streamlyproduction.pl" className="text-xl hover:text-foreground/70 transition-colors">
                  hello@streamlyproduction.pl
                </a>
              </div>
              <div>
                <span className="eyebrow block mb-2">Telefon</span>
                <a href="tel:+48695709701" className="text-xl hover:text-foreground/70 transition-colors">
                  +48 695 709 701
                </a>
              </div>
              <div>
                <span className="eyebrow block mb-2">Studio</span>
                <p className="text-xl">Warszawa, Polska</p>
              </div>
              <div>
                <span className="eyebrow block mb-2">Czas odpowiedzi</span>
                <p className="text-muted-foreground flex items-center gap-2">
                  <span className="live-dot" />
                  Odpowiadamy · do 2 godzin w dni robocze
                </p>
              </div>
              <div>
                <span className="eyebrow block mb-2">Znajdź nas</span>
                <div className="flex gap-6">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">YouTube</a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.form initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit} className="space-y-5" style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '20px', padding: '2.5rem' }}>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Imię i nazwisko *</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass} />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Email *</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Telefon</label>
                <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass} />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Typ projektu *</label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className={`${inputClass} appearance-none cursor-pointer bg-transparent`}
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0 center' }}
                >
                  <option value="" disabled>Wybierz typ projektu</option>
                  {projectTypes.map(type => (
                    <option key={type} value={type} className="bg-background text-foreground">{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Kiedy planujesz realizację? *</label>
              <input type="text" required placeholder="np. kwiecień 2026" value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className={inputClass} />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Wiadomość *</label>
              <textarea required rows={5} placeholder="Czego potrzebujesz? Co chcesz osiągnąć? Jaki masz budżet?"
                value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} resize-none border border-border rounded-xl px-4`} />
            </div>

            <button type="submit" className="btn-primary w-full text-center relative overflow-hidden group">
              <span className="relative z-10">Wyślij zapytanie</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
