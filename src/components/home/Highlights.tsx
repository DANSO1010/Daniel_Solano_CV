import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const items: Array<{ key: string }> = [
  { key: "highlights.years" },
  { key: "highlights.domains" },
  { key: "highlights.coordination" },
  { key: "highlights.stack" }
];

export const Highlights: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="border-b border-slate-200/60 bg-slate-50 dark:border-slate-800/60 dark:bg-slate-950">
      <div className="section-padding mx-auto max-w-6xl">
        <div className="grid gap-4 text-sm text-slate-800 dark:text-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-900/5 dark:border-slate-800/80 dark:bg-slate-900/60 dark:shadow-slate-950/40"
            >
              {t(item.key)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
