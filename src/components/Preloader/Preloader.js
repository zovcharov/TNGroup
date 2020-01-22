/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React from 'react';

import './Preloader.scss';

const getPreloaderClassName = (fullScreen, theme) => {
    let className = 'preloader';

    if (fullScreen) {
        className += ' preloader_fullscreen_yes';
    }

    if (theme) {
        className += ` preloader_theme_${theme}`;
    }

    return className;
};

export default ({ fullScreen, theme }) => (
    <div className={getPreloaderClassName(fullScreen, theme)} />
);
