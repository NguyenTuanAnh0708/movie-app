import React, { useContext } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import GlobleLoading from "../components/globle-loading/GlobleLoading";
import { AppContext } from "../context/AppContext";
import { GoToTop } from "../components/go-to-top/GoToTop";
export const DefaultLayout = ({ children }) => {
    const { hidenLoading } = useContext(AppContext);
    console.log(hidenLoading);
    return (
        <div className="wapper-defaultLayout">
            <GlobleLoading hiden={hidenLoading} />
            <GoToTop />
            <Header />
            <div className="content-deafaultLayout">{children}</div>
            <Footer />
        </div>
    );
};
