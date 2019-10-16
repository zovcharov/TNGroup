import React from 'react'
import Button from "../Button/Button";
import './DefaultButton.scss'

const DefaultButton = (props) => {
    const {
        children,
        onClick = () => {}
    } = props
    return (
        <Button
            className='default-button'
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

export default DefaultButton