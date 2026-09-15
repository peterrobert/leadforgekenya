import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowUpRight, ExternalLink } from "lucide-react";

interface ProjectCaseStudyDialogProps {
  project: {
    title: string;
    category: string;
    description: string;
    whatWasBuilt: string[];
    tech: string[];
    longDescription?: string;
    website_url?: string;
    screenshots?: string[];
  } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectCaseStudyDialog({
  project,
  open,
  onOpenChange,
}: ProjectCaseStudyDialogProps) {
  if (!project) return null;

  const screenshots = project.screenshots || [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
    w-[calc(100%-1rem)]
    sm:w-full
    max-w-5xl
    max-h-[92vh]
    overflow-y-auto
    p-0
    gap-0
    rounded-2xl
    sm:rounded-3xl
    border-forge-navy/10
    bg-white
    [&>button]:z-50
    [&>button]:right-4
    [&>button]:top-4
    [&>button]:rounded-full
    [&>button]:bg-white
    [&>button]:p-2
    [&>button]:opacity-100
    [&>button]:shadow-lg
    [&>button]:text-forge-navy
    [&>button]:hover:bg-forge-orange
    [&>button]:hover:text-white
  "
      >
        {/* Hero */}
        <div className="relative overflow-hidden bg-forge-navy">
          <div className="absolute inset-0 bg-gradient-to-br from-forge-navy via-forge-navy to-forge-navy/90" />

          <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
            <DialogHeader className="text-left">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge
                  variant="outline"
                  className="
                    border-forge-orange/40
                    bg-forge-orange/10
                    text-forge-orange
                    rounded-full
                    px-3
                    py-1
                  "
                >
                  {project.category}
                </Badge>

                {project.website_url && (
                  <Badge
                    variant="outline"
                    className="
                      border-white/20
                      bg-white/5
                      text-white/80
                      rounded-full
                      px-3
                      py-1
                    "
                  >
                    Live Project
                  </Badge>
                )}
              </div>

              <DialogTitle
                className="
                  max-w-3xl
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  leading-tight
                  font-display
                  font-bold
                  tracking-tight
                  text-white
                "
              >
                {project.title}
              </DialogTitle>

              <DialogDescription
                className="
                  max-w-2xl
                  mt-4
                  text-sm
                  sm:text-base
                  leading-relaxed
                  text-white/70
                "
              >
                {project.description}
              </DialogDescription>

              {project.website_url && (
                <div className="pt-6">
                  <a
                    href={project.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-forge-orange
                      px-5
                      py-3
                      text-sm
                      font-bold
                      text-white
                      transition-all
                      hover:bg-forge-orange/90
                      hover:-translate-y-0.5
                    "
                  >
                    Visit Live Website
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              )}
            </DialogHeader>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
          <div className="space-y-10">
            {/* Overview */}
            <section>
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-forge-orange">
                  The Project
                </span>

                <h3 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-forge-navy">
                  Project Overview
                </h3>
              </div>

              <p className="max-w-3xl text-sm sm:text-base leading-7 text-forge-gray">
                {project.longDescription ||
                  "We worked closely with the client to deliver a digital experience that combines strong visual design, usability, performance, and the specific business goals of the project."}
              </p>
            </section>

            {/* What was built + Tech */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8">
              {/* What was built */}
              <section
                className="
                  rounded-2xl
                  border
                  border-forge-navy/10
                  bg-forge-navy/[0.025]
                  p-5
                  sm:p-6
                "
              >
                <div className="mb-5">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-forge-orange">
                    Deliverables
                  </span>

                  <h3 className="mt-2 text-xl font-display font-bold text-forge-navy">
                    What We Built
                  </h3>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.whatWasBuilt.map((item, idx) => (
                    <li
                      key={idx}
                      className="
                        flex
                        items-start
                        gap-3
                        rounded-xl
                        bg-white
                        border
                        border-forge-navy/5
                        p-3
                        text-sm
                        leading-relaxed
                        text-forge-gray
                      "
                    >
                      <CheckCircle2
                        className="
                          h-4
                          w-4
                          shrink-0
                          mt-0.5
                          text-forge-orange
                        "
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Tech stack */}
              <section
                className="
                  rounded-2xl
                  border
                  border-forge-navy/10
                  p-5
                  sm:p-6
                "
              >
                <div className="mb-5">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-forge-orange">
                    Technology
                  </span>

                  <h3 className="mt-2 text-xl font-display font-bold text-forge-navy">
                    Tech Stack
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="
                        rounded-full
                        bg-forge-navy/5
                        px-3
                        py-1.5
                        text-forge-navy
                        font-medium
                      "
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>
            </div>

            {/* Screenshots */}
            {screenshots.length > 0 && (
              <section>
                <div className="mb-5">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-forge-orange">
                    Visual Preview
                  </span>

                  <h3 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-forge-navy">
                    Project Screenshots
                  </h3>

                  <p className="mt-2 text-sm text-forge-gray">
                    A closer look at the finished digital experience.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {screenshots.map((image, idx) => (
                    <div
                      key={idx}
                      className="
    group
    overflow-hidden
    border
    border-forge-navy/10
    bg-forge-navy/5
  "
                    >
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="
      block
      w-full
      h-[250px]
      md:h-[350px]
      lg:h-[400px]
      object-cover
      object-top
      transition-transform
      duration-500
      group-hover:scale-[1.02]
    "
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom CTA */}
            {project.website_url && (
              <section
                className="
                  rounded-2xl
                  bg-forge-navy
                  px-5
                  py-7
                  sm:px-7
                  sm:py-8
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-5
                "
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-forge-orange">
                    See it in action
                  </p>

                  <h3 className="mt-2 text-xl font-display font-bold text-white">
                    Explore the live project
                  </h3>
                </div>

                <a
                  href={project.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-white
                    px-5
                    py-3
                    text-sm
                    font-bold
                    text-forge-navy
                    transition-all
                    hover:bg-forge-orange
                    hover:text-white
                    whitespace-nowrap
                  "
                >
                  Visit Website
                  <ExternalLink className="h-4 w-4" />
                </a>
              </section>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
