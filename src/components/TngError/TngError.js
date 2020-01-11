/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React from 'react';
import propTypes from 'prop-types';

import './TngError.scss';

const TngError = ({ error }) => (
    <div className="tng-error">
        <h3 className="tng-error__title">Произошла ошибка попробуйте перезагрузить страницу</h3>
        {
            error && (
                <div className="tng-error__message">
                    {`${error.response.status}: ${error.response.data.Message}`}
                </div>
            )
        }
    </div>
);

TngError.propTypes = {
    error: propTypes.shape({}),
};

TngError.defaultProps = {
    error: undefined,
};

export default TngError;
