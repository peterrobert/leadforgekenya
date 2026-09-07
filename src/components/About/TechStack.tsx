import React from "react";
import { Badge } from "@/components/ui/badge";

const technologies = [
  "React",
  "Ruby on Rails",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "Figma",
  "Next.js",
  "Node.js",
  "Shadcn/UI",
  "Vite",
  "Docker",
  "AWS"
];

const TechStack = () => {
  return (
    <section className="py-16 bg-forge-navy text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="shrink-0">
            <h2 className="font-display text-2xl font-bold">Tools & Technologies <br className="hidden md:block" /> We Use</h2>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-forge-orange hover:border-forge-orange transition-colors px-4 py-2 text-sm rounded-full"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;