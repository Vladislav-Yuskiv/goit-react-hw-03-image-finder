import { Component } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import s from './Modal.module.css';

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if (e.code === "Escape") {
            this.props.closeModal();
        }
    };

    handleClickOnBackdrop = (e) => {
        if (e.target === e.currentTarget) {
            this.props.closeModal();
        }
    };
    render() {
        const { largeImg, alt } = this.props;
        return createPortal(
            <div className={s.Overlay} onClick={this.handleClickOnBackdrop}>
                <div className={s.Modal}>
                    <img src={largeImg} alt={alt} />
                </div>
            </div>,
            modalRoot

        )
    }
}

Modal.propTypes = {
    largeImg: PropTypes.string.isRequired,
    alt: PropTypes.string,
    closeModal: PropTypes.func.isRequired
}
export default Modal;