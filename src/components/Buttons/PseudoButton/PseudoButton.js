import React from 'react'
import Button from "../../Button/Button";

import './PseudoButton.scss'

const PseudoButton = (props) => {
    const {
        className = '',
        children,
        onClick = () => {},
        link='',
    } = props;

    return (
        <Button
            className={`pseudo-button ${className}`}
            onClick={onClick}
            link={link}
        >
            {children}
        </Button>
    )
}

export default PseudoButton
