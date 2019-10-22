import React, { useRef, useEffect } from 'react';
import TngPortal from '../TngPortal/TngPortal';

import './ModalWrapper.scss';
import {useClickOutsideToClose} from "../../helpers/effects";

const ModalWrapper = ({ isOpen, onClose, children, title }) => {
    const overlayRef = useRef(null);
    //useClickOutsideToClose(overlayRef, onClose);

    if (isOpen) {
        return (
            <TngPortal>
                <div className="modal__overlay">
                    <div className="modal__window">
                        <div className="modal__content" ref={overlayRef}>
                            <div className="modal__close" onClick={onClose} />
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
