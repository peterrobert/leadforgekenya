import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { ProjectCaseStudyDialog } from "../Portfolio/ProjectCaseStudyDialog";
import { useState } from "react";

const depotCoverImage = "/deport.png";
const kikuyuMainImage = "/kikuyuMain.png";
const wisaGuardImage = "/wisagurdmain.png";

const projects = [
  {
    id: "depot-covers",
    title: "Depot Covers",
    category: "Business Website",
    tag: "Branding & Printing",
    description:
      "A modern responsive website for a Kenyan branding and printing company, built to showcase its services and capabilities.",
    longDescription:
      "A modern responsive website for a Kenyan branding and printing company, built to showcase its services, work, and capabilities while generating customer enquiries through optimized lead capture forms.",
    whatWasBuilt: [
      "business website design",
      "service presentation",
      "portfolio presentation",
      "responsive design",
      "lead generation",
    ],
    tech: [
      "HTML/CSS",
      "JavaScript",
      "Tailwind CSS",
      "React",
      "Framer Motion",
      "Sanity CMS",
    ],
    screenshots: [
      "/dep1.png",
      "/dep2.png",
      "/dep3.png",
      "/dep4.png",
      "/dep5.png",
    ],
    img_url: depotCoverImage,
    website_url: "https://depotcovers.co.ke",
  },
  {
    id: "kikuyu-water",
    title: "Kikuyu Water & Sewerage Company",
    category: "Web Platform",
    tag: "Water Utility",
    description:
      "A modern customer-facing digital platform designed to make water utility services easier to access online.",
    longDescription:
      "A modern customer-facing digital platform designed to make water utility services easier to access online. The platform streamlines the interaction between the utility company and its customers, reducing physical paperwork and visit times.",
    whatWasBuilt: [
      "customer services",
      "online applications",
      "billing and payments",
      "service requests",
      "complaint reporting",
      "customer account functionality",
    ],
    tech: ["Nextjs", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
    img_url: kikuyuMainImage,
    website_url: "https://kikuyuwater.co.ke",
  },
  {
    id: "wisa-guard",
    title: "Wisa Guard Security Services",
    category: "Corporate Website",
    tag: "Security Services",
    description:
      "A professional corporate website designed to communicate Wisa Guard's security services and establish trust.",
    longDescription:
      "A professional corporate website designed to communicate Wisa Guard's security services, establish trust through professional presentation, and generate high-quality enquiries via targeted call-to-actions.",
    whatWasBuilt: [
      "corporate website design",
      "service architecture",
      "trust-focused presentation",
      "lead generation",
      "responsive development",
    ],
    tech: ["Nextjs", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
    img_url: wisaGuardImage,
    website_url: "https://wisaguardsecurity.co.ke/",
  },
];

const FeaturedWork = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  const handleDialogOpenChange = (open: boolean) => {
    if (!open) {
      handleDialogClose();
    }
  };

  return (
    <>
      <ProjectCaseStudyDialog
        project={selectedProject}
        open={isDialogOpen}
        onOpenChange={handleDialogOpenChange}
      />
      <section className="bg-forge-cream py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-forge-navy/10 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-forge-orange">
              Our Work
            </div>

            <h2 className="font-display text-3xl font-bold tracking-tight text-forge-navy sm:text-4xl lg:text-5xl">
              Featured Work
            </h2>

            <p className="mx-auto mt-5 text-base leading-7 text-forge-gray sm:text-lg">
              A selection of websites and digital experiences we've built to
              help businesses look better, perform better, and grow online.
            </p>
          </div>

          {/* Projects */}
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <article
                key={idx}
                className="group relative overflow-hidden  border border-forge-navy/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-forge-navy/20 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative aspect-[16/12] overflow-hidden bg-forge-cream cursor-pointer">
                  <img
                    src={project.img_url}
                    alt={`${project.title} website`}
                    className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forge-navy/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Visit Website overlay button */}
                  {project.website_url && (
                    <a
                      href={project.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} website`}
                      className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-forge-navy opacity-0 shadow-lg transition-all duration-300 hover:bg-forge-orange hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 lg:p-7">
                  {/* Category */}
                  <Badge className="mb-4 border-none bg-forge-orange/10 px-3 py-1 text-xs font-semibold text-forge-orange hover:bg-forge-orange/10">
                    {project.category}
                  </Badge>

                  {/* Project Name */}
                  <h3 className="font-display text-xl font-bold tracking-tight text-forge-navy">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-forge-gray">
                    {project.description}
                  </p>

                  {/* Website URL */}
                  {project.website_url && (
                    <a
                      href={project.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block truncate text-xs font-medium text-forge-gray/70 transition-colors hover:text-forge-orange"
                    >
                      {project.website_url
                        .replace(/^https?:\/\//, "")
                        .replace(/\/$/, "")}
                    </a>
                  )}

                  {/* Actions */}
                  <div className="mt-6 flex items-center gap-3 border-t border-forge-navy/10 pt-5">
                    {project.website_url && (
                      <a
                        href={project.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full bg-forge-orange px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-forge-navy hover:shadow-md"
                      >
                        Visit Website
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}

                    <button
                      onClick={() => handleProjectClick(project)}
                      className="group inline-flex items-center gap-2 rounded-full border border-forge-navy/20 bg-white px-5 py-2.5 text-sm font-semibold text-forge-navy transition-all duration-200 hover:-translate-y-0.5 hover:border-forge-navy hover:bg-forge-navy hover:text-white hover:shadow-sm"
                    >
                      Case Study
                      <ArrowUpRight className="h-4 w-4 opacity-60 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 text-center lg:mt-16">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-forge-navy px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-forge-orange hover:shadow-lg"
            >
              Explore All Projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedWork;
