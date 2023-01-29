import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Meteo from "../pages/Meteo";

const Layout = () => {
  return (
    <main id="page">
      <Header />
      <Meteo />
      <Footer />
    </main>
  );
};
export default Layout;
