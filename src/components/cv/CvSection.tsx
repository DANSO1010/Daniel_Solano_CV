import React from "react";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionTitle } from "../common/SectionTitle";
import { useLanguage } from "../../context/LanguageContext";

const contactIconBase = "h-4 w-4";

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className={contactIconBase}
  >
    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.05-.24 11.36 11.36 0 0 0 3.54.57 1 1 0 0 1 1 1V21a1 1 0 0 1-1 1A18 18 0 0 1 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.3 11.3 0 0 0 .57 3.54 1 1 0 0 1-.24 1.05z" />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className={contactIconBase}
  >
    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
    <path d="m3 7 9 6 9-6" strokeLinejoin="round" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    className={contactIconBase}
  >
    <rect x="3" y="9" width="4" height="11" rx="1" />
    <circle cx="5" cy="5.5" r="1.6" />
    <path d="M11 11.5c1.3-1.7 4.5-1.8 5.8.2.7 1 1.2 2.2 1.2 3.6V20h-4v-4.3c0-1.1-.7-1.9-1.6-1.9S11 14.6 11 15.7V20H7V9h4v2.5Z" />
  </svg>
);

type TechBadgeProps = {
  label: string;
  color: string;
  textColor?: string;
};

const TechBadge: React.FC<TechBadgeProps> = ({ label, color, textColor = "text-white" }) => (
  <div className="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-slate-50 px-3 py-2 shadow-sm shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/40 dark:shadow-slate-950/40">
    <span
      className={`flex h-9 w-9 items-center justify-center rounded-lg text-xs font-semibold ${textColor}`}
      style={{ background: color }}
      aria-hidden
    >
      {label}
    </span>
    <span className="text-xs font-semibold text-slate-800 dark:text-slate-100">{label}</span>
  </div>
);

export const CvSection: React.FC = () => {
  const { t } = useLanguage();
  const cvDownloadHref = `${import.meta.env.BASE_URL}CV_DANIEL%20SOLANO%20V.pdf`;

  const contactItems = [
    { icon: <PhoneIcon />, label: "+57 (300) 473 7104" },
    { icon: <MailIcon />, label: "daniel.asov@gmail.com" },
    {
      icon: <LinkedinIcon />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/daniel-solano-270592-col/",
    },
  ];

  const techItems = [
    { label: "Microsoft Office", color: "linear-gradient(135deg,#f97316,#ea580c)" },
    { label: "Python", color: "linear-gradient(135deg,#2563eb,#7c3aed)" },
    { label: "Streamlit", color: "linear-gradient(135deg,#ec4899,#f43f5e)" },
    { label: "OpenCV", color: "linear-gradient(135deg,#0ea5e9,#22d3ee)" },
    { label: "Figma", color: "linear-gradient(135deg,#22c55e,#a855f7)" },
    { label: "GitHub", color: "linear-gradient(135deg,#0f172a,#334155)" },
    { label: "Jira", color: "linear-gradient(135deg,#2563eb,#1d4ed8)" },
    { label: "Notion", color: "linear-gradient(135deg,#0f172a,#334155)", textColor: "text-slate-50" },
    { label: "HTML5", color: "linear-gradient(135deg,#f97316,#fb923c)" },
    { label: "CSS3", color: "linear-gradient(135deg,#0ea5e9,#2563eb)" },
    { label: "TailwindCSS", color: "linear-gradient(135deg,#14b8a6,#0ea5e9)" },
    { label: "JavaScript", color: "linear-gradient(135deg,#facc15,#f59e0b)", textColor: "text-slate-900" },
    { label: "TypeScript", color: "linear-gradient(135deg,#3b82f6,#2563eb)" },
    { label: "React", color: "linear-gradient(135deg,#22d3ee,#06b6d4)" },
  ];

  return (
    <SectionWrapper id="cv" className="bg-slate-50 dark:bg-slate-950">
      <SectionTitle
        eyebrow={t("cv.eyebrow")}
        title={t("cv.title")}
        subtitle={t("cv.subtitle")}
      />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-start">
        <aside className="space-y-6 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-800 shadow-sm shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-200 dark:shadow-slate-950/40">
          <section id="contact" className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {t("contact.title")}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">{t("contact.description")}</p>
            <ul className="space-y-2 text-xs">
              {contactItems.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-700 shadow-sm shadow-sky-900/10 dark:bg-sky-900/60 dark:text-sky-100 dark:shadow-slate-950/50">
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-300"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-slate-800 dark:text-slate-200">{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {t("cv.languages")}
            </h3>
            <ul className="mt-2 space-y-1 text-xs">
              <li>{t("cv.languageSpanish")}</li>
              <li>{t("cv.languageEnglish")}</li>
              <li>{t("cv.languageChinese")}</li>
            </ul>
          </section>
          <section>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {t("cv.tech")}
            </h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {techItems.map((item) => (
                <TechBadge key={item.label} label={item.label} color={item.color} textColor={item.textColor} />
              ))}
            </div>
          </section>
        </aside>
        <main className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-800 shadow-sm shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-200 dark:shadow-slate-950/40">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {t("cv.summaryTitle")}
            </h3>
            <p className="mt-2 text-xs">{t("cv.summaryBody")}</p>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-800 shadow-sm shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-200 dark:shadow-slate-950/40">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {t("cv.education")}
            </h3>
            <ul className="mt-2 space-y-1 text-xs">
              <li>{t("cv.educationSystems")}</li>
              <li>{t("cv.educationSpecialization")}</li>
              <li>{t("cv.educationDiploma")}</li>
            </ul>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-800 shadow-sm shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-200 dark:shadow-slate-950/40">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {t("cv.downloadTitle")}
            </h3>
            <p className="mt-2 text-xs">{t("cv.downloadBody")}</p>
            <div className="mt-3">
              <a
                href={cvDownloadHref}
                download="CV_DANIEL SOLANO V.pdf"
                className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400"
              >
                {t("cv.downloadCta")}
              </a>
            </div>
          </section>
        </main>
      </div>
    </SectionWrapper>
  );
};
