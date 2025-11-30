import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomeHero } from "./components/home/HomeHero";
import { Highlights } from "./components/home/Highlights";
import { AboutSection } from "./components/about/AboutSection";
import { PortfolioSection } from "./components/portfolio/PortfolioSection";
import { ExperienceSection } from "./components/experience/ExperienceSection";
import { CvSection } from "./components/cv/CvSection";
import { ContactSection } from "./components/contact/ContactSection";
import { useTheme } from "./context/ThemeContext";

export const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50">
        <Navbar />
        <main>
          <section id="home">
            <HomeHero />
          </section>
          <Highlights />
          <AboutSection />
          <PortfolioSection />
          <ExperienceSection />
          <CvSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};
