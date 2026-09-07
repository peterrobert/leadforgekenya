import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Depot Covers",
    category: "Business Website",
    description: "A comprehensive showcase for a leading protective covers manufacturer.",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_162920fd34_69b55e668e4fe20c.png",
  },
  {
    name: "Kikuyu Water",
    category: "Web Platform",
    description: "Customer portal and service management system for local utility company.",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_e1617b2041_760d4f9216cb58c0.png",
  },
  {
    name: "Wisa Guard Security",
    category: "Corporate Website",
    description: "Modern professional website for a high-end security services provider.",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_b32cfc866c_8169da761b64fbf7.png",
  },
];

const FeaturedWork = () => {
  return (
    <section className="bg-forge-cream py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-forge-navy sm:text-4xl">Featured Work</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-forge-gray">
            A selection of projects where we've helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl border border-forge-navy/10 bg-white shadow-sm transition-all hover:shadow-xl">
              <div className="aspect-[16/10] overflow-hidden">
                <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={project.img_url} />
              </div>
              <div className="p-6">
                <Badge className="bg-forge-orange/10 text-forge-orange hover:bg-forge-orange/20 border-none mb-4">
                  {project.category}
                </Badge>
                <h3 className="font-display text-xl font-bold text-forge-navy">{project.name}</h3>
                <p className="mt-2 text-sm text-forge-gray">{project.description}</p>
                <Link 
                  to="/portfolio" 
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-forge-navy hover:text-forge-orange transition-colors"
                >
                  View Case Study <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-2 rounded-full border border-forge-navy/10 px-8 py-3 text-sm font-semibold text-forge-navy transition-colors hover:bg-forge-navy/5"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;