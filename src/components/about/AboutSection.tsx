import React from "react";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionTitle } from "../common/SectionTitle";
import { useLanguage } from "../../context/LanguageContext";

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="about" className="bg-slate-50 dark:bg-slate-950">
      <SectionTitle
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-sm text-slate-800 dark:text-slate-200">
          <p>{t("about.body1")}</p>
          <p>{t("about.body2")}</p>
          <p>{t("about.body3")}</p>
        </div>
        <div className="space-y-4 text-sm text-slate-800 dark:text-slate-200">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-900/60 dark:shadow-slate-950/40">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {t("about.skillsTitle")}
            </h3>
            <ul className="mt-3 space-y-1 text-xs">
              <li>{t("about.skillsUx")}</li>
              <li>{t("about.skillsFrontend")}</li>
              <li>{t("about.skillsManagement")}</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-900/60 dark:shadow-slate-950/40">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {t("about.timelineTitle")}
            </h3>
            <ul className="mt-3 space-y-1 text-xs">
              <li>{t("about.timeline1")}</li>
              <li>{t("about.timeline2")}</li>
              <li>{t("about.timeline3")}</li>
              <li>{t("about.timeline4")}</li>
              <li>{t("about.timeline5")}</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
