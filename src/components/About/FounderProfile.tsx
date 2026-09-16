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

          <Card className="w-full  overflow-hidden border-none shadow-lg bg-white">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-2xl bg-forge-cream">
                {/* Decorative background element */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-forge-orange/10" />
                <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full border border-forge-navy/10" />

                <div className="relative flex flex-col md:flex-row">
                  {/* Founder Image */}
                  <div className="relative w-full md:w-[42%] min-h-[420px] md:min-h-[560px] overflow-hidden">
                    <img
                      src="/fond.jpg"
                      alt="Peter Robert Ndungu, Founder and Lead Developer of Leadforge Studio"
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-forge-navy/80 via-transparent to-transparent" />

                    {/* Founder label */}
                    <div className="absolute left-6 top-6">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-forge-navy shadow-lg">
                        <span className="h-2 w-2 rounded-full bg-forge-orange" />
                        The Founder
                      </div>
                    </div>

                    {/* Bottom image information */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                        Leadforge Studio
                      </p>

                      <p className="text-sm font-medium text-white/90">
                        Building from Nairobi, Kenya
                      </p>
                    </div>

                    {/* Orange corner accent */}
                    <div className="absolute bottom-0 right-0 h-20 w-20 bg-forge-orange">
                      <div className="flex h-full items-center justify-center">
                        <span className="text-3xl font-black text-white">
                          02
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Founder Content */}
                  <div className="relative flex w-full flex-col justify-center p-8 sm:p-10 md:w-[58%] md:p-12 lg:p-14">
                    {/* Small intro */}
                    <div className="mb-5 flex items-center gap-3">
                      <div className="h-px w-10 bg-forge-orange" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-forge-orange">
                        Founder & Lead Developer
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="font-display text-3xl font-black tracking-tight text-forge-navy sm:text-4xl lg:text-5xl">
                      Peter Robert
                      <br />
                      <span className="text-forge-orange">Ndungu</span>
                    </h3>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-base leading-7 text-forge-gray sm:text-lg">
                      I build thoughtful digital experiences for businesses that
                      want to look credible, work better, and grow online. My
                      approach combines strong engineering with clean,
                      purposeful design.
                    </p>

                    {/* Stats / highlights */}
                    <div className="mt-8 grid grid-cols-2 gap-4 border-y border-forge-navy/10 py-6 sm:grid-cols-3">
                      <div>
                        <p className="font-display text-2xl font-black text-forge-navy">
                          7+
                        </p>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-forge-gray">
                          Years Building
                        </p>
                      </div>

                      <div>
                        <p className="font-display text-2xl font-black text-forge-navy">
                          50+
                        </p>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-forge-gray">
                          Projects
                        </p>
                      </div>

                      <div className="col-span-2 sm:col-span-1">
                        <p className="font-display text-2xl font-black text-forge-navy">
                          Ruby On Rails
                        </p>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-forge-gray">
                          Core Stack
                        </p>
                      </div>
                    </div>

                    {/* Bottom row */}
                    <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-forge-navy">
                          Let&apos;s build something meaningful.
                        </p>
                        <p className="mt-1 text-sm text-forge-gray">
                          Code, design & digital experiences.
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <a
                          href="https://github.com/peterrobert"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Peter Robert on GitHub"
                          className="group flex h-11 w-11 items-center justify-center rounded-full border border-forge-navy/15 bg-white text-forge-navy shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-forge-orange hover:bg-forge-orange hover:text-white hover:shadow-lg"
                        >
                          <Github className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                        </a>

                        <a
                          href="https://www.linkedin.com/in/peterrobertndungu/"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Peter Robert on LinkedIn"
                          className="group flex h-11 w-11 items-center justify-center rounded-full border border-forge-navy/15 bg-white text-forge-navy shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-forge-orange hover:bg-forge-orange hover:text-white hover:shadow-lg"
                        >
                          <Linkedin className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                        </a>
                      </div>
                    </div>
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
