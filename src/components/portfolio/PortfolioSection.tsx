import React from "react";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionTitle } from "../common/SectionTitle";
import { ProjectCard } from "../common/ProjectCard";
import type { Project } from "../../types/project";
import { useLanguage } from "../../context/LanguageContext";

export const PortfolioSection: React.FC = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: "fincrime-dynamics",
      name: t("portfolio.fincrime.name"),
      role: t("portfolio.fincrime.role"),
      categories: ["fintech", "dashboard", "ux-ui", "frontend"],
      description: t("portfolio.fincrime.description"),
      impact: t("portfolio.fincrime.impact")
    },
    {
      id: "tesoreria-publica",
      name: t("portfolio.treasury.name"),
      role: t("portfolio.treasury.role"),
      categories: ["public-sector", "dashboard", "ux-ui"],
      description: t("portfolio.treasury.description"),
      impact: t("portfolio.treasury.impact")
    },
    {
      id: "ciudadano-360",
      name: t("portfolio.citizen360.name"),
      role: t("portfolio.citizen360.role"),
      categories: ["public-sector", "ux-ui"],
      description: t("portfolio.citizen360.description"),
      impact: t("portfolio.citizen360.impact")
    }
  ];

  return (
    <SectionWrapper
      id="portfolio"
      className="border-y border-slate-200/60 bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 dark:border-slate-800/60 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
    >
      <SectionTitle
        eyebrow={t("portfolio.eyebrow")}
        title={t("portfolio.title")}
        subtitle={t("portfolio.subtitle")}
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};
