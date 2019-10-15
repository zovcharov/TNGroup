import React from 'react';
import TngPortal from '../TngPortal/TngPortal';

import './ModalWrapper.scss';

const ModalWrapper = ({ isOpen, onClose, children, title }) => {
    if (isOpen) {
        return (
            <TngPortal>
                <div className="modal__overlay">
                    <div className="modal__window">
                        <div className="modal__content">
                            <div className="modal__close" onClick={onClose}></div>
                            <div className="modal__title">
                                {title}
                            </div>
                            { children }
                        </div>
                    </div>
                </div>
            </TngPortal>
        )
    }

    return null;
};

export default ModalWrapper;
