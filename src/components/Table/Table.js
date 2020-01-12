/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import './Table.scss';

import { formatDateToString } from '../../helpers/helpers';

const Table = (props) => {
    const {
        columns = [],
        items = [],
        reload,
    } = props;

    return (
        <div className="table">
            <div className="table__controls">
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label,react/button-has-type */}
                {reload && <button className="table__refresh" onClick={reload} />}
            </div>
            <TableHead columns={columns} />
            <TableBody items={items} columns={columns} />
        </div>
    );
};

const TableCell = (props) => {
    const {
        children,
        width,
    } = props;
    return (
        <div
            className="table__cell"
            style={{ width }}
        >
            {children}
        </div>
    );
};

const getValidCellValue = (cellData) => (cellData instanceof Date ? formatDateToString(cellData) : cellData);

const TableBody = (props) => {
    const {
        items = [],
        columns = [],
    } = props;

    if (!items.length) {
        return (
            <div className="table__row table__row_empty">
                <TableCell width="100%">Пусто</TableCell>
            </div>
        );
    }

    return (
        <div className="table__body">
            {
                items.map((item, index) => (
                    <div
                        className="table__row"
                        key={index}
                    >
                        {
                            columns.map(({ name, width = 'auto', cell }, index) => {
                                if (!item[name] && typeof item[name] !== 'boolean' && name !== 'FAKE_CELL') {
                                    return null;
                                }

                                if (name === 'FAKE_CELL') {
                                    return (
                                        <TableCell key={index} width={width}>
                                            {
                                                cell ? cell() : ''
                                            }
                                        </TableCell>
                                    )
                                }

                                const validCellValue = getValidCellValue(item[name]);
                                return (
                                    <TableCell key={index} width={width}>
                                        {
                                            cell ? cell(validCellValue) : validCellValue
                                        }
                                    </TableCell>
                                );
                            })
                        }
                    </div>
                ))
            }
        </div>
    );
};

const TableHead = (props) => {
    const {
        columns = [],
    } = props;

    return (
        <div className="table__header">
            <div className="table__row">
                {
                    columns.map(({ label = '', width = 'auto' }, index) => (
                        <div
                            className="table__header-cell"
                            key={index}
                            style={{
                                width,
                            }}
                        >
                            {label}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

Table.propTypes = {
    columns: PropTypes.array.isRequired,
    items: PropTypes.array,
};

Table.defaultProps = {
    items: [],
}

export default Table;
