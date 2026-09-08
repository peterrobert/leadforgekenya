import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Depot Covers",
    category: "Business Website",
    description:
      "A comprehensive showcase for a leading protective covers manufacturer.",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_162920fd34_69b55e668e4fe20c.png",
    website_url: "https://depotcovers.co.ke",
  },
  {
    name: "Kikuyu Water",
    category: "Web Platform",
    description:
      "Customer portal and service management system for local utility company.",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e1617b2041_760d4f9216cb58c0.png",
    website_url: "https://kikuyuwater.co.ke",
  },
  {
    name: "Wisa Guard Security",
    category: "Corporate Website",
    description:
      "Modern professional website for a high-end security services provider.",
    img_url:
      "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b32cfc866c_8169da761b64fbf7.png",
    website_url: "https://wisaguard.co.ke",
  },
];

const FeaturedWork = () => {
  return (
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
            A selection of websites and digital experiences we've built to help
            businesses look better, perform better, and grow online.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-3xl border border-forge-navy/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-forge-navy/20 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-forge-cream">
                <img
                  src={project.img_url}
                  alt={`${project.name} website`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forge-navy/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Visit Website overlay button */}
                {project.website_url && (
                  <a
                    href={project.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name} website`}
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
                  {project.name}
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
                <div className="mt-6 flex items-center gap-5 border-t border-forge-navy/10 pt-5">
                  {project.website_url && (
                    <a
                      href={project.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-forge-navy transition-colors hover:text-forge-orange"
                    >
                      Visit Website
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}

                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-forge-gray transition-colors hover:text-forge-navy"
                  >
                    Case Study
                  </Link>
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
  );
};

export default FeaturedWork;
