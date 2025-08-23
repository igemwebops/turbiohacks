import type { Metadata } from "next";

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Tracks from './components/Tracks';
import Schedule from './components/Schedule';
import EducationalMaterial from './components/EducationalMaterial';
import FAQ from './components/FAQ';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// 👇 Add this metadata block so the homepage tab updates
export const metadata: Metadata = {
  title: "TurBioHacks 2025",
  description: "International synthetic biology hackathon | September 6–7, 2025",
};

export default function Home() {
  return (
    <div className="main-container">
      <Navigation />
      <Hero />
      <About />
      <Tracks />
      <Schedule />
      <EducationalMaterial />
      <FAQ />
      <Sponsors />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
