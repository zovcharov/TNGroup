/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import propTypes from 'prop-types';
import './PersonItem.scss';

import Avatar from '../Avatar/Avatar';

const PersonItem = ({ person = {}, singleString }) => {
    const {
        Name = '',
        RefUrlAvatar = '',
    } = person;

    if (!Name) {
        return (
            <div className="person-item">
                <span className="person-item__empty" />
            </div>
        );
    }

    return (
        <div className={`person-item ${singleString ? 'person-item_single-string' : ''}`}>
            <Avatar
                className="person-item__avatar"
                size="m"
                avatarUrl={RefUrlAvatar || undefined}
            />
            <a className="person-item__name">{Name}</a>
        </div>
    );
};

PersonItem.propTypes = {
    person: propTypes.shape({
        Name: propTypes.string.isRequired,
        RefUrlAvatar: propTypes.string,
    }),
};

PersonItem.defaultProps = {
    person: {
        Name: '',
        RefUrlAvatar: '',
    },
};

export default PersonItem;
