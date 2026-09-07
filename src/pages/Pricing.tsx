import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PricingCard } from "@/components/Pricing/PricingCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What's included in the price?",
    answer:
      "Our pricing is transparent. Each package includes custom design, mobile responsiveness, essential SEO, and development. Specifics like page count and revision rounds vary by tier as detailed above. There are no hidden fees for the services listed.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we typically work with a 50% deposit to initiate the project and the remaining 50% upon completion before launch. For larger projects (Custom tier), we can discuss milestone-based payment schedules.",
  },
  {
    question: "How long does a project take?",
    answer:
      "A Starter project usually takes about 2 weeks. Business tier projects typically range from 3-5 weeks depending on complexity. Custom applications vary and we'll provide a detailed timeline during scoping.",
  },
  {
    question: "Do you provide hosting and domain setup?",
    answer:
      "While hosting and domain registration fees are separate (paid to third-party providers), we handle the entire setup process for you. We can recommend reliable, fast hosting partners that work best for Kenyan businesses.",
  },
  {
    question: "What if I need ongoing changes after launch?",
    answer:
      "For minor changes, we include a short post-launch support period. For regular updates, we offer maintenance retainers. All our sites are built on easy-to-use platforms (like CMS) so you can also make basic content updates yourself.",
  },
  {
    question: "Do prices include maintenance?",
    answer:
      "Development prices are for the initial build. Ongoing maintenance (security updates, backups, technical support) is available as an optional monthly subscription to keep your site running smoothly.",
  },
];

const Pricing = () => {
  return (
    <div className="flex min-h-screen flex-col bg-forge-cream">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl text-center">
            <span className="inline-block rounded-full bg-forge-orange/10 px-4 py-1.5 text-sm font-bold tracking-wider text-forge-orange uppercase">
              Pricing
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-forge-navy sm:text-5xl lg:text-6xl">
              Simple, transparent pricing
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-forge-gray">
              Built for Kenyan SMBs. No hidden fees, just high-quality web
              solutions tailored to help your business grow online.
            </p>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <PricingCard
                title="Starter"
                price="from KSh 25,000"
                description="Best for: small businesses just getting started"
                buttonText="Get Started"
                features={[
                  "Custom responsive design",
                  "Up to 5 pages",
                  "Contact/WhatsApp integration",
                  "Basic SEO setup",
                  "1 round of revisions",
                  "2-week delivery",
                ]}
              />
              <PricingCard
                title="Business"
                price="from KSh 50,000"
                description="Best for: established businesses ready to grow"
                buttonText="Scale Your Business"
                popular={true}
                features={[
                  "Everything in Starter",
                  "Up to 10 pages",
                  "Advanced SEO foundations",
                  "Blog/news section",
                  "Performance optimization",
                  "2 rounds of revisions",
                  "Priority support",
                ]}
              />
              <PricingCard
                title="Custom"
                price="Let's Talk"
                description="Best for: custom web apps, portals, dashboards, e-commerce & integrations"
                buttonText="Let's Talk"
                features={[
                  "Custom web application development",
                  "Customer portals & dashboards",
                  "E-commerce functionality",
                  "Third-party API integrations",
                  "Dedicated project scoping",
                  "Ongoing support options",
                ]}
              />
            </div>
          </div>
        </section>

        <Separator className="mx-auto max-w-5xl opacity-50" />

        {/* FAQ Section */}
        <section className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-bold tracking-tight text-forge-navy sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-12">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-forge-navy/10">
                    <AccordionTrigger className="text-left font-display font-semibold text-forge-navy hover:text-forge-orange hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-forge-gray leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Closing CTA Section */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-forge-navy px-8 py-16 text-center text-white shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.15),transparent)] pointer-events-none" />
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Still not sure which plan fits?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Book a free consultation call and we'll help you figure out the best
              solution for your unique business needs.
            </p>
            <div className="mt-10 flex justify-center">
              <Button
                asChild
                className="group rounded-full bg-forge-orange px-8 py-6 text-lg font-bold text-white hover:bg-forge-orange/90 shadow-lg shadow-forge-orange/20"
              >
                <Link to="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;