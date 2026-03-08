import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { SelectedEquipment } from '@/pages/EquipmentPage';

interface Props {
  selected: Record<string, SelectedEquipment>;
  onToggle: (id: string, name: string, maxQty: number) => void;
}

interface FlagshipItem {
  id: string;
  name: string;
  qty: number;
  image?: string;
}

interface FlagshipGroup {
  label: string;
  items: FlagshipItem[];
}

const flagshipGroups: FlagshipGroup[] = [
  {
    label: 'Kamery',
    items: [
      { id: 'sony-fx9', name: 'Sony PXW-FX9', qty: 2, image: '/equipment/sony-fx9.jpg' },
      { id: 'sony-fx6', name: 'Sony FX6', qty: 2, image: '/equipment/sony-fx6.jpg' },
    ],
  },
  {
    label: 'Obiektywy',
    items: [
      { id: 'sony-24-70', name: 'Sony 24-70mm f/2.8 GM II', qty: 2 },
      { id: 'sony-16-35', name: 'Sony 16-35mm f/2.8 GM II', qty: 2 },
      { id: 'sony-70-200', name: 'Sony 70-200mm f/2.8 GM II', qty: 2 },
    ],
  },
  {
    label: 'Switcher',
    items: [
      { id: 'atem-hd8', name: 'Blackmagic ATEM Television Studio HD8 ISO', qty: 1, image: '/equipment/atem-mini.jpg' },
    ],
  },
];

export const FlagshipItems = ({ selected, onToggle }: Props) => {
  return (
    <div className="space-y-10">
      {flagshipGroups.map((group) => (
        <div key={group.label}>
          <h3 className="font-display font-bold text-lg mb-5 text-foreground">{group.label}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.items.map((item, i) => {
              const isSelected = !!selected[item.id];
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  onClick={() => onToggle(item.id, item.name, item.qty)}
                  className={`relative flex items-start gap-4 p-5 rounded-xl border text-left transition-all duration-300 w-full ${
                    isSelected
                      ? 'border-[hsl(var(--accent-warm)/0.6)] bg-[hsl(var(--accent-warm)/0.06)]'
                      : 'border-border bg-card hover:border-foreground/20'
                  }`}
                >
                  {/* Checkbox */}
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 border-2 flex items-center justify-center transition-all mt-0.5 ${
                      isSelected
                        ? 'bg-[hsl(var(--accent-warm))] border-[hsl(var(--accent-warm))]'
                        : 'border-muted-foreground/30'
                    }`}
                  >
                    {isSelected && <Check className="w-4 h-4 text-background" />}
                  </div>

                  <div className="flex-1 min-w-0">
                    {item.image && (
                      <div className="w-full h-24 rounded-lg overflow-hidden mb-3 bg-muted">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <h4 className="font-display font-semibold text-sm leading-snug">{item.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.qty} {item.qty === 1 ? 'szt.' : 'szt.'} dostępne
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
