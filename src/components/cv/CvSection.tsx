import React from "react";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionTitle } from "../common/SectionTitle";
import { useLanguage } from "../../context/LanguageContext";

export const CvSection: React.FC = () => {
  const { t } = useLanguage();
  const cvDownloadHref = `${import.meta.env.BASE_URL}CV_DANIEL%20SOLANO%20V.pdf`;

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
            <ul className="space-y-1 text-xs">
              <li>📞 +57 (300) 473 7104</li>
              <li>📧 daniel.asov@gmail.com</li>
              <li>
                🔗{" "}
                <a
                  href="https://www.linkedin.com/in/daniel-solano-270592-col/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-500 hover:text-sky-400"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
            <p className="text-xs text-slate-600 dark:text-slate-400">{t("contact.note")}</p>
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
            <p className="mt-2 text-xs">
              {t("cv.techList")}
            </p>
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
