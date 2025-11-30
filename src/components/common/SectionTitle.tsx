import React from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ eyebrow, title, subtitle }) => {
  return (
    <header className="mb-8">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-slate-50">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-sm text-slate-700 dark:text-slate-300">{subtitle}</p>
      )}
    </header>
  );
};
