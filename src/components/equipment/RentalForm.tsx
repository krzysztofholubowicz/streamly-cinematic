import { useState } from 'react';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { Send, CalendarIcon } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import type { SelectedEquipment } from '@/pages/EquipmentPage';

interface Props {
  selected: SelectedEquipment[];
  onClearSelection: () => void;
}

export const RentalForm = ({ selected, onClearSelection }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [comment, setComment] = useState('');
  const [isSending, setIsSending] = useState(false);

  const inputClass =
    'w-full bg-transparent border-b border-border px-0 py-3.5 text-foreground focus:border-[hsl(var(--accent-warm)/0.5)] outline-none transition-colors placeholder:text-muted-foreground/30';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selected.length === 0) {
      toast({ title: 'Wybierz sprzęt', description: 'Zaznacz przynajmniej jeden element.', variant: 'destructive' });
      return;
    }
    if (!startDate || !endDate) {
      toast({ title: 'Podaj daty', description: 'Wybierz datę rozpoczęcia i zakończenia.', variant: 'destructive' });
      return;
    }

    setIsSending(true);

    const summary = selected.map((s) => `• ${s.name}`).join('\n');
    console.log('Rental inquiry:', { name, email, phone, startDate, endDate, comment, equipment: summary });

    // TODO: Connect to Supabase Edge Function + Resend
    await new Promise((r) => setTimeout(r, 1000));

    toast({ title: 'Zapytanie wysłane!', description: 'Odpowiemy w ciągu 2 godzin w dni robocze.' });
    setName(''); setEmail(''); setPhone(''); setStartDate(undefined); setEndDate(undefined); setComment('');
    onClearSelection();
    setIsSending(false);
  };

  return (
    <div>
      {/* Summary */}
      {selected.length > 0 && (
        <div className="mb-8 p-5 rounded-xl border border-[hsl(var(--accent-warm)/0.3)] bg-[hsl(var(--accent-warm)/0.03)]">
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Wybrany sprzęt</p>
          <ul className="space-y-1.5">
            {selected.map((s) => (
              <li key={s.id} className="text-sm text-foreground flex items-start gap-2">
                <span className="text-[hsl(var(--accent-warm))] mt-0.5">•</span>
                {s.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Imię i nazwisko *</label>
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Email *</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
          </div>
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Telefon</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Data od *</label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    'w-full flex items-center gap-2 border-b border-border px-0 py-3.5 text-left transition-colors focus:border-[hsl(var(--accent-warm)/0.5)] outline-none',
                    !startDate && 'text-muted-foreground/30'
                  )}
                >
                  <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                  {startDate ? format(startDate, 'd MMM yyyy', { locale: pl }) : 'Wybierz datę'}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  disabled={(d) => d < new Date()}
                  initialFocus
                  className={cn('p-3 pointer-events-auto')}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Data do *</label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    'w-full flex items-center gap-2 border-b border-border px-0 py-3.5 text-left transition-colors focus:border-[hsl(var(--accent-warm)/0.5)] outline-none',
                    !endDate && 'text-muted-foreground/30'
                  )}
                >
                  <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                  {endDate ? format(endDate, 'd MMM yyyy', { locale: pl }) : 'Wybierz datę'}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  disabled={(d) => d < (startDate || new Date())}
                  initialFocus
                  className={cn('p-3 pointer-events-auto')}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div>
          <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Komentarz</label>
          <textarea
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
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
