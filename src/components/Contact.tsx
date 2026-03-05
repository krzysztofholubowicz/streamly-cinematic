import { motion } from 'framer-motion';
import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', projectType: '', timeline: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="kontakt" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div>
            <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="eyebrow block mb-4">
              Kontakt
            </motion.span>

            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="section-title mb-8">
              Gotowy na zmianę
              <br />
              <span className="gradient-text">perspektywy?</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="text-muted-foreground leading-relaxed mb-12 text-lg">
              Napisz do nas. Omawiamy Twój projekt, odczuwamy energię, i razem tworzymy coś niezapomnianego.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-6">
              <div>
                <span className="eyebrow block mb-2">Email</span>
                <a href="mailto:hello@streamlyproduction.pl" className="text-xl hover:text-teal transition-colors">
                  hello@streamlyproduction.pl
                </a>
              </div>
              <div>
                <span className="eyebrow block mb-2">Telefon</span>
                <a href="tel:+48695709701" className="text-xl hover:text-teal transition-colors">
                  +48 695 709 701
                </a>
              </div>
              <div>
                <span className="eyebrow block mb-2">Studio</span>
                <p className="text-xl">Warszawa, Polska</p>
              </div>
              <div>
                <span className="eyebrow block mb-2">Czas odpowiedzi</span>
                <p className="text-muted-foreground">Do 2 godzin w dni robocze</p>
              </div>
              <div>
                <span className="eyebrow block mb-2">Znajdź nas</span>
                <div className="flex gap-6">
                  <a href="#" className="text-muted-foreground hover:text-teal transition-colors">LinkedIn</a>
                  <a href="#" className="text-muted-foreground hover:text-teal transition-colors">Instagram</a>
                  <a href="#" className="text-muted-foreground hover:text-teal transition-colors">YouTube</a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.form initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Imię i nazwisko *</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-foreground focus:border-teal outline-none transition-colors" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Email *</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-foreground focus:border-teal outline-none transition-colors" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Telefon</label>
                <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-foreground focus:border-teal outline-none transition-colors" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Typ projektu *</label>
                <input type="text" required placeholder="np. program TV, video marketing, transmisja live" value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-foreground focus:border-teal outline-none transition-colors placeholder:text-muted-foreground/40" />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Kiedy planujesz realizację? *</label>
              <input type="text" required placeholder="np. marzec 2026" value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-foreground focus:border-teal outline-none transition-colors placeholder:text-muted-foreground/40" />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Wiadomość *</label>
              <textarea required rows={5} placeholder="Opowiedz nam o swoim pomyśle, wyzwaniach i budżecie..."
                value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-foreground focus:border-teal outline-none transition-colors resize-none placeholder:text-muted-foreground/40" />
            </div>

            <button type="submit" className="btn-primary w-full text-center">
              Wyślij zapytanie
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
