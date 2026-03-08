import { useState } from 'react';
import { Send, ShoppingCart } from 'lucide-react';
import { equipmentCategories } from '@/data/equipment';
import { toast } from '@/hooks/use-toast';

const WEB3FORMS_KEY = 'c1726c05-0a55-4555-acf9-de77ebcd42d5';

interface Props {
  selected: Record<string, number>;
  onClearSelection: () => void;
}

export const RentalForm = ({ selected, onClearSelection }: Props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
    comment: '',
  });
  const [isSending, setIsSending] = useState(false);

  const selectedItems = Object.entries(selected)
    .map(([id, qty]) => {
      for (const cat of equipmentCategories) {
        const item = cat.items.find((i) => i.id === id);
        if (item) return { ...item, selectedQty: qty };
      }
      return null;
    })
    .filter(Boolean);

  const totalItems = selectedItems.length;

  const inputClass =
    'w-full bg-transparent border-b border-border px-0 py-3.5 text-foreground focus:border-[hsl(var(--accent-warm)/0.5)] outline-none transition-colors placeholder:text-muted-foreground/30';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (totalItems === 0) {
      toast({
        title: 'Wybierz sprzęt',
        description: 'Zaznacz przynajmniej jeden element z katalogu.',
        variant: 'destructive',
      });
      return;
    }

    setIsSending(true);

    const summary = selectedItems
      .map((item) => `${item!.name} × ${item!.selectedQty}`)
      .join('\n');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Wynajem sprzętu – ${formData.name}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          'Telefon': formData.phone || '—',
          'Data rozpoczęcia': formData.startDate,
          'Data zakończenia': formData.endDate,
          'Wybrany sprzęt': summary,
          message: formData.comment || '—',
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast({ title: 'Zapytanie wysłane!', description: 'Odpowiemy w ciągu 2 godzin w dni robocze.' });
        setFormData({ name: '', email: '', phone: '', startDate: '', endDate: '', comment: '' });
        onClearSelection();
      } else {
        throw new Error(data.message);
      }
    } catch {
      toast({ title: 'Błąd wysyłki', description: 'Spróbuj ponownie później.', variant: 'destructive' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      {/* Selected items summary */}
      {totalItems > 0 && (
        <div className="mb-8 p-5 rounded-xl border border-[hsl(var(--accent-warm)/0.3)] bg-[hsl(var(--accent-warm)/0.03)]">
          <div className="flex items-center gap-2 mb-4">
            <ShoppingCart className="w-4 h-4 text-[hsl(var(--accent-warm))]" />
            <span className="text-sm font-semibold">
              Wybrany sprzęt ({totalItems} {totalItems === 1 ? 'pozycja' : totalItems < 5 ? 'pozycje' : 'pozycji'})
            </span>
          </div>
          <ul className="space-y-1.5">
            {selectedItems.map((item) => (
              <li key={item!.id} className="text-sm text-muted-foreground flex justify-between">
                <span className="truncate">{item!.name}</span>
                <span className="font-medium text-foreground ml-2 flex-shrink-0">× {item!.selectedQty}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">
              Imię i nazwisko *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">
            Telefon
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={inputClass}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">
              Data rozpoczęcia *
            </label>
            <input
              type="date"
              required
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              className={inputClass}
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">
              Data zakończenia *
            </label>
            <input
              type="date"
              required
              value={formData.endDate}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">
            Komentarz
          </label>
          <textarea
            rows={3}
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            placeholder="Dodatkowe informacje, miejsce realizacji..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="btn-primary w-full text-center flex items-center justify-center gap-3 disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          {isSending ? 'Wysyłanie...' : 'Wyślij zapytanie'}
        </button>
      </form>
    </div>
  );
};
