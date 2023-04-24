import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
export const DefaultLayout = ({ children }) => {
  return (
    <div className="wapper-defaultLayout">
      <Header />
      <div className="content-deafaultLayout">{children}</div>
      <Footer />
    </div>
  );
};
