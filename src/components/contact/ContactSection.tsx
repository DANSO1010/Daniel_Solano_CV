import React from "react";
import { SectionWrapper } from "../layout/SectionWrapper";
import { SectionTitle } from "../common/SectionTitle";
import { useLanguage } from "../../context/LanguageContext";

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="contact" className="bg-slate-50 dark:bg-slate-950">
      <SectionTitle
        eyebrow={t("contact.title")}
        title={t("contact.description")}
      />
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-800 shadow-sm shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-200 dark:shadow-slate-950/40">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {t("contact.emailLabel")}
            </h3>
            <p className="mt-1 text-xs">
              <a
                href="mailto:daniel.asov@gmail.com"
                className="text-sky-500 hover:text-sky-400"
              >
                daniel.asov@gmail.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {t("contact.phoneLabel")}
            </h3>
            <p className="mt-1 text-xs">+57 (300) 473 7104</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {t("contact.socialLabel")}
            </h3>
            <ul className="mt-1 space-y-1 text-xs">
              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/daniel-solano-270592-col/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-500 hover:text-sky-400"
                >
                  /daniel-solano-270592-col
                </a>
              </li>
            </ul>
          </div>
        </section>
        <aside className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-800 shadow-sm shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-200 dark:shadow-slate-950/40">
          <p className="text-xs text-slate-700 dark:text-slate-400">
            {t("contact.note")}
          </p>
        </aside>
      </div>
    </SectionWrapper>
  );
};
