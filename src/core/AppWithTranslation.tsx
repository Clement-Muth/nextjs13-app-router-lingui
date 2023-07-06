"use client";

import { I18nProvider } from "@lingui/react";
import { ReactNode } from "react";
import { globalI18n } from "~/translations/i18n";
import { ServerSideGeneratedI18nNamespace } from "~/translations/types";
import useLoadTranslation from "~/translations/useLoadTranslation";

interface AppWithTranslationProps {
  i18n: ServerSideGeneratedI18nNamespace;
  children: ReactNode;
}

const AppWithTranslation = ({ i18n, children }: AppWithTranslationProps) => {
  const { locale } = i18n;
  const i18nPropsNamespace = i18n._i18nPropsNamespace;

  useLoadTranslation(i18nPropsNamespace, locale);

  return <I18nProvider i18n={globalI18n}>{children}</I18nProvider>;
};

export default AppWithTranslation;
