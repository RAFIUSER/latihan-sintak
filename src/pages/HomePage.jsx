import React from "react";
import NavBar from "../components/navbar";
import HeroSection from "../components/hero-section";
import AboutSection from "../components/about-section";
import Timeline from "../components/timeline";
import Footer from "../components/footer";
import StatSection from "../components/stat-section";
import RegisterSection from "../components/register-section";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <StatSection />
      <Timeline />
      <RegisterSection />
      <Footer />
    </div>
  );
}
