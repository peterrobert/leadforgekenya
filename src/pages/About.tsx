import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/About/AboutHero";
import StudioStory from "@/components/About/StudioStory";
import FounderProfile from "@/components/About/FounderProfile";
import ValuesGrid from "@/components/About/ValuesGrid";
import TechStack from "@/components/About/TechStack";
import ClosingCTA from "@/components/About/ClosingCTA";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <Navbar />
      
      <main className="flex-1">
        <AboutHero />
        
        <Separator className="bg-forge-navy/5" />
        
        <StudioStory />
        
        <FounderProfile />
        
        <ValuesGrid />
        
        <TechStack />
        
        <ClosingCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;