/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid,react/no-array-index-key */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';

import './Avatar.scss';

import defaultAvatar from './img/default-avatar.png';

const AVAILABLE_SIZES = ['s', 'm', 'l'];
const DEFAULT_SIZE = 'm';

const getClassForSize = (size) => (AVAILABLE_SIZES.indexOf(size) !== -1 ? `avatar_size_${size}` : `avatar_size_${DEFAULT_SIZE}`);

const Avatar = (props) => {
    const {
        size,
        avatarUrl = defaultAvatar,
        width,
        height,
        className = '',
    } = props;

    const styles = {
        backgroundImage: `url('${avatarUrl}'`,
        width,
        height,
    };

    return (
        <div style={styles} className={`avatar ${getClassForSize(size)} ${className}`} />
    );
};

export default Avatar;
