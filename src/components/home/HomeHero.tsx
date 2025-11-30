import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export const HomeHero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="section-padding relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 pt-32 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 max-w-xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
            Portafolio profesional
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
              className="inline-flex items-center rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-sm shadow-sky-500/40 transition hover:bg-sky-400"
            >
              {t("hero.primaryCta")}
            </a>
            <a
              href="#cv"
              className="inline-flex items-center rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-800 transition hover:border-sky-500 hover:text-sky-500 dark:border-slate-700 dark:text-slate-200"
            >
              {t("hero.secondaryCta")}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative z-10 w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/10 dark:border-slate-800/70 dark:bg-slate-900/60 dark:shadow-slate-950/60"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
            Perfil rápido
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-800 dark:text-slate-200">
            <li>Ingeniero de Sistemas (Universidad EAFIT).</li>
            <li>Especialista en Sistemas de Información (Universidad EAFIT).</li>
            <li>Experiencia en Frontend, UI/UX,  y Coordinación de Proyectos.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
