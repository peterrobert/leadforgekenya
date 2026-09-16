import React from "react";

const StudioStory = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Decorative elements */}
      <div className="absolute -left-32 top-20 h-64 w-64 rounded-full border border-forge-navy/5" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-forge-orange/5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Mission Content */}
          <div className="order-2 lg:order-1">
            {/* Section label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forge-orange text-sm font-black text-white">
                01
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.22em] text-forge-orange">
                Why we exist
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-4xl font-black tracking-tight text-forge-navy sm:text-5xl lg:text-6xl">
              Building a better
              <br />
              <span className="text-forge-orange">digital future.</span>
            </h2>

            {/* Intro statement */}
            <p className="mt-7 max-w-xl text-xl font-medium leading-8 text-forge-navy/80">
              We believe great digital experiences shouldn't be reserved for
              companies with massive budgets.
            </p>

            {/* Mission copy */}
            <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-forge-gray">
              <p>
                Lead Forge Studio was founded with a simple idea: businesses of
                every size deserve to be represented online with the same care,
                professionalism, and attention to detail.
              </p>

              <p>
                Too many businesses are forced to choose between expensive
                agencies and generic templates. We exist in that space between
                the two — combining thoughtful design, solid engineering, and
                personal service to create websites and web applications that
                actually work for the business behind them.
              </p>

              <p>
                Our goal is bigger than launching websites. We want to give
                ambitious businesses a strong digital foundation they can build
                on as they grow — locally, nationally, and beyond.
              </p>
            </div>

            {/* Mission principles */}
            <div className="mt-10 grid grid-cols-1 gap-5 border-t border-forge-navy/10 pt-8 sm:grid-cols-3">
              <div>
                <div className="mb-3 h-1 w-8 rounded-full bg-forge-orange" />
                <h3 className="font-display font-bold text-forge-navy">
                  Craftsmanship
                </h3>
                <p className="mt-1 text-sm leading-6 text-forge-gray">
                  Thoughtful design and clean, maintainable code.
                </p>
              </div>

              <div>
                <div className="mb-3 h-1 w-8 rounded-full bg-forge-orange" />
                <h3 className="font-display font-bold text-forge-navy">
                  Partnership
                </h3>
                <p className="mt-1 text-sm leading-6 text-forge-gray">
                  We work with businesses, not just project briefs.
                </p>
              </div>

              <div>
                <div className="mb-3 h-1 w-8 rounded-full bg-forge-orange" />
                <h3 className="font-display font-bold text-forge-navy">
                  Growth
                </h3>
                <p className="mt-1 text-sm leading-6 text-forge-gray">
                  Digital foundations designed to evolve with you.
                </p>
              </div>
            </div>
          </div>

          {/* Image / Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-xl">
              {/* Offset orange frame */}
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-forge-orange" />

              {/* Image */}
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-forge-navy shadow-2xl">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_952ec28575_16dd6b8de1720843.png"
                  alt="Modern Nairobi workspace representing the digital environment Leadforge Studio builds for growing businesses"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forge-navy/70 via-transparent to-transparent" />

                {/* Image caption */}
                <div className="absolute bottom-7 left-7 right-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                    Leadforge Studio
                  </p>

                  <p className="mt-2 max-w-sm font-display text-2xl font-bold leading-tight text-white">
                    Digital foundations for businesses ready to move forward.
                  </p>
                </div>

                {/* Floating location badge */}
                <div className="absolute right-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-bold text-forge-navy shadow-lg">
                  Nairobi → Worldwide
                </div>
              </div>

              {/* Decorative number */}
              <div className="absolute -left-7 -top-7 hidden h-20 w-20 items-center justify-center rounded-2xl bg-forge-navy shadow-xl sm:flex">
                <span className="font-display text-2xl font-black text-white">
                  01
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioStory;
