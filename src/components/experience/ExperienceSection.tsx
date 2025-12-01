import React from "react";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionTitle } from "../common/SectionTitle";
import { useLanguage } from "../../context/LanguageContext";

export const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      key: "tass_pm",
      logo: { src: "/tass.svg", alt: "Tass Technology logo" }
    },
    {
      key: "tass_web",
      logo: { src: "/tass.svg", alt: "Tass Technology logo" }
    },
    {
      key: "fincrime",
      logo: { src: "/fincrime.webp", alt: "FinCrime Dynamics logo" }
    },
    {
      key: "soporte",
      logo: { src: "/soporteSA.webp", alt: "Soporte S.A. logo" }
    }
  ];

  return (
    <SectionWrapper id="experience" className="bg-slate-50 dark:bg-slate-950">
      <SectionTitle
        eyebrow={t("experience.eyebrow")}
        title={t("experience.title")}
        subtitle={t("experience.subtitle")}
      />
      <div className="space-y-4">
        {items.map(item => {
          const base = `experience.${item.key}`;
          return (
            <article
              key={item.key}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-800 shadow-sm shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-200 dark:shadow-slate-950/40"
            >
              <div className="flex-shrink-0">
                <img
                  src={item.logo.src}
                  alt={item.logo.alt}
                  className="h-16 w-16 rounded-2xl bg-white/60 object-contain p-2 shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <header className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-50">
                    {t(`${base}.company`)}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t(`${base}.period`)}
                  </p>
                </header>
                <p className="text-xs font-semibold text-sky-500">
                  {t(`${base}.role`)}
                </p>
                <ul className="list-disc space-y-1 pl-5 text-xs">
                  <li>{t(`${base}.b1`)}</li>
                  <li>{t(`${base}.b2`)}</li>
                  {item.key in { fincrime: true, tass_web: true, tass_pm: true } && (
                    <li>{t(`${base}.b3`)}</li>
                  )}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
