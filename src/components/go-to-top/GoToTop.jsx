import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import "boxicons";
import "./go-to-top.scss";
export const GoToTop = () => {
    const [showGoToTop, setShowGoto] = useState(false);
    const handelGoToTop = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 250) {
                setShowGoto(true);
            } else {
                setShowGoto(false);
            }
        });
        return () => {};
    }, []);
    return (
        <>
            {" "}
            {showGoToTop && (
                <Button
                    className={"btn-GoToTop radius"}
                    onClick={handelGoToTop}
                >
                    <box-icon
                        color="white"
                        name="chevron-up"
                        type="solid"
                    ></box-icon>
                </Button>
            )}
        </>
    );
};
