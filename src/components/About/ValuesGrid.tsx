import React from "react";
import { Hammer, Eye, ShieldCheck, Zap } from "lucide-react";

const values = [
  {
    icon: Hammer,
    title: "Craftsmanship",
    description: "We don't cut corners. Every line of code and pixel is placed with intention and care."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We believe in honest communication, clear pricing, and keeping you in the loop at every stage."
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description: "When we commit to a deadline or a feature, we deliver. You can count on us to be there for the long haul."
  },
  {
    icon: Zap,
    title: "Results-Driven",
    description: "Beautiful design is nothing without results. We focus on conversion, speed, and business goals."
  }
];

const ValuesGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-forge-navy">What We Stand For</h2>
          <p className="mt-4 text-forge-gray">The core principles that guide every project we take on.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <div key={index} className="p-8 rounded-2xl bg-forge-cream/30 border border-forge-navy/5 hover:border-forge-orange/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-forge-navy text-white flex items-center justify-center mb-6 group-hover:bg-forge-orange transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-forge-navy mb-3">{item.title}</h3>
              <p className="text-forge-gray text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesGrid;