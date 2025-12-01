import React from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HomeHero } from "./components/home/HomeHero";
import { AboutSection } from "./components/about/AboutSection";
import { PortfolioSection } from "./components/portfolio/PortfolioSection";
import { ExperienceSection } from "./components/experience/ExperienceSection";
import { CvSection } from "./components/cv/CvSection";
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
          <AboutSection />
          <PortfolioSection />
          <ExperienceSection />
          <CvSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};
