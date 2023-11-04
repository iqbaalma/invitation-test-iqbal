import React, { useState, useEffect } from "react";
import Cover from "./components/Cover";
import WelcomingPage from "./components/WelcomingPage";

const InvitationPageTemplate: React.FC = () => {
  const [isScreenLessThan1026px, setIsScreenLessThan1026px] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenLessThan1026px(window.innerWidth <= 900);
    };

    // Pastikan kode ini hanya berjalan di sisi klien (browser).
    if (typeof window !== "undefined") {
      setIsScreenLessThan1026px(window.innerWidth <= 900);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      <div className="flex">
        {!isScreenLessThan1026px && <Cover />}
        <WelcomingPage />
      </div>
    </>
  );
};

export default InvitationPageTemplate;
