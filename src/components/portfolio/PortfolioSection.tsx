import React, { useMemo, useState } from "react";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionTitle } from "../common/SectionTitle";
import { useLanguage } from "../../context/LanguageContext";

interface PortfolioProject {
  id: string;
  title: string;
  figmaUrl: string;
  highlight?: string;
  highlightUrl?: string;
}

export const PortfolioSection: React.FC = () => {
  const { t } = useLanguage();
  const projects: PortfolioProject[] = useMemo(
    () => [
      {
        id: "activity-tracking",
        title: t("portfolio.carousel.activityTracking.title"),
        figmaUrl:
          "https://www.figma.com/proto/cRuRI5gtKFsU1Z3IAe7p9O/Activity-Tracking?node-id=31-1303&t=HDoIPKi1eOGBO1lB-0&scaling=min-zoom&content-scaling=fixed&page-id=31%3A1302&starting-point-node-id=31%3A1303"
      },
      {
        id: "gestion-juridica",
        title: t("portfolio.carousel.gestionJuridica.title"),
        figmaUrl:
          "https://www.figma.com/proto/Abdhr8NgQ2GSGyyFZs3xSW/Gestion-Juridica?node-id=205-8748&t=HDoIPKi1eOGBO1lB-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A12"
      },
      {
        id: "medellin-te-escucha",
        title: t("portfolio.carousel.medellinEscucha.title"),
        figmaUrl:
          "https://www.figma.com/proto/9pRSd9UVlSJJIMsh3jtb8l/Medellin-te-Escucha?node-id=1-2&t=HDoIPKi1eOGBO1lB-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=52%3A1588&show-proto-sidebar=1"
      },
      {
        id: "vamos-med",
        title: t("portfolio.carousel.vamosMed.title"),
        figmaUrl:
          "https://www.figma.com/proto/MyjWA3xhq7I5X5cjFjn6sm/Vamos-Med?node-id=66-4079&t=HDoIPKi1eOGBO1lB-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=60%3A425"
      },
      {
        id: "ciudadano-360",
        title: t("portfolio.carousel.ciudadano360.title"),
        figmaUrl:
          "https://www.figma.com/proto/eDoipyvrcu1yxKU8WGxOvz/Ciudadano360-Fase-II?node-id=1792-6822&t=D1PS2PDcIidUeSlx-1&scaling=min-zoom&content-scaling=fixed&page-id=1492%3A3378&starting-point-node-id=1792%3A6822",
        highlight: t("portfolio.carousel.ciudadano360.highlight"),
        highlightUrl:
          "https://www.elcolombiano.com/tecnologia/ciudadano-360-vistazo-app-medellin-eliminar-filas-tramites-engorrosos-IB29287935"
      }
    ],
    [t]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const handleNavigate = (direction: "prev" | "next") => {
    setActiveIndex(current => {
      if (direction === "prev") {
        return current === 0 ? projects.length - 1 : current - 1;
      }
      return current === projects.length - 1 ? 0 : current + 1;
    });
  };

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

      <div className="mt-8 space-y-6">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-800/80 dark:bg-slate-900/60 dark:shadow-slate-950/40">
          <iframe
            key={activeProject.id}
            title={activeProject.title}
            src={activeProject.figmaUrl}
            className="h-[640px] w-full border-0 bg-slate-900/5 dark:bg-slate-50/5"
            allowFullScreen
          />

          <button
            type="button"
            aria-label={t("portfolio.carousel.prev")}
            onClick={() => handleNavigate("prev")}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-3 text-slate-800 shadow-sm shadow-slate-900/10 backdrop-blur transition hover:-translate-y-1/2 hover:bg-sky-50 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-50 dark:hover:bg-slate-800"
          >
            ←
          </button>

          <button
            type="button"
            aria-label={t("portfolio.carousel.next")}
            onClick={() => handleNavigate("next")}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-slate-200 bg-white/90 p-3 text-slate-800 shadow-sm shadow-slate-900/10 backdrop-blur transition hover:-translate-y-1/2 hover:bg-sky-50 hover:text-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-50 dark:hover:bg-slate-800"
          >
            →
          </button>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">{activeProject.title}</h3>
            {activeProject.highlight && (
              <a
                href={activeProject.highlightUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-200 transition hover:-translate-y-0.5 hover:bg-amber-50 hover:text-amber-700 dark:bg-amber-500/20 dark:text-amber-100 dark:ring-amber-400/30"
              >
                {activeProject.highlight}
              </a>
            )}
          </div>

          <a
            href={activeProject.figmaUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
          >
            {t("portfolio.carousel.openInFigma")}
            <span aria-hidden>↗</span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={project.id}
                  type="button"
                  aria-label={project.title}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    isActive
                      ? "bg-sky-500 ring-2 ring-sky-200 ring-offset-2 ring-offset-white dark:ring-offset-slate-900"
                      : "bg-slate-300/80 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
