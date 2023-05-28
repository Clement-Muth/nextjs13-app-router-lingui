"use client";

import { AVAILABLE_LOCALES } from "core/locale";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  params: { lang: AVAILABLE_LOCALES };
}

const RootLayout = ({ children, params: { lang } }: LayoutProps) => {
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
