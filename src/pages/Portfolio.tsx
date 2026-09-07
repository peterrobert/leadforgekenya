import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PortfolioFilterBar } from "@/components/Portfolio/PortfolioFilterBar";
import { ProjectCaseStudyDialog } from "@/components/Portfolio/ProjectCaseStudyDialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  "All",
  "Business Website",
  "Web Platform",
  "Corporate Website",
  "Engineering Project",
];

const PROJECTS = [
  {
    id: "depot-covers",
    title: "Depot Covers",
    category: "Business Website",
    tag: "Branding & Printing",
    description: "A modern responsive website for a Kenyan branding and printing company, built to showcase its services and capabilities.",
    longDescription: "A modern responsive website for a Kenyan branding and printing company, built to showcase its services, work, and capabilities while generating customer enquiries through optimized lead capture forms.",
    whatWasBuilt: [
      "business website design",
      "service presentation",
      "portfolio presentation",
      "responsive design",
      "lead generation",
    ],
    tech: ["HTML/CSS", "JavaScript", "Tailwind CSS"],
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e3a28b4758_d4724c1ffa3b0a0a.png",
  },
  {
    id: "kikuyu-water",
    title: "Kikuyu Water & Sewerage Company",
    category: "Web Platform",
    tag: "Water Utility",
    description: "A modern customer-facing digital platform designed to make water utility services easier to access online.",
    longDescription: "A modern customer-facing digital platform designed to make water utility services easier to access online. The platform streamlines the interaction between the utility company and its customers, reducing physical paperwork and visit times.",
    whatWasBuilt: [
      "customer services",
      "online applications",
      "billing and payments",
      "service requests",
      "complaint reporting",
      "customer account functionality",
    ],
    tech: ["React", "Node.js", "PostgreSQL"],
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_5a98854dde_cb8cfb3712a0e4cf.png",
  },
  {
    id: "wisa-guard",
    title: "Wisa Guard Security Services",
    category: "Corporate Website",
    tag: "Security Services",
    description: "A professional corporate website designed to communicate Wisa Guard's security services and establish trust.",
    longDescription: "A professional corporate website designed to communicate Wisa Guard's security services, establish trust through professional presentation, and generate high-quality enquiries via targeted call-to-actions.",
    whatWasBuilt: [
      "corporate website design",
      "service architecture",
      "trust-focused presentation",
      "lead generation",
      "responsive development",
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_1950f2b2c6_3693f5648fa46cc7.png",
  },
  {
    id: "swiftdispatch",
    title: "SwiftDispatch",
    category: "Engineering Project",
    tag: "Logistics SaaS (Ruby on Rails + React)",
    description: "A production-grade, multi-tenant logistics and delivery management platform engineered for scale.",
    longDescription: "A production-grade, multi-tenant logistics and delivery management platform engineered to mirror the architecture, workflows, and practices of a real software company — a deep-dive project in backend architecture, scalable systems, and technical interview prep.",
    whatWasBuilt: [
      "multi-tenant architecture",
      "real-time tracking",
      "automated dispatching",
      "complex state management",
      "RESTful API design",
    ],
    tech: ["Ruby on Rails", "React", "Redis", "Sidekiq"],
    isExternal: true,
    externalUrl: "https://github.com",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_4f486afc08_5d3b7b35d8138db0.png",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredProjects = PROJECTS.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const handleProjectClick = (project: (typeof PROJECTS)[0]) => {
    if (project.isExternal) {
      window.open(project.externalUrl, "_blank");
    } else {
      setSelectedProject(project);
      setIsDialogOpen(true);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-forge-cream">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl text-center">
            <Badge variant="outline" className="mb-4 rounded-full border-forge-orange/30 bg-forge-orange/5 px-4 py-1 text-sm font-medium text-forge-orange uppercase tracking-wider">
              Our Work
            </Badge>
            <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-forge-navy sm:text-5xl md:text-6xl lg:text-7xl">
              Selected <span className="text-forge-orange">Projects</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-forge-gray md:text-xl">
              A showcase of our recent work delivering real results for real businesses through modern web technologies and user-centric design.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="px-4 pb-12">
          <div className="mx-auto max-w-7xl">
            <PortfolioFilterBar
              categories={CATEGORIES}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </section>

        {/* Project Grid */}
        <section className="px-4 pb-24 md:pb-32 lg:pb-40">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <Card 
                  key={project.id}
                  className="group relative flex flex-col overflow-hidden border-none bg-white shadow-xl shadow-forge-navy/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-forge-navy/10 rounded-2xl cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={project.img_url} />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-forge-navy/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                        <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-display font-bold text-forge-navy transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                          {project.isExternal ? (
                            <>
                              <Github className="h-5 w-5" />
                              View on GitHub
                            </>
                          ) : (
                            <>
                              View Case Study
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col p-6">
                      <div className="mb-2">
                        <Badge className="bg-forge-orange text-white hover:bg-forge-orange border-none rounded-full px-3">
                          {project.tag}
                        </Badge>
                      </div>
                      <h3 className="mb-2 font-display text-2xl font-bold text-forge-navy">
                        {project.title}
                      </h3>
                      <p className="line-clamp-2 text-sm text-forge-gray leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-xl text-forge-gray">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-24 md:py-32 bg-forge-navy text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-forge-orange rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-forge-orange rounded-full blur-[120px] opacity-10"></div>
          
          <div className="mx-auto max-w-4xl text-center relative z-10">
            <h2 className="mb-8 font-display text-4xl font-bold sm:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mb-10 text-xl text-white/70">
              Let's discuss how we can help your business grow with a high-performing digital presence.
            </p>
            <Button asChild size="lg" className="rounded-full bg-forge-orange px-8 py-6 text-lg font-bold hover:bg-forge-orange/90 shadow-lg shadow-forge-orange/20">
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      <ProjectCaseStudyDialog 
        project={selectedProject}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
}