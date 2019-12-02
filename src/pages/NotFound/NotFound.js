import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => (
    <div className="not-found-page">
        <div className="not-found-page__title">
            <div className="not-found-page__title--bold">404</div>
            ошибка
        </div>
        <div className="not-found-page__sub-title">
            К сожалению данной страницы не существует
        </div>
        <div className="not-found-page__link">
            <Link to="/">Вернуться на главную</Link>
        </div>
    </div>
);

export default NotFound;
