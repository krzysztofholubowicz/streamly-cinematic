import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import sonyFX9 from '@/assets/equipment/sony-fx9.jpg';
import sonyFX6 from '@/assets/equipment/sony-fx6.jpg';
import blackmagic from '@/assets/equipment/blackmagic-pocket.jpg';
import aputure600d from '@/assets/equipment/aputure-600d.jpg';
import atemMini from '@/assets/equipment/atem-mini.jpg';
import atomosNinja from '@/assets/equipment/atomos-ninja.jpg';

const equipmentCategories = [
  {
    id: 'cameras', name: 'Kamery',
    items: [
      { name: 'Sony PXW-FX9', spec: 'Full-frame 6K sensor', image: sonyFX9 },
      { name: 'Sony FX6', spec: 'Full-frame 4K Cinema Line', image: sonyFX6 },
      { name: 'Blackmagic Pocket 6K Pro', spec: 'Super 35 sensor', image: blackmagic },
    ]
  },
  {
    id: 'lenses', name: 'Obiektywy',
    items: [
      { name: 'Sony 24-70mm f/2.8 GM', spec: 'Standard zoom' },
      { name: 'Sony 70-200mm f/2.8 GM OSS', spec: 'Telephoto zoom' },
      { name: 'Sony 16-35mm f/2.8 GM', spec: 'Wide angle zoom' },
    ]
  },
  {
    id: 'lighting', name: 'Światło',
    items: [
      { name: 'Aputure 600D Pro', spec: '600W Daylight COB', image: aputure600d },
      { name: 'Aputure 300D II', spec: '300W Daylight COB' },
      { name: 'Aputure MC RGBWW', spec: 'Zestaw 4 szt.' },
    ]
  },
  {
    id: 'audio', name: 'Dźwięk',
    items: [
      { name: 'Sennheiser Wireless', spec: 'Mikrofony krawatowe' },
      { name: 'Zoom H6', spec: 'Rekorder 6-kanałowy' },
      { name: 'Audio-Technica Shotgun', spec: 'Mikrofon kierunkowy' },
    ]
  },
  {
    id: 'streaming', name: 'Streaming & Recording',
    items: [
      { name: 'ATEM Mini Extreme ISO', spec: '8-input switcher', image: atemMini },
      { name: 'Atomos Ninja V', spec: '5" HDR monitor-recorder', image: atomosNinja },
      { name: 'V-Mount Batteries', spec: 'Zestawy akumulatorów' },
    ]
  },
  {
    id: 'accessories', name: 'Akcesoria',
    items: [
      { name: 'Statywy Manfrotto', spec: 'Wideo head' },
      { name: 'Sony CFexpress Type A', spec: 'Karty pamięci' },
      { name: 'ND Filtry', spec: 'Zmienne' },
    ]
  },
];

const EquipmentPage = () => {
  const [activeCategory, setActiveCategory] = useState('cameras');
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', equipment: '', startDate: '', endDate: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const inputClass = "w-full bg-transparent border border-border rounded-2xl px-4 py-3.5 text-foreground focus:border-foreground/30 outline-none transition-colors placeholder:text-muted-foreground/30";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32">
        <div className="section-padding pb-0">
          <Link to="/" className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm uppercase tracking-[0.15em]">Powrót</span>
          </Link>
        </div>

        <section className="section-padding">
          <div className="max-w-5xl">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="eyebrow block mb-6">
              Wynajem sprzętu
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="section-title text-foreground mb-8">
              Wynajem sprzętu
              <br />
              <span className="gradient-text">broadcastowego</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Profesjonalny sprzęt dla profesjonalnych realizacji. Kamery, obiektywy, światło,
              dźwięk, streaming – wszystko, czego potrzebujesz w jednym miejscu.
            </motion.p>
          </div>
        </section>

        <div className="divider" />

        <section className="section-padding py-8">
          <div className="flex flex-wrap gap-3">
            {equipmentCategories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 text-sm uppercase tracking-wider rounded-full border transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-foreground text-background border-foreground font-bold'
                    : 'bg-transparent text-muted-foreground border-border hover:border-foreground/30'
                }`}>
                {cat.name}
              </button>
            ))}
          </div>
        </section>

        <section className="section-padding pt-0">
          {equipmentCategories.map((category) => (
            <div key={category.id} className={activeCategory === category.id ? 'block' : 'hidden'}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <motion.div key={item.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }} className="service-card !p-0 overflow-hidden group">
                    {item.image ? (
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={item.image} alt={item.name}
                          className="w-full h-full object-cover img-hover group-hover:scale-105 transition-transform duration-700" />
                      </div>
                    ) : (
                      <div className="aspect-[4/3] flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <span className="text-muted-foreground text-sm">Zdjęcie wkrótce</span>
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-display font-bold text-lg">{item.name}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{item.spec}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <div className="divider" />

        <section className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="eyebrow block mb-6">Formularz wynajmu</span>
              <h2 className="section-title text-3xl mb-6">Zapytaj o dostępność</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Odpowiadamy w ciągu 2 godzin w dni robocze. Ceny dostępne po wysłaniu zapytania.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
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

              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Telefon</label>
                <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass} />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Sprzęt do wynajęcia *</label>
                <textarea required rows={3} placeholder="Np. Sony FX9, Aputure 600D..." value={formData.equipment}
                  onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                  className={`${inputClass} resize-none`} />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Data rozpoczęcia *</label>
                  <input type="date" required value={formData.startDate} onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className={inputClass} />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Data zakończenia *</label>
                  <input type="date" required value={formData.endDate} onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className={inputClass} />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Wiadomość</label>
                <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`} />
              </div>

              <button type="submit" className="btn-primary w-full text-center">
                Wyślij zapytanie
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EquipmentPage;