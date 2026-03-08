import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const WEB3FORMS_KEY = 'c1726c05-0a55-4555-acf9-de77ebcd42d5';

const projectTypes = [
'Program TV',
'Kampania video',
'Transmisja live',
'Produkcja VOD',
'Film korporacyjny'];


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', projectType: '', message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nowe zapytanie: ${formData.projectType}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          'Typ projektu': formData.projectType,
          message: formData.message,
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast({ title: 'Wiadomość wysłana!', description: 'Odpowiemy w ciągu 2 godzin.' });
        setFormData({ name: '', email: '', projectType: '', message: '' });
      } else {
        throw new Error(data.message);
      }
    } catch {
      toast({ title: 'Błąd wysyłki', description: 'Spróbuj ponownie lub napisz na hello@streamlyproduction.com', variant: 'destructive' });
    } finally {
      setIsSending(false);
    }
  };

  const inputClass = "w-full bg-transparent border-b border-border px-0 py-3.5 text-foreground focus:border-foreground/40 outline-none transition-colors placeholder:text-muted-foreground/30";

  return (
    <section id="kontakt" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="section-title mb-6">
              
              Porozmawiajmy o Twoim projekcie.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground leading-relaxed mb-12 text-lg">
              
              Opisz swój pomysł — odezwiemy się w ciągu 2 godzin z wstępną propozycją.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6">
              
              <div>
                <span className="eyebrow block mb-2">Email</span>
                <a href="mailto:hello@streamlyproduction.com" className="text-lg hover:text-muted-foreground transition-colors">hello@streamlyproduction.com

                </a>
              </div>
              <div>
                <span className="eyebrow block mb-2">Telefon</span>
                <a href="tel:+48695709701" className="text-lg hover:text-muted-foreground transition-colors">
                  +48 695 709 701
                </a>
              </div>
              <div>
                <span className="eyebrow block mb-2">Studio</span>
                <p className="text-lg">Warszawa, Polska</p>
              </div>
              <div className="flex gap-6 pt-4">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">LinkedIn</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Instagram</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">YouTube</a>
              </div>
            </motion.div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6">
            
            <div>
              <label className="eyebrow block mb-2">Imię i nazwisko</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClass} />
              
            </div>

            <div>
              <label className="eyebrow block mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClass} />
              
            </div>

            <div>
              <label className="eyebrow block mb-2">Typ projektu</label>
              <select
                required
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className={`${inputClass} appearance-none cursor-pointer`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0 center'
                }}>
                
                <option value="" disabled>Wybierz typ projektu</option>
                {projectTypes.map((type) =>
                <option key={type} value={type} className="bg-background text-foreground">{type}</option>
                )}
              </select>
            </div>

            <div>
              <label className="eyebrow block mb-2">Wiadomość</label>
              <textarea
                required
                rows={4}
                placeholder="Opisz swój projekt..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${inputClass} resize-none`} />
              
            </div>

            <button type="submit" disabled={isSending} className="btn-primary w-full text-center mt-4 disabled:opacity-50">
              {isSending ? 'Wysyłanie...' : 'Wyślij zapytanie'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>);

};