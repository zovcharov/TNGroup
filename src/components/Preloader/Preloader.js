import React from 'react';

import './Preloader.scss';

export default ({fullScreen}) => (
    <div className={`preloader ${fullScreen ? 'preloader_fullscreen_yes' : ''}`}></div>
);
