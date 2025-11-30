import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";

const sections = [
  { id: "home", key: "nav.home" },
  { id: "about", key: "nav.about" },
  { id: "portfolio", key: "nav.portfolio" },
  { id: "experience", key: "nav.experience" },
  { id: "cv", key: "nav.cv" }
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLanguage();

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-200/60 bg-slate-50/80 backdrop-blur dark:border-slate-800/60 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          className="text-sm font-semibold tracking-wide uppercase"
          onClick={() => handleScroll("home")}
        >
          <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold text-sky-400 dark:bg-slate-800/80">
            DS
          </span>{" "}
          <span className="hidden text-slate-900 dark:text-slate-100 sm:inline">
            Daniel Solano
          </span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className="text-sm text-slate-700 transition hover:text-sky-500 dark:text-slate-300 dark:hover:text-sky-400"
            >
              {t(section.key)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          <div className="inline-flex rounded-full border border-slate-300 bg-slate-100 p-0.5 text-xs dark:border-slate-700 dark:bg-slate-900">
            <button
              onClick={() => setLocale("es")}
              className={`px-2 py-1 rounded-full ${
                locale === "es"
                  ? "bg-sky-500 text-slate-950"
                  : "text-slate-700 dark:text-slate-300"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-2 py-1 rounded-full ${
                locale === "en"
                  ? "bg-sky-500 text-slate-950"
                  : "text-slate-700 dark:text-slate-300"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
