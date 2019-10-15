import React from 'react'
import Button from "../Button/Button";
import './DefaultButton.scss'

const DefaultButton = (props) => {
    const {
        children
    } = props
    return (
        <Button className='default-button'>
            {children}
        </Button>
    )
}

export default DefaultButton