import { Link } from "react-router-dom";
import { Layout, Palette, Zap, Code, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Business Websites",
    description: "Professional corporate websites that build trust and convert visitors into customers.",
    icon: Layout,
  },
  {
    title: "Website Redesigns",
    description: "Modernize your existing online presence with a fresh design and improved performance.",
    icon: Palette,
  },
  {
    title: "Landing Pages",
    description: "High-converting single-page sites designed specifically for your marketing campaigns.",
    icon: Zap,
  },
  {
    title: "Custom Web Applications",
    description: "Bespoke software solutions tailored to solve your unique business challenges.",
    icon: Code,
  },
];

const ServicesOverview = () => {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-forge-navy sm:text-4xl">What We Build</h2>
            <p className="mt-4 max-w-2xl text-lg text-forge-gray">
              We specialize in creating digital experiences that are fast, accessible, and optimized for growth.
            </p>
          </div>
          <Link to="/services" className="group flex items-center gap-2 text-sm font-semibold text-forge-orange">
            Explore All Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <Card key={idx} className="group border-forge-navy/5 bg-forge-cream/30 transition-all hover:-translate-y-1 hover:shadow-md">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-forge-navy text-forge-cream transition-colors group-hover:bg-forge-orange">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-display text-xl text-forge-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-forge-gray">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;