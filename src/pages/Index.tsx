import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Index/Hero";
import StatsBar from "@/components/Index/StatsBar";
import ServicesOverview from "@/components/Index/ServicesGrid";
import FeaturedWork from "@/components/Index/FeaturedWork";
import ProcessTimeline from "@/components/Index/ProcessTimeline";
import Testimonials from "@/components/Index/Testimonials";
import CTABanner from "@/components/Index/CTABanner";
import TopBar from "@/components/Topbar";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-forge-cream">
      <Navbar />

      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Slim Stat Bar */}
        <div className="-mt-12 mb-20 relative z-20">
          <StatsBar />
        </div>

        {/* Section 3: Services Overview */}
        <ServicesOverview />

        {/* Section 4: Featured Work */}
        <FeaturedWork />

        {/* Section 5: Process */}
        <ProcessTimeline />

        {/* Section 6: Testimonials */}
        <Testimonials />

        {/* Section 7: Dark Full-width CTA Banner */}
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
