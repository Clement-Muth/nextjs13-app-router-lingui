import useLoadTranslation from "./useLoadTranslation";
import { I18nProvider } from "@lingui/react";
import hoistNonReactStatics from "hoist-non-react-statics";
import React from "react";
import { globalI18n } from "translations/i18n";
import { I18nPropsNamespace, ServerSideGeneratedI18nNamespace } from "translations/types";

type AppProps = {
  pageProps: ServerSideGeneratedI18nNamespace;
};

export function appWithTranslation<T>(WrappedComponent: React.ComponentType) {
  function AppWithTranslation({ pageProps, ...restT }: AppProps & T) {
    const { locale } = pageProps;
    const i18nPropsNamespace = (pageProps._i18nPropsNamespace ?? undefined) as I18nPropsNamespace | undefined;

    useLoadTranslation(i18nPropsNamespace, locale);

    return (
      <>
        <I18nProvider i18n={globalI18n}>
          <WrappedComponent key={locale} {...restT} />
        </I18nProvider>
      </>
    );
  }

  return hoistNonReactStatics(AppWithTranslation, WrappedComponent);
}
