import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Minus, Plus } from 'lucide-react';
import { equipmentCategories, type EquipmentItem } from '@/data/equipment';
import { KeyedImage } from '@/components/equipment/KeyedImage';

export interface SelectedItem {
  item: EquipmentItem;
  qty: number;
}

interface Props {
  selected: Record<string, number>;
  onToggle: (item: EquipmentItem) => void;
  onQtyChange: (id: string, qty: number) => void;
}

export const EquipmentCatalog = ({ selected, onToggle, onQtyChange }: Props) => {
  const [activeCategory, setActiveCategory] = useState('cameras');

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {equipmentCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 text-xs uppercase tracking-wider rounded-full border transition-all duration-300 ${
              activeCategory === cat.id
                ? 'bg-foreground text-background border-foreground font-bold'
                : 'bg-transparent text-muted-foreground border-border hover:border-foreground/30'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Equipment list */}
      {equipmentCategories.map((category) => (
        <div key={category.id} className={activeCategory === category.id ? 'block' : 'hidden'}>
          <div className="space-y-3">
            {category.items.map((item, index) => {
              const isSelected = !!selected[item.id];
              const qty = selected[item.id] || 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`flex items-center gap-4 p-4 md:p-5 rounded-xl border transition-all duration-300 cursor-pointer group ${
                    isSelected
                      ? 'border-[hsl(var(--accent-warm)/0.5)] bg-[hsl(var(--accent-warm)/0.05)]'
                      : 'border-border hover:border-foreground/20 bg-card'
                  }`}
                  onClick={() => onToggle(item)}
                >
                  {/* Checkbox */}
                  <div
                    className={`w-5 h-5 rounded flex-shrink-0 border-2 flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-[hsl(var(--accent-warm))] border-[hsl(var(--accent-warm))]'
                        : 'border-muted-foreground/30 group-hover:border-muted-foreground/60'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 text-background" />}
                  </div>

                  {/* Image */}
                  {item.image && (
                    <div className="relative w-[4.5rem] h-[4.5rem] rounded-xl flex-shrink-0 hidden sm:block overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20 ring-1 ring-white/[0.06]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain p-1.5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Name & available qty */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-sm md:text-base truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Dostępne: {item.quantity} szt.
                    </p>
                    {item.note && (
                      <p className="text-xs text-[hsl(var(--accent-warm)/0.8)] mt-1">
                        {item.note}
                      </p>
                    )}
                  </div>

                  {/* Quantity selector */}
                  {isSelected && (
                    <div
                      className="flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => onQtyChange(item.id, Math.max(1, qty - 1))}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">{qty}</span>
                      <button
                        onClick={() => onQtyChange(item.id, Math.min(item.quantity, qty + 1))}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
