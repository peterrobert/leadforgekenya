import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ClosingCTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-12 rounded-3xl bg-forge-navy text-white relative overflow-hidden shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-forge-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-forge-orange/10 rounded-full blur-3xl"></div>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 relative z-10">
            Let's build your next project together
          </h2>
          <p className="text-white/80 mb-10 max-w-xl mx-auto relative z-10">
            Ready to take your business to the next level? Get in touch today for a free consultation and quote.
          </p>
          <Button asChild size="lg" className="bg-forge-orange hover:bg-forge-orange/90 text-white px-8 h-14 rounded-full text-lg font-semibold relative z-10">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;