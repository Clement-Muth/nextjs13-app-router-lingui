import { activateLocale, globalI18n } from "./i18n";
import { I18nPropsNamespace } from "./types";
import { AVAILABLE_LOCALES, selectFirstAcceptedLocale } from "core/locale";
import { useEffect, useMemo } from "react";

const useLoadTranslation = (i18nPropsNamespace: I18nPropsNamespace, locale: AVAILABLE_LOCALES) => {
  const expectedLocale = selectFirstAcceptedLocale(locale, AVAILABLE_LOCALES.en);

  useMemo(() => {
    if (!i18nPropsNamespace) {
      console.error("No internationalization context have been found.");
    }

    if (i18nPropsNamespace && expectedLocale !== i18nPropsNamespace.initialLocale) {
      console.error(
        `The loaded locale from the "getStaticProps()" and the one from the NextJs router does not match. NextJs router "${locale}". Active locale "${expectedLocale}". Loaded "${i18nPropsNamespace.initialLocale}"`
      );
    }

    activateLocale(globalI18n, locale, i18nPropsNamespace.initialMessages);
  }, []);

  useEffect(() => {
    if (!i18nPropsNamespace) {
      console.error("No internationalization context have been found.");
    }

    if (i18nPropsNamespace && expectedLocale !== i18nPropsNamespace.initialLocale) {
      console.error(
        `The loaded locale from the "getStaticProps()" and the one from the NextJs router does not match. NextJs router "${locale}". Active locale "${expectedLocale}". Loaded "${i18nPropsNamespace.initialLocale}"`
      );
    }

    activateLocale(globalI18n, locale, i18nPropsNamespace.initialMessages);
  }, [locale]);
};

export default useLoadTranslation;
