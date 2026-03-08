import { Check } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { SelectedEquipment } from '@/pages/EquipmentPage';

interface Props {
  selected: Record<string, SelectedEquipment>;
  onToggle: (id: string, name: string, maxQty: number) => void;
}

interface PackageOption {
  id: string;
  name: string;
  details: string;
}

const packages: PackageOption[] = [
  {
    id: 'pkg-light',
    name: 'Pakiet światło',
    details: 'Aputure LS 300X ×2, Aputure Fresnel 2X ×2, Nanlite Alien 300C ×2',
  },
  {
    id: 'pkg-audio',
    name: 'Sennheiser wireless ×4 + Hollyland intercom',
    details: 'Sennheiser AVX-ME2/835 Set ×4, Hollyland Solidcom C1 Pro (6 słuchawek) ×1',
  },
  {
    id: 'pkg-rig',
    name: 'Sachtler statywy ×4 + SmallRig rigging kits',
    details: 'Sachtler S2064S-FTGS ×4, Manfrotto 008BSU ×4, SmallRig 4274 ×2, SmallRig VCT-14 ×4, Tilta ES-T18-V ×2',
  },
];

export const PackagesAccordion = ({ selected, onToggle }: Props) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="packages" className="border-border">
        <AccordionTrigger className="font-display font-bold text-lg hover:no-underline py-5">
          Światło + Dźwięk + Rig
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3 pt-2 pb-4">
            {packages.map((pkg) => {
              const isSelected = !!selected[pkg.id];
              return (
                <button
                  key={pkg.id}
                  onClick={() => onToggle(pkg.id, pkg.name, 1)}
                  className={`w-full flex items-start gap-4 p-5 rounded-xl border text-left transition-all duration-300 ${
                    isSelected
                      ? 'border-[hsl(var(--accent-warm)/0.6)] bg-[hsl(var(--accent-warm)/0.06)]'
                      : 'border-border bg-card hover:border-foreground/20'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-md flex-shrink-0 border-2 flex items-center justify-center transition-all mt-0.5 ${
                      isSelected
                        ? 'bg-[hsl(var(--accent-warm))] border-[hsl(var(--accent-warm))]'
                        : 'border-muted-foreground/30'
                    }`}
                  >
                    {isSelected && <Check className="w-4 h-4 text-background" />}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm">{pkg.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{pkg.details}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
