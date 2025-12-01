import React from "react";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionTitle } from "../common/SectionTitle";
import { useLanguage } from "../../context/LanguageContext";

const iconBase = "h-4 w-4";

const GraduationCapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className={iconBase}
  >
    <path
      d="M3 9.75 12 5l9 4.75-9 4.75-9-4.75Z"
      fill="currentColor"
      strokeLinejoin="round"
    />
    <path d="M7 12.5v3.8c1.7 1.02 3.3 1.53 5 1.53s3.3-.51 5-1.53v-3.8" />
    <path d="M21 9.75v4.5" />
  </svg>
);

const CertificateIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className={iconBase}
  >
    <path
      d="M8 4h6l4 4v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"
      strokeLinejoin="round"
    />
    <path d="M14 4v4h4" />
    <path d="m9.5 13 1.75 1.75L16 10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className={iconBase}
  >
    <path d="m9 7-5 5 5 5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m15 17 5-5-5-5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="m13 5-2 14" strokeLinecap="round" />
  </svg>
);

const PaletteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className={iconBase}
  >
    <path
      d="M12 4.5a7.5 7.5 0 1 0 0 15 1.8 1.8 0 0 0 1.7-2.5 2 2 0 0 1 1.9-2.5h1.4A2.5 2.5 0 0 0 19.5 12 7.5 7.5 0 0 0 12 4.5Z"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="10" r="0.8" fill="currentColor" />
    <circle cx="14.5" cy="9.5" r="0.8" fill="currentColor" />
    <circle cx="8.5" cy="14" r="0.8" fill="currentColor" />
    <circle cx="12.5" cy="13.5" r="0.8" fill="currentColor" />
  </svg>
);

const RocketIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className={iconBase}
  >
    <path
      d="M12 4c3.5 0 6 2.5 6 6 0 2-.9 3.8-2.4 5.1l-1.1 1a3 3 0 0 1-4 0l-1.1-1A6.6 6.6 0 0 1 6 10c0-3.5 2.5-6 6-6Z"
      strokeLinejoin="round"
    />
    <path d="M10 13.5 8 15a3 3 0 0 0-2.5-.5l1.7-2.7M14 13.5l2 1.5a3 3 0 0 1 2.5-.5l-1.7-2.7" />
    <path d="M10.5 18.5 10 21l2-1 2 1-.5-2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="9" r="1.2" />
  </svg>
);

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  const timelineItems = [
    { icon: <GraduationCapIcon />, text: t("about.timeline1") },
    { icon: <CertificateIcon />, text: t("about.timeline2") },
    { icon: <CodeIcon />, text: t("about.timeline3") },
    { icon: <PaletteIcon />, text: t("about.timeline4") },
    { icon: <RocketIcon />, text: t("about.timeline5") },
  ];

  return (
    <SectionWrapper id="about" className="bg-slate-50 dark:bg-slate-950">
      <SectionTitle
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      />
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16 lg:justify-items-center">
        <div className="space-y-4 text-sm text-slate-800 dark:text-slate-200 lg:max-w-xl lg:justify-self-center">
          <p>{t("about.body1")}</p>
          <p>{t("about.body2")}</p>
          <p>{t("about.body3")}</p>
        </div>
        <div className="space-y-4 text-sm text-slate-800 dark:text-slate-200 lg:max-w-md lg:justify-self-center">
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
            <ul className="mt-3 space-y-2 text-xs">
              {timelineItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-700 dark:bg-sky-900/60 dark:text-sky-100">
                    {item.icon}
                  </span>
                  <span className="leading-relaxed text-slate-800 dark:text-slate-200">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
