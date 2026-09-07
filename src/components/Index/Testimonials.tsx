import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "George Kenyatta, CEO",
    business: "Depot Covers",
    quote:
      "Lead Forge Studio transformed our online presence. Our new website is not only beautiful but has significantly increased our lead generation.",
    rating: 5,
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_4e201e9223_ffc584f73cef6c47.png",
  },
  {
    name: "Florence Wanjohi, Human Resources Manager",
    business: "Kikuyu Water",
    quote:
      "The web platform built for us has streamlined our billing and customer service immensely. They understood our needs perfectly.",
    rating: 5,
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_4e201e9223_eab5a75f2a01c0d8.png",
  },
  {
    name: "Cynthia Cease, Human Resources Manager",
    business: "Wisa Guard Security",
    quote:
      "Fast, professional, and very easy to work with. They delivered exactly what they promised on time and within budget.",
    rating: 5,
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_60e6d13c6c_031c2ffae707076a.png",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-forge-cream py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold text-forge-navy sm:text-4xl">
            What Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-forge-gray">
            Don't just take our word for it hear from the businesses we've
            helped grow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <Card
              key={idx}
              className="relative border-none bg-white shadow-sm transition-transform hover:-translate-y-1"
            >
              <div
                className="absolute top-6 right-6 text-muted-foreground/40"
                aria-hidden="true"
              >
                <Quote className="h-10 w-10 fill-current" />
              </div>
              <CardContent className="pt-10">
                <div className="mb-4 flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-forge-orange text-forge-orange"
                    />
                  ))}
                </div>
                <p className="italic leading-relaxed text-forge-navy/80">
                  "{t.quote}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div>
                    <div className="font-display font-bold text-forge-navy">
                      {t.name}
                    </div>
                    <div className="text-sm text-forge-gray">{t.business}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
