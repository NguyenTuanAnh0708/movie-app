import React from "react";

import "./footer.scss";

import { Link } from "react-router-dom";

import bg from "../../assets/footer2.jpeg";
import logo from "../../assets/logo/logo.png";
import "./footer.scss";
const Footer = () => {
    return (
        <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">tMovies</Link>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                <Link to="/">&copy; 2023 Nguyễn Tuấn Anh</Link>
            </div>
        </div>
    );
};

export default Footer;
