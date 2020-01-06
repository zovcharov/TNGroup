/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */

import React from 'react';

import './Preloader.scss';

export default ({ fullScreen }) => (
    <div className={`preloader ${fullScreen ? 'preloader_fullscreen_yes' : ''}`} />
);
