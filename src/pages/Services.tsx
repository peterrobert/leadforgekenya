import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  RefreshCcw, 
  Target, 
  Code2, 
  Check, 
  ArrowRight, 
  Zap,
  MessageSquare,
  Layout,
  Smartphone,
  Search,
  Settings,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const services = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    icon: Globe,
    description: 'Professional websites that clearly communicate your business, services, and value.',
    includes: [
      'Custom design',
      'Responsive development',
      'Business pages',
      'WhatsApp/contact integration',
      'SEO foundations'
    ],
    accent: 'bg-blue-500/10 text-blue-600'
  },
  {
    id: 'website-redesigns',
    title: 'Website Redesigns',
    icon: RefreshCcw,
    description: 'Modernize an outdated website with a better visual identity, user experience, and mobile experience.',
    includes: [
      'UI/UX redesign',
      'Mobile optimization',
      'Performance improvements',
      'Content restructuring',
      'SEO improvements'
    ],
    accent: 'bg-purple-500/10 text-purple-600'
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    icon: Target,
    description: 'Focused pages designed around one goal — generating enquiries, bookings, registrations, or sales.',
    includes: [
      'Campaign landing pages',
      'Product pages',
      'Lead-generation pages',
      'Conversion-focused layouts'
    ],
    accent: 'bg-forge-orange/10 text-forge-orange'
  },
  {
    id: 'custom-web-apps',
    title: 'Custom Web Applications',
    icon: Code2,
    description: 'Digital platforms built around your business processes instead of forcing your business into a generic template.',
    includes: [
      'Customer portals',
      'Dashboards',
      'Booking systems',
      'Internal business systems',
      'Workflow applications',
      'API integrations'
    ],
    accent: 'bg-emerald-500/10 text-emerald-600'
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => {
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <section className={`py-16 md:py-24 ${isEven ? 'bg-white' : 'bg-forge-cream/50'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col gap-12 lg:items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
          <div className="flex-1 space-y-6">
            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${service.accent}`}>
              <Icon className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-forge-navy sm:text-4xl lg:text-5xl">
              {service.title}
            </h2>
            <p className="text-lg leading-relaxed text-forge-gray max-w-xl">
              {service.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {service.includes.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forge-orange/10 text-forge-orange">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm font-medium text-forge-navy/80">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <Button asChild variant="outline" className="rounded-full border-forge-navy/20 hover:bg-forge-navy hover:text-white transition-all group">
                <Link to="/contact">
                  Enquire About This Service <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-forge-orange/20 to-transparent opacity-50 blur-2xl transition-opacity group-hover:opacity-75" />
              <Card className="relative overflow-hidden rounded-[2rem] border-none shadow-xl">
                <div className="aspect-[4/3] bg-forge-navy flex items-center justify-center overflow-hidden">
                   {/* Abstract Visual Representation */}
                   <div className="relative w-full h-full p-8 flex flex-col justify-center">
                      <div className="space-y-4 opacity-40">
                         <div className="h-4 w-3/4 bg-white/20 rounded-full" />
                         <div className="h-4 w-1/2 bg-white/20 rounded-full" />
                         <div className="h-32 w-full border border-white/20 rounded-2xl flex items-center justify-center">
                            <Icon className="h-16 w-16 text-white/10" />
                         </div>
                         <div className="grid grid-cols-3 gap-4">
                            <div className="h-12 bg-white/10 rounded-xl" />
                            <div className="h-12 bg-white/10 rounded-xl" />
                            <div className="h-12 bg-white/10 rounded-xl" />
                         </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/95 backdrop-blur shadow-2xl p-6 rounded-2xl max-w-[80%] transform transition-transform group-hover:scale-105">
                           <div className="flex items-center gap-4 mb-4">
                              <div className={`p-3 rounded-xl ${service.accent}`}>
                                <Icon className="h-6 w-6" />
                              </div>
                              <div>
                                <h4 className="font-bold text-forge-navy">{service.title}</h4>
                                <p className="text-[10px] uppercase tracking-wider text-forge-gray font-semibold">Service Package</p>
                              </div>
                           </div>
                           <Separator className="mb-4" />
                           <ul className="space-y-2">
                              {service.includes.slice(0, 3).map(i => (
                                <li key={i} className="flex items-center gap-2 text-xs text-forge-gray">
                                  <Check className="h-3 w-3 text-forge-orange" /> {i}
                                </li>
                              ))}
                           </ul>
                        </div>
                      </div>
                   </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <div className="flex min-h-screen flex-col bg-forge-cream/20">
      <Navbar />
      
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden bg-forge-navy py-20 text-white lg:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-forge-orange blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/30 blur-[150px]" />
          </div>
          
          <div className="container relative mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-6 border-forge-orange/30 bg-forge-orange/10 px-4 py-1.5 text-sm font-medium text-forge-orange">
              Our Services
            </Badge>
            <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              What We <span className="text-forge-orange">Build</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/70 sm:text-xl">
              Lead Forge Studio designs and engineers digital products tailored to how each business actually works. No templates, just high-performance results.
            </p>
          </div>
        </section>

        {/* 2-5. Detailed Service Blocks */}
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}

        {/* 6. Pricing Teaser Section */}
        <section className="py-20 bg-forge-navy">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden border-none bg-gradient-to-br from-forge-navy via-slate-900 to-forge-navy text-white shadow-2xl relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-forge-orange/10 blur-[80px] -mr-32 -mt-32 rounded-full" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] -ml-32 -mb-32 rounded-full" />
              
              <CardContent className="p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                <div className="text-center md:text-left space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Not sure which service fits your budget?
                  </h2>
                  <p className="text-white/60 text-lg max-w-xl">
                    We offer flexible pricing packages designed for businesses at different stages of growth. View our standard rates or request a custom quote.
                  </p>
                </div>
                <Button asChild size="lg" className="bg-white text-forge-navy hover:bg-white/90 rounded-full px-8 h-14 text-base font-bold shrink-0">
                  <Link to="/pricing">
                    View Pricing Plans <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Extra Section: Technology Stack (to fulfill 7 sections and add visual depth) */}
        <section className="py-20 bg-white border-y border-forge-navy/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-forge-navy mb-4">Our Technology Philosophy</h2>
              <p className="text-forge-gray max-w-2xl mx-auto">
                We select the right tools for the job, focusing on performance, security, and scalability for every project we undertake.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { title: 'Performance First', desc: 'Lightweight code and optimized assets for lightning speed.', icon: Zap },
                { title: 'SEO Optimized', desc: 'Built with search engines in mind from the ground up.', icon: Search },
                { title: 'Secure & Reliable', desc: 'Modern security standards to protect your business data.', icon: ShieldCheck },
                { title: 'Scalable Architecture', desc: 'Systems that grow as your business requirements expand.', icon: Cpu }
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-forge-cream flex items-center justify-center text-forge-orange">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-forge-navy">{item.title}</h3>
                  <p className="text-sm text-forge-gray">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Closing CTA Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forge-navy mb-8 max-w-4xl mx-auto leading-tight">
              Ready to forge your <span className="text-forge-orange">digital presence?</span>
            </h2>
            <p className="text-xl text-forge-gray mb-12 max-w-2xl mx-auto">
              Whether you need a simple landing page or a complex web application, we're ready to help you build it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-forge-orange text-white hover:bg-forge-orange/90 rounded-full px-10 h-14 text-lg font-bold">
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg font-bold border-forge-navy/20 hover:bg-forge-navy hover:text-white">
                <Link to="/portfolio">See Our Work</Link>
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-5">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-forge-navy rounded-full" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-forge-navy rounded-full" />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;