import React from 'react'
import Button from "../../Button/Button";
import './DefaultButton.scss'

const DefaultButton = (props) => {
    const {
        className = '',
        children,
        onClick = () => {}
    } = props
    return (
        <Button
            className={`default-button ${className}`}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default DefaultButton