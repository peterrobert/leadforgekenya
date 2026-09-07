import React from "react";

const AboutHero = () => {
  return (
    <section className="bg-forge-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forge-orange bg-forge-orange/10 rounded-full mb-4">
          About Us
        </span>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-forge-navy leading-tight mb-6">
          A studio built to help <br className="hidden md:block" /> 
          Kenyan businesses <span className="text-forge-orange text-glow">win online</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-forge-gray leading-relaxed">
          Lead Forge Studio is dedicated to crafting premium digital experiences 
          that drive real growth for small and medium enterprises across Kenya.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;