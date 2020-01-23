import React from 'react';
import propTypes from 'prop-types';

import './File.scss';

const File = (props) => {
    const onClickRemove = () => {
        props.onRemoveFile(props.Id);
    };

    return (
        <span className="file">
            <a href="" className="file__link">{props.Name}</a>
            <span className="file__cross" onClick={onClickRemove} />
        </span>
    );
};

File.propTypes = {
    onRemoveFile: propTypes.func.isRequired,
    Id: propTypes.number.isRequired,
    Name: propTypes.string.isRequired,
};

export default File;
