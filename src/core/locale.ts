export enum AVAILABLE_LOCALES {
  en = "en",
  fr = "fr"
}

export const DEFAULT_LOCALE = AVAILABLE_LOCALES.en;

export function isAcceptedLocale(locale: unknown): locale is AVAILABLE_LOCALES {
  if (typeof locale !== "string") {
    return false;
  }

  return locale in AVAILABLE_LOCALES;
}

export const locales = ["en", "fr"] as const;

export function selectFirstAcceptedLocale(...mayBeLocales: Array<unknown>): AVAILABLE_LOCALES {
  for (const mayBeLocale of mayBeLocales) {
    if (isAcceptedLocale(mayBeLocale)) {
      return mayBeLocale;
    }
  }

  return DEFAULT_LOCALE;
}
