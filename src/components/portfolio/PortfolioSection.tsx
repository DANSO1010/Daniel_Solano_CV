import React, { useMemo, useState } from "react";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionTitle } from "../common/SectionTitle";
import { useLanguage } from "../../context/LanguageContext";

interface CarouselProject {
  id: string;
  title: string;
  figmaUrl: string;
  featured?: {
    badge: string;
    text: string;
    articleUrl: string;
    articleLabel: string;
  };
}

export const PortfolioSection: React.FC = () => {
  const { t } = useLanguage();

  const projects = useMemo<CarouselProject[]>(
    () => [
      {
        id: "activity-tracking",
        title: t("portfolio.carousel.activity.title"),
        figmaUrl:
          "https://www.figma.com/proto/cRuRI5gtKFsU1Z3IAe7p9O/Activity-Tracking?node-id=31-1303&t=HDoIPKi1eOGBO1lB-0&scaling=min-zoom&content-scaling=fixed&page-id=31%3A1302&starting-point-node-id=31%3A1303"
      },
      {
        id: "gestion-juridica",
        title: t("portfolio.carousel.gestion.title"),
        figmaUrl:
          "https://www.figma.com/proto/Abdhr8NgQ2GSGyyFZs3xSW/Gestion-Juridica?node-id=205-8748&t=HDoIPKi1eOGBO1lB-0&scaling=min-zoom&content-scaling=fixed&page-id=1%3A12"
      },
      {
        id: "medellin-te-escucha",
        title: t("portfolio.carousel.medellin.title"),
        figmaUrl:
          "https://www.figma.com/proto/9pRSd9UVlSJJIMsh3jtb8l/Medellin-te-Escucha?node-id=1-2&t=HDoIPKi1eOGBO1lB-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=52%3A1588&show-proto-sidebar=1"
      },
      {
        id: "vamos-med",
        title: t("portfolio.carousel.vamos.title"),
        figmaUrl:
          "https://www.figma.com/proto/MyjWA3xhq7I5X5cjFjn6sm/Vamos-Med?node-id=66-4079&t=HDoIPKi1eOGBO1lB-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=60%3A425"
      },
      {
        id: "ciudadano-360",
        title: t("portfolio.carousel.citizen360.title"),
        figmaUrl:
          "https://www.figma.com/proto/eDoipyvrcu1yxKU8WGxOvz/Ciudadano360-Fase-II?node-id=1792-6822&t=D1PS2PDcIidUeSlx-1&scaling=min-zoom&content-scaling=fixed&page-id=1492%3A3378&starting-point-node-id=1792%3A6822",
        featured: {
          badge: t("portfolio.carousel.featuredBadge"),
          text: t("portfolio.carousel.featuredText"),
          articleUrl:
            "https://www.elcolombiano.com/tecnologia/ciudadano-360-vistazo-app-medellin-eliminar-filas-tramites-engorrosos-IB29287935",
          articleLabel: t("portfolio.carousel.articleCta")
        }
      }
    ],
    [t]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];

  const handleNavigate = (direction: "next" | "prev") => {
    setActiveIndex(prevIndex => {
      if (direction === "next") {
        return prevIndex === projects.length - 1 ? 0 : prevIndex + 1;
      }
      return prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
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
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNavigate("prev")}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-x-1 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800"
            aria-label={t("portfolio.carousel.previous")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 19-7-7 7-7" />
            </svg>
          </button>
          <div className="flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/40 transition dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
            <div className="aspect-[16/9]">
              <iframe
                key={activeProject.id}
                title={activeProject.title}
                src={activeProject.figmaUrl}
                className="h-full w-full"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleNavigate("next")}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:translate-x-1 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800"
            aria-label={t("portfolio.carousel.next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{activeProject.title}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              {t("portfolio.carousel.position", { current: activeIndex + 1, total: projects.length })}
            </span>
            {activeProject.featured && (
              <span className="rounded-full bg-amber-100 px-3 py-1 font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
                {activeProject.featured.badge}
              </span>
            )}
          </div>
          <a
            href={activeProject.figmaUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6 6-6m0 0H9.75m3.75 0V9" />
            </svg>
            {t("portfolio.carousel.openPrototype")}
          </a>
          {activeProject.featured && (
            <p className="max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              {activeProject.featured.text}{" "}
              <a
                href={activeProject.featured.articleUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-amber-700 underline decoration-amber-300 decoration-2 underline-offset-4 transition hover:text-amber-800 dark:text-amber-200 dark:hover:text-amber-100"
              >
                {activeProject.featured.articleLabel}
              </a>
              .
            </p>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};
