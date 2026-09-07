import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import TopBar from "./Topbar";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 w-full border-b border-forge-navy/10 bg-forge-cream/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            onClick={() => setOpen(false)}
          ></Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-forge-orange ${
                  location.pathname === link.to
                    ? "text-forge-orange"
                    : "text-forge-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex"></div>

          <div className="flex lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-forge-navy">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[85vw] max-w-sm bg-forge-cream border-l border-forge-navy/10"
              >
                <div className="flex items-center justify-between pb-6">
                  <span className="font-display text-lg font-bold text-forge-navy">
                    Menu
                  </span>
                  {/* <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button> */}
                </div>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                        location.pathname === link.to
                          ? "bg-forge-navy/5 text-forge-orange"
                          : "text-forge-navy hover:bg-forge-navy/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button
                  asChild
                  className="mt-6 w-full rounded-full bg-forge-orange text-white hover:bg-forge-orange/90"
                >
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Get a Quote <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
