import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How soon can we start?",
    answer:
      "We typically can begin new projects within 1–2 weeks of initial consultation and contract signing, depending on our current project queue.",
  },
  {
    question: "Do you work with clients outside Nairobi?",
    answer:
      "Absolutely! While we're based in Nairobi, we've successfully collaborated with clients across Kenya and internationally using digital communication and project management tools.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "To get the best results, we usually need your brand assets (logo, colors), existing copy/content, high-quality images, and a clear understanding of your business goals.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes, we provide 30 days of post-launch support for every project. We also offer monthly maintenance plans for security updates, hosting, and content changes.",
  },
  {
    question: "How long does a typical website take to build?",
    answer:
      "A standard business website usually takes 3-6 weeks from kickoff to launch. More complex custom web applications may take 8-12 weeks or longer depending on features.",
  },
];

export function ContactFAQ() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl font-bold text-forge-navy mb-4">Common Questions</h2>
        <p className="text-muted-foreground">
          Everything you need to know about working with Lead Forge Studio.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-forge-navy/10">
            <AccordionTrigger className="text-left font-semibold text-forge-navy hover:text-forge-orange transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}