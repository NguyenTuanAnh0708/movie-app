import React from "react";
import logo from "../../assets/logo/logo.png";
import "./globle-loading.scss";
import ReactLoading from "react-loading";
const GlobleLoading = ({ hiden = false }) => {
    const classes = `${hiden ? "GlobleLoading hiden" : "GlobleLoading"}`;
    return (
        <div className={classes}>
            <div className="loading-item">
                <img src={logo} alt="" />
                <div className="loading">
                    <ReactLoading
                        type="balls"
                        color="white"
                        height={"80%"}
                        width={"80%"}
                    />
                </div>
            </div>
        </div>
    );
};
export default GlobleLoading;
