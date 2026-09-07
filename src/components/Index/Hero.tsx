import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-forge-cream pt-16 pb-20 lg:pt-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl text-center lg:text-left">
            <Badge
              variant="outline"
              className="mb-4 border-forge-orange/30 bg-forge-orange/5 px-4 py-1 text-sm font-medium text-forge-orange"
            >
              Nairobi based Web Design & Development Studio
            </Badge>
            <h1 className="text-balance font-display text-4xl font-bold tracking-tight text-forge-navy sm:text-5xl lg:text-6xl xl:text-7xl">
              We build websites that{" "}
              <span className="text-forge-orange">grow</span> Kenyan businesses
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-forge-gray lg:text-xl">
              Lead Forge Studio designs and engineers fast, modern websites and
              web applications tailored for Small and Medium-sized Businesses in
              Kenya and beyond.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button
                asChild
                size="lg"
                className="font-display font-bold rounded-full bg-forge-orange px-8 text-white hover:bg-forge-orange/90"
              >
                <Link to="/contact">
                  Get a Quote <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className=" font-display font-bold rounded-full border-forge-navy/20 px-8 text-forge-navy hover:bg-forge-navy/5"
              >
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>

          <div className="relative w-full max-w-xl lg:max-w-none lg:flex-1">
            <div className="relative rounded-2xl border border-forge-navy/10 bg-white p-3 shadow-2xl ">
              <div className="overflow-hidden rounded-xl bg-muted">
                <img
                  className="w-full object-cover"
                  src="/comp.jpg"
                  alt="modern workspace with a sleek laptop displaying a professional business website mockup, clean minima"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-24 w-24 rounded-full bg-forge-orange/10 blur-2xl" />
            <div className="absolute -top-6 -right-6 -z-10 h-32 w-32 rounded-full bg-forge-navy/5 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
