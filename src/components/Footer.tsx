import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-forge-black text-forge-cream">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-forge-orange text-white font-display font-bold text-lg">
              L
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Lead Forge Studio
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            A web design and development studio in Nairobi, Kenya, building modern websites and web apps for small and medium businesses.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-forge-orange hover:text-forge-orange"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-forge-orange hover:text-forge-orange"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">Navigate</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/" className="text-white/80 hover:text-forge-orange transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-white/80 hover:text-forge-orange transition-colors">About</Link></li>
            <li><Link to="/services" className="text-white/80 hover:text-forge-orange transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="text-white/80 hover:text-forge-orange transition-colors">Portfolio</Link></li>
            <li><Link to="/pricing" className="text-white/80 hover:text-forge-orange transition-colors">Pricing</Link></li>
            <li><Link to="/contact" className="text-white/80 hover:text-forge-orange transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-forge-orange" />
              Nairobi, Kenya
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-forge-orange" />
              hello@leadforgestudio.com
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-forge-orange" />
              +254 700 000 000
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">Ready to start?</h4>
          <p className="mt-5 text-sm text-white/70">Let's build something great for your business.</p>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-forge-orange hover:underline"
          >
            Get a Quote <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/40 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Lead Forge Studio. All rights reserved.</p>
          <p>Designed &amp; built in Nairobi, Kenya.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;