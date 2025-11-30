import React from "react";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionTitle } from "../common/SectionTitle";
import { useLanguage } from "../../context/LanguageContext";

export const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    { key: "fincrime" },
    { key: "soporte" },
    { key: "tass_web" },
    { key: "tass_pm" }
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
              className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-800 shadow-sm shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-200 dark:shadow-slate-950/40"
            >
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold text-slate-900 dark:text-slate-50">
                  {t(`${base}.company`)}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t(`${base}.period`)}
                </p>
              </header>
              <p className="mt-1 text-xs font-semibold text-sky-500">
                {t(`${base}.role`)}
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-xs">
                <li>{t(`${base}.b1`)}</li>
                <li>{t(`${base}.b2`)}</li>
                {item.key in { fincrime: true, tass_web: true, tass_pm: true } && (
                  <li>{t(`${base}.b3`)}</li>
                )}
              </ul>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
