import React from 'react';

import './Avatar.scss';

const AVAILABLE_SIZES = ['s', 'm', 'l'];
const DEFAULT_SIZE = 'm';

const getClassForSize = (size) => {
    return AVAILABLE_SIZES.indexOf(size) !== -1 ? `avatar_size_${size}` : `avatar_size_${DEFAULT_SIZE}`
};

const Avatar = (props) => {
    const {
        size,
        avatarUrl,
    } = props;

    const styles = {
        backgroundImage: `url('${avatarUrl}'`
    }

    return (
        <div style={styles} className={`avatar ${getClassForSize(size)}`}>

        </div>
    )
};

export default Avatar;
