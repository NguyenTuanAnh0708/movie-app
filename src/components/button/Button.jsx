import React from "react";
import PropTypes from "prop-types";
import "./button.scss";
const Button = (props) => {
    return (
        <button
            className={props.className ? `btn ${props.className}` : `btn`}
            onClick={props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </button>
    );
};
Button.propTypes = {
    onClick: PropTypes.func
};
export const OutlineButton = (props) => {
    return (
        <Button
            className={`btn-outline ${
                props.className ? props.className : null
            }`}
            onClick={props.onClick}
        >
            {props.children}
        </Button>
    );
};
OutlineButton.propTypes = {
    onClick: PropTypes.func
};
export default Button;
