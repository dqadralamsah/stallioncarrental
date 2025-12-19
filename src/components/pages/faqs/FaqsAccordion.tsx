import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type PolicyItem = {
  id: string;
  title: string;
  content: string;
};

interface PolicyAccordionProps {
  items: PolicyItem[];
}

export default function FaqsAccordion({ items }: PolicyAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto space-y-2">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id} className="rounded-lg border px-4">
          <AccordionTrigger className="text-left font-medium hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
