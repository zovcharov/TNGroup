import React from 'react'
import PropTypes from 'prop-types'
import './PersonItem.scss'

const PersonItem = (props) => {
    const {
        name = 'Иванов Иван Иванович',
        refUrlAvatar = 'https://www.rusdialog.ru/images/news/news_view/5107a4952d8cf8344551a6c9f4f80d0b.jpg'
    } = props
    return (
        <div className='person-item'>
            <span className='person-item__avatar' style={{
                backgroundImage: `url(${refUrlAvatar})`
            }} />
            <a className='person-item__name'>{name}</a>
        </div>
    )
}

PersonItem.propTypes = {
    name: PropTypes.string,
    refUrlAvatar: PropTypes.string
}

export default PersonItem