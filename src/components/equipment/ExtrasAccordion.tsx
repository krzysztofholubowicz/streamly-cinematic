import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const extras = [
  'SWIT PB-C420S akumulatory ×6',
  'SWIT LB-SU98 akumulatory (~98Wh) ×8',
  'SWIT S-3602U ładowarka ×2',
  'SWIT S-3822S ładowarka ×2',
  'Percon VK 66 SDI kable ×4',
  'Percon VK 66 UHD2 ×4',
  'Sony QD-G120F (XQD 120GB) ×8',
  'Lexar CFexpress Pro Gold 320GB (Type A) ×4',
  'Sony MRW-G1 czytnik ×2',
  'Sony MRW-G2 czytnik ×2',
  'MacBook Pro 16" ×2',
  'iPad Pro 13" ×1',
];

export const ExtrasAccordion = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="extras" className="border-border">
        <AccordionTrigger className="font-display font-bold text-lg hover:no-underline py-5">
          Zasilanie / Kable / Inne – na zapytanie
        </AccordionTrigger>
        <AccordionContent>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 pt-2 pb-4">
            {extras.map((item) => (
              <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-[hsl(var(--accent-warm))] mt-1.5 flex-shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
