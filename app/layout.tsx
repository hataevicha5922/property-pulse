import React, { FC, FunctionComponent, ReactElement, ReactNode } from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface IMainLayout {
  children?: ReactNode;
}

export const metadata = {
  title: "Property pulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keyword: "rental, find rental, find properties",
};

const MainLayout: FunctionComponent<IMainLayout> = ({ children }) => {
  return (
    <html lang="eng">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
