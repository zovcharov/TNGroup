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
                                if (!item[name] && typeof item[name] !== 'boolean') {
                                    return null;
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
    items: PropTypes.array.isRequired,
};

export default Table;
