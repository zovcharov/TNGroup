import React from 'react'
import PropTypes from 'prop-types'

const Table = (props) => {
  const {
    columns = [],
    items = []
  } = props
  return (
    <div className='table'>
      <div className='table__header'>
        {columns.map((column, index) => {
          return (
            <div
              className='table__header-cell'
              key={index}>
              {column.label}
            </div>
          )
        })}
      </div>
      <div className='table__body'>
        {items.map((item, index) => {
          return (
            <div
              className='table__row'
              key={index}>
                {columns.map(column => {
                  return (
                    <div className='table__cell'>
                      {item[column.name]}
                    </div>
                  )
                })}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Table