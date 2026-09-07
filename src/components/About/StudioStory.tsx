import React from "react";

const StudioStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-3xl font-bold text-forge-navy mb-6">
              Our Mission
            </h2>
            <div className="space-y-4 text-forge-gray leading-relaxed">
              <p>
                Lead Forge Studio was founded on the belief that every business
                in Kenya, regardless of its size, deserves a professional and
                effective online presence. In a rapidly digitizing economy, a
                website is often the first point of contact between a brand and
                its customers.
              </p>
              <p>
                We saw a gap in the market: small and medium businesses (SMBs)
                were often stuck between expensive agencies and low-quality
                templates. We bridge this gap by providing high-quality
                craftsmanship, reliable technology, and personalized service at
                a fair price point.
              </p>
              <p>
                Our mission is simple: to empower Kenyan entrepreneurs with the
                digital tools they need to compete locally and globally. We
                don't just build websites; we build digital foundations for
                business growth.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_952ec28575_16dd6b8de1720843.png"
                alt="A modern Nairobi office workspace with large windows, minimalist wooden furniture, green plants, and"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioStory;
