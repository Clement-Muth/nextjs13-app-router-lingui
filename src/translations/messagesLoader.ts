import { Messages } from "@lingui/core";
import { AVAILABLE_LOCALES, DEFAULT_LOCALE, isAcceptedLocale } from "~/core/locale";

export const loadTranslationMessagesOnServerSide = async (
  locale: AVAILABLE_LOCALES
): Promise<Messages | null> => {
  const { messages } = await import(
    `@lingui/loader!./messages/${!isAcceptedLocale(locale) ? DEFAULT_LOCALE : locale}.po`
  );

  return messages;
};
