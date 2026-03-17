import React from "react";
import HomeHero from "@/components/generals/hero/HomeHero";
import CreativeCommunitySection from "@/components/generals/section/CreativeCommunitySection";
import FeaturedAnimatorsSection from "@/components/generals/section/FeaturedAnimatorsSection";
import ForStudiosSection from "@/components/generals/section/ForStudiosSection";
import HowItWorksSection from "@/components/generals/section/HowItWorksSection";
import TestimonialsSection from "@/components/generals/section/TestimonialsSection";
import ValuePropositionSection from "@/components/generals/section/ValuePropositionSection";
import CallToActionSection from "@/components/generals/section/CallToActionSection";

const HomePage = () => {
  return (
    <div className="min-h-[500vh]" >
      <HomeHero />
      <ValuePropositionSection />
      <FeaturedAnimatorsSection />
      <CreativeCommunitySection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ForStudiosSection />
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
