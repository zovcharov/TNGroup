/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useRef } from 'react';
import TngPortal from '../TngPortal/TngPortal';
import Preloader from '../Preloader/Preloader';

import './ModalWrapper.scss';

const ModalWrapper = ({
    isOpen, onClose, children, title, isLoading = false,
}) => {
    const overlayRef = useRef(null);

    if (isOpen) {
        return (
            <TngPortal>
                <div className="modal__overlay">
                    <div className="modal__window">
                        {
                            isLoading && (
                                <div className="modal__loader">
                                    <Preloader fullScreen />
                                </div>
                            )
                        }
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
        );
    }

    return null;
};

export default ModalWrapper;
