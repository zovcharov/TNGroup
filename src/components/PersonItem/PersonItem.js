/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import propTypes from 'prop-types';
import './PersonItem.scss';

import Avatar from '../Avatar/Avatar';
import { Link } from 'react-router-dom';

const PersonItem = ({ person = {}, singleString }) => {
    if (!person) {
        return null;
    }

    const {
        Name = '',
        RefUrlAvatar = '',
        Id = 0,
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
            <Link to={`/employee/${Id}`} className="person-item__name">{Name}</Link>
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
