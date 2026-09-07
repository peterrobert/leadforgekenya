import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="bg-forge-black py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-forge-navy px-8 py-16 text-center shadow-2xl lg:px-16 lg:py-24">
          {/* Decorative background elements */}
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-forge-orange/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-forge-orange/10 blur-3xl" />
          
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to grow your business online?
            </h2>
            <p className="mt-6 text-lg text-white/70 lg:text-xl">
              Let's build a modern, high-performing website that works as hard as you do. Contact us today for a free consultation and quote.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="rounded-full bg-forge-orange px-10 text-white hover:bg-forge-orange/90">
                <Link to="/contact">
                  Get a Quote <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;