import { AVAILABLE_LOCALES } from "~/core/locale";
import { loadTranslationMessagesOnServerSide } from "~/translations/messagesLoader";
import { ServerSideGeneratedI18nNamespace } from "~/translations/types";

export const serverSideTranslations = async (
  initialLocale: AVAILABLE_LOCALES
): Promise<ServerSideGeneratedI18nNamespace> => {
  if (typeof initialLocale !== "string") {
    throw new Error("Initial locale argument was not passed into serverSideTranslations");
  }

  return {
    _i18nPropsNamespace: {
      initialLocale,
      initialMessages: (await loadTranslationMessagesOnServerSide(initialLocale)) ?? {}
    },
    locale: initialLocale
  };
};
