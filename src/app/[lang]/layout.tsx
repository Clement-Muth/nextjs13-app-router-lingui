import { ReactNode } from "react";
import AppWithTranslation from "~/core/AppWithTranslation";
import { AVAILABLE_LOCALES, locales } from "~/core/locale";
import { serverSideTranslations } from "~/translations/serverSideTranslations";

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

interface LayoutProps {
  children: ReactNode;
  params: { lang: AVAILABLE_LOCALES };
}

const RootLayout = async ({ children, params }: LayoutProps) => {
  const i18n = await serverSideTranslations(params?.lang);

  return (
    <html lang={params?.lang}>
      <body>
        <AppWithTranslation i18n={i18n}>{children}</AppWithTranslation>
      </body>
    </html>
  );
};

export default RootLayout;
