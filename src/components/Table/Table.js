import React from 'react'
import PropTypes from 'prop-types'
import './Table.scss'

import { formatDateToString } from './../../helpers/helpers';

const Table = (props) => {
    const {
        columns = [],
        items = []
    } = props

    return (
        <div className='table'>
            <TableHead columns={columns} />
            <TableBody items={items} columns={columns} />
        </div>
    )
}

const TableCell = (props) => {
    const {
        children,
        width
    } = props
    return (
        <div
            className='table__cell'
            style={{width: width}}>
            {children}
        </div>
    )
};

const getValidCellValue = (cellData) => cellData instanceof Date ? formatDateToString(cellData) : cellData;

const TableBody = (props) => {
    const {
        items = [],
        columns = []
    } = props;

    return (
        <div className='table__body'>
            {
                items.map((item, index) => {
                    return (
                        <div
                            className='table__row'
                            key={index}
                        >
                            {
                                columns.map(({name, width = 'auto', cell}, index) => {
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
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

const TableHead = (props) => {
    const {
        columns = []
    } = props;

    return (
        <div className='table__header'>
            <div className='table__row'>
                {
                    columns.map(({label = '', width= 'auto' }, index) => {
                        return (
                            <div
                                className='table__header-cell'
                                key={index}
                                style={{
                                    width: width
                                }}>
                                {label}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

Table.propTypes = {
    columns: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired
}

export default Table
