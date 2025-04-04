import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import faqs from "@/data/faqs.json";

const FAQ = () => {
  return (
    <section className="faq-section max-w-3xl mx-auto px-4">
      <h1 className="faq-title text-2xl font-bold mb-6">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-left whitespace-normal">{faq.question}</AccordionTrigger>
            <AccordionContent className="whitespace-normal">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;