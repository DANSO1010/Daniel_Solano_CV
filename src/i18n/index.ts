import es from "./locales/es.json";
import en from "./locales/en.json";

export type Locale = "es" | "en";

const translations = {
  es,
  en
} as const;

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & string];

export type TranslationKey = NestedKeyOf<typeof es>;

export const getTranslation = (locale: Locale, path: TranslationKey): string => {
  const parts = path.split(".");
  let current: any = translations[locale];

  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part];
    } else {
      return path;
    }
  }

  if (typeof current === "string") return current;
  return path;
};
