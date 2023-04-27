import React, { useContext } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import GlobleLoading from "../components/globle-loading/GlobleLoading";
import { AppContext } from "../context/AppContext";
export const DefaultLayout = ({ children }) => {
    const { hidenLoading } = useContext(AppContext);
    return (
        <div className="wapper-defaultLayout">
            <GlobleLoading hiden={hidenLoading} />
            <Header />
            <div className="content-deafaultLayout">{children}</div>
            <Footer />
        </div>
    );
};
