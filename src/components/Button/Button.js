import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Button.scss'

const getClassNames = (propsList) => {
    const {
        className,
        disabled
    } = propsList
    let classes = ['button']
    if (disabled) {
        classes.push('button_disabled')
    }
    if (className) {
        classes.push(className)
    }
    return classes.join(' ')
}

const Button = (props) => {
    const {
        type = 'button',
        onClick = () => {},
        children,
        disabled = false,
        style,
        link,
    } = props;

    if (link) {
        return (
            <Link
                to={link}
                type={type}
                onClick={disabled ? () => {} : onClick}
                className={getClassNames(props)}
                style={style}
            >
                {children}
            </Link>
        )
    }

    return (
        <button
            type={type}
            onClick={disabled ? () => {} : onClick}
            className={getClassNames(props)}
            style={style}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node
    ]),
    disabled: PropTypes.bool,
    style: PropTypes.object
}

export default Button
