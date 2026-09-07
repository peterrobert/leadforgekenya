import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ContactForm } from "@/components/Contact/ContactForm";
import { ContactInfo } from "@/components/Contact/ContactInfo";
import { ContactFAQ } from "@/components/Contact/ContactFAQ";
import { Toaster } from "@/components/ui/sonner";

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-forge-cream">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-forge-navy py-16 sm:py-24 text-forge-cream">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-forge-orange blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-forge-orange blur-3xl"></div>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Let's <span className="text-forge-orange">build</span> something.
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-forge-cream/80 sm:text-xl">
              Ready to take your online presence to the next level? Start a conversation about your project today and let's forge something remarkable.
            </p>
          </div>
        </section>

        {/* Form & Info Section */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white/50 border-t border-forge-navy/5 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ContactFAQ />
          </div>
        </section>
      </main>

      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}