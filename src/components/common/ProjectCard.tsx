import React from "react";
import { motion } from "framer-motion";
import type { Project } from "../../types/project";
import { useLanguage } from "../../context/LanguageContext";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useLanguage();

  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.01 }}
      className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-800 shadow-sm shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-200 dark:shadow-slate-950/40"
    >
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
        {project.name}
      </h3>
      <p className="mt-1 text-xs text-sky-500">{project.role}</p>
      <div className="mt-2 flex flex-wrap gap-1">
        {project.categories.map(cat => (
          <span
            key={cat}
            className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {cat}
          </span>
        ))}
      </div>
      <p className="mt-3 flex-1 text-xs text-slate-800 dark:text-slate-200">
        {project.description}
      </p>
      {project.impact && (
        <p className="mt-3 text-[11px] text-slate-600 dark:text-slate-400">
          <span className="font-semibold text-sky-500">{t("portfolio.impactLabel")}: </span>
          {project.impact}
        </p>
      )}
      <div className="mt-4">
        <button className="text-xs font-semibold text-sky-500 hover:text-sky-400">
          {t("portfolio.caseStudyCta")} →
        </button>
      </div>
    </motion.article>
  );
};
