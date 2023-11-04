/* eslint-disable @next/next/no-page-custom-font */
import InvitationPageTemplate from "@/templates/InvitationPage/InvitationPageTemplate";
import MobilePage from "@/templates/InvitationPage/Mobile";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";

const Index: NextPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Periksa lebar jendela setelah komponen dimuat
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 900);
    };

    // Tambahkan event listener untuk mengikuti perubahan ukuran jendela
    window.addEventListener("resize", handleResize);

    // Inisialisasi nilai isMobile pada saat komponen dimuat
    handleResize();

    // Ingat untuk menghapus event listener saat komponen dibongkar
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
