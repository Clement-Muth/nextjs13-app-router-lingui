import { Messages } from "@lingui/core";
import { AVAILABLE_LOCALES } from "core/locale";

export const loadTranslationMessagesOnServerSide = async (locale: AVAILABLE_LOCALES): Promise<Messages> => {
  const { messages } = await import(`@lingui/loader!./messages/${locale}.po`);

  return messages;
};
