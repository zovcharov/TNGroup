/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';
import './PersonItem.scss';
import Avatar from '../Avatar/Avatar';

const PersonItem = (props) => {
    const { person = {} } = props
    const {
        Name,
        RefUrlAvatar,
    } = person;
    return (
        <div className="person-item">
            <Avatar avatarUrl={RefUrlAvatar} />
            <a className="person-item__name">{Name}</a>
        </div>
    );
};

PersonItem.propTypes = {
    Name: PropTypes.string,
    RefUrlAvatar: PropTypes.string,
};

export default PersonItem;
