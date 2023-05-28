import { serverSideTranslations } from "translations/serverSideTranslations";
import { NextPage } from "types";
import ClientSideOnlyHomePage from "views/home/ClientSideOnlyHomePage";

const HomePage = async (props: NextPage) => {
  const pageProps = await serverSideTranslations(props.params.lang);

  return <ClientSideOnlyHomePage pageProps={pageProps} data={{ message: "Hello" }} />;
};

export default HomePage;
