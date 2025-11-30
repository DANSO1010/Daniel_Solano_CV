import React, { createContext, useContext, useEffect, useState } from "react";
import { Locale, getTranslation } from "../i18n";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const getInitialLocale = (): Locale => {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem("locale") as Locale | null;
  if (stored === "es" || stored === "en") return stored;
  const browser = window.navigator.language.toLowerCase();
  if (browser.startsWith("en")) return "en";
  return "es";
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    window.localStorage.setItem("locale", locale);
  }, [locale]);

  const setLocale = (loc: Locale) => setLocaleState(loc);

  const t = (key: string) => getTranslation(locale, key as any);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
