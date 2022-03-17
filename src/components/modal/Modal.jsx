import React from 'react';
import { ModalStyles } from './ModalStyles';
import { IoCloseSharp } from 'react-icons/io5';

const Modal = ({children, isOpen, closeModal, ...otherProps}) => {

    const handleModalContainerClick = e => e.stopPropagation();

    return (
        <ModalStyles 
            isOpen={isOpen} 
            onClick={otherProps.isAdvertisement ? closeModal : null} 
            minWidth={otherProps.minWidth}
            maxWidth={otherProps.maxWidth}
            background={otherProps.background}
            color={otherProps.color}
        >
            <div className="modal-container" onClick={handleModalContainerClick}>
                {
                    otherProps.isAdvertisement 
                    ? <button className="modal-close" onClick={closeModal}><IoCloseSharp /></button>
                    : <div className="modal-close-text" onClick={closeModal}>Cancelar</div>
                }
                {children}
            </div>
        </ModalStyles>
    )
}

export default Modal;