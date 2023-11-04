/* eslint-disable @next/next/no-page-custom-font */
import InvitationPageTemplate from "@/templates/InvitationPage/InvitationPageTemplate";
import MobilePage from "@/templates/InvitationPage/Mobile";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";

const Index: NextPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    // check max window value
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 900);
    };

    // add window for resize
    window.addEventListener("resize", handleResize);

    // init isMobile
    handleResize();

    // hidden/remove cover
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shouldRenderContent = !isMobile;

  return (
    <>
      <Head>
        <title>invitation-test-iqbal</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Raleway&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Design by Muhammad Iqbal Maulana" />
      </Head>
      {shouldRenderContent ? <MobilePage /> : <InvitationPageTemplate />}
    </>
  );
};

export default Index;
