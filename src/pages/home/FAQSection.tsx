import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/shadcnUI/accordion";
import faqs from "@/data/about/faqs.json";

const FAQSection = () => {
  const faqCategories = faqs;

  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {faqCategories.map((category, index) => (
            <div key={index} className="bg-background rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`item-${index}-${faqIndex}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p>{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;