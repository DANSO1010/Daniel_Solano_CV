import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export const HomeHero: React.FC = () => {
  const { t } = useLanguage();
  const cvDownloadHref = `${import.meta.env.BASE_URL}CV_DANIEL%20SOLANO%20V.pdf`;
  const portraitSrc = `${import.meta.env.BASE_URL}danielSolano2.png`;
  const highlightItems: Array<{ key: string }> = [
    { key: "highlights.years" },
    { key: "highlights.domains" },
    { key: "highlights.stack" }
  ];

  return (
    <div className="section-padding relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 pt-32 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:gap-10">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 max-w-xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
              {t("hero.tagline")}
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-slate-50">
              Daniel Alfonso{" "}
              <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                Solano Velásquez
              </span>
            </h1>
            <p className="mt-4 text-sm text-slate-800 dark:text-slate-300">{t("hero.title")}</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{t("hero.subtitle")}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-sky-500/40 transition hover:bg-sky-400"
              >
                {t("hero.primaryCta")}
              </a>
              <a
                href={cvDownloadHref}
                download="CV_DANIEL SOLANO V.pdf"
                className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-800 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-sky-500 hover:bg-sky-50/80 hover:text-sky-600 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/70"
              >
                {t("hero.secondaryCta")}
              </a>
            </div>
          </motion.div>

          <div className="relative z-10 w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
              className="group relative mb-5 overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-xl shadow-slate-900/10 backdrop-blur dark:border-slate-800/70 dark:bg-slate-900/60 dark:shadow-slate-950/60"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-cyan-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={portraitSrc}
                  alt="Daniel Solano"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.14 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/10 dark:border-slate-800/70 dark:bg-slate-900/60 dark:shadow-slate-950/60"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
                {t("hero.profileTitle")}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-800 dark:text-slate-200">
                <li>{t("hero.profileDegree")}</li>
                <li>{t("hero.profileSpecialization")}</li>
                <li>{t("hero.profileExperience")}</li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="grid gap-4 text-sm text-slate-800 dark:text-slate-200 sm:grid-cols-2 lg:-mt-8 lg:grid-cols-3 lg:gap-5">
          {highlightItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 * idx + 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-900/60 dark:shadow-slate-950/40"
            >
              {t(item.key)}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
