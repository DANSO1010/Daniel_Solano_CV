import React from "react";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200/60 bg-slate-50/90 dark:border-slate-800/60 dark:bg-slate-950/90">
      <div className="section-padding mx-auto flex max-w-6xl flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between dark:text-slate-400">
        <p>© {year} Daniel Alfonso Solano Velásquez. All rights reserved.</p>
        <p className="text-xs">
          Built with React, TypeScript, TailwindCSS &amp; Framer Motion.
        </p>
      </div>
    </footer>
  );
};
