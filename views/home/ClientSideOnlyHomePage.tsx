"use client";

import { Trans } from "@lingui/macro";
import { appWithTranslation } from "translations/appWithTranslation";

interface ClientSideOnlyHomePageProps {
  data: {};
}

const ClientSideOnlyHomePage = (_props: ClientSideOnlyHomePageProps) => {
  const username = "John Doe";

  return (
    <main>
      <h1>
        <Trans>Hello {username}! It is sunny today</Trans>
      </h1>
      <h2>
        <Trans>Let's work {username}!</Trans>
      </h2>
      <h2>
        <Trans>Test nextjs13 dirapp with lingui i18n</Trans>
      </h2>
    </main>
  );
};

export default appWithTranslation<ClientSideOnlyHomePageProps>(ClientSideOnlyHomePage);
