import React from "react";
import Button from "../Button/Button";
import Portal from "../Portal/Portal";
import "./Modal.css";
import { FaTimes } from 'react-icons/fa';

const initialContainerModal = {
    title: "",
    content: "",
    size: "",
    confirmAction: () => { },
    cancelAction: undefined
};

const Modal = ({ close, containerModal = initialContainerModal }) => {
    return (
        <Portal name="modal">
            <>
                <div className="box-modal">
                    <div className={`size-${containerModal.size}`}>

                        <div className="modal-header">
                            {containerModal.title ? (
                                <h3>{containerModal.title}</h3>
                            ) : null}

                            {containerModal.cancelAction && <Button type="circle" icon={<FaTimes />} action={containerModal.cancelAction} />}

                        </div>

                        {containerModal.content ? (
                            <div className="modal-content">{containerModal.content}</div>
                        ) : null}

                        {containerModal.cancelAction || containerModal.confirmAction ? (
                            <footer className="modal-footer">
                                {containerModal.cancelAction && <Button label="Cancelar" action={containerModal.cancelAction} />}
                                {containerModal.confirmAction && <Button color="primary" label="Confirmar" action={containerModal.confirmAction} />}
                            </footer>
                        ) : null}
                    </div>
                </div>
            </>
        </Portal>
    );
};

export default Modal;