import React from "react";
import { Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FounderProfile = () => {
  return (
    <section className="py-20 bg-forge-cream/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-forge-navy">
              Meet the Founder
            </h2>
            <div className="h-1 w-20 bg-forge-orange mx-auto mt-4 rounded-full"></div>
          </div>

          <Card className="w-full max-w-3xl overflow-hidden border-none shadow-lg bg-white">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/5 aspect-square md:aspect-auto">
                  <img
                    className="w-full h-full object-cover"
                    src="/found.png"
                    alt="A professional headshot of Peter Robert Ndungu, a young Kenyan male developer in his late 20s, smili"
                  />
                </div>
                <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
                  <h3 className="font-display text-2xl font-bold text-forge-navy">
                    Peter Robert Ndungu
                  </h3>
                  <p className="text-forge-orange font-medium mb-4">
                    Founder & Lead Developer
                  </p>
                  <p className="text-forge-gray leading-relaxed mb-6">
                    With over 7 years of experience in full-stack development,
                    Peter has a passion for building robust, scalable web
                    applications. He founded Lead Forge Studio to bring
                    world-class development standards to the Kenyan SMB
                    landscape, focusing on code quality and user experience.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/peterrobert"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-forge-navy text-white hover:bg-forge-orange transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/peterrobertndungu/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-full bg-forge-navy text-white hover:bg-forge-orange transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FounderProfile;
