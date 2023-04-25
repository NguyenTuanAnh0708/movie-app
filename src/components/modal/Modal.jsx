import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "boxicons";
import "./modal.scss";
const Modal = (props) => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        setActive(props.active);
    }, [props.active]);
    return (
        <div className={`modal ${active ? "active" : ""}`} id={props.id}>
            {props.children}
        </div>
    );
};

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string
};
export const ModalContent = (props) => {
    const contentRef = useRef(null);
    const closeModal = () => {
        contentRef.current.parentNode.classList.remove("active");
        if (props.onClose) props.onClose();
    };
    return (
        <div ref={contentRef} className="modal__content">
            {props.children}
            <div className="modal__content__close" onClick={closeModal}>
                <i>
                    <box-icon color="white" name="x"></box-icon>
                </i>
            </div>
        </div>
    );
};
ModalContent.propTypes = {
    onClose: PropTypes.func
};
export default Modal;
