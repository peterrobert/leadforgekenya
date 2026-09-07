const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your business goals, target audience, and project requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "Creating intuitive user interfaces and experiences that reflect your brand identity.",
  },
  {
    number: "03",
    title: "Development",
    description: "We bring designs to life with clean, efficient code and modern technologies.",
  },
  {
    number: "04",
    title: "Testing & Launch",
    description: "Rigorous quality checks across devices before we push the site live to the world.",
  },
  {
    number: "05",
    title: "Support & Growth",
    description: "Ongoing maintenance and optimization to ensure your site continues to perform.",
  },
];

const ProcessTimeline = () => {
  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h2 className="font-display text-3xl font-bold text-forge-navy sm:text-4xl">How We Work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-forge-gray">
            A structured approach to building high-quality digital products that deliver results.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="absolute top-8 left-0 hidden h-0.5 w-full bg-forge-navy/5 lg:block" />
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-forge-navy text-xl font-bold text-forge-cream shadow-lg ring-8 ring-white transition-colors hover:bg-forge-orange">
                  {step.number}
                </div>
                <h3 className="font-display text-xl font-bold text-forge-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-forge-gray">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;