import React from 'react'
import './PersonItem.scss'

const PersonItem = (props) => {
    const {
        Name = 'Иванов Иван Иванович',
        RefUrlAvatar = 'https://www.rusdialog.ru/images/news/news_view/5107a4952d8cf8344551a6c9f4f80d0b.jpg'
    } = props
    return (
        <div className='person-item'>
            <span className='person-item__avatar' style={{
                backgroundImage: `url(${RefUrlAvatar})`
            }} />
            <a className='person-item__name'>{Name}</a>
        </div>
    )
}

export default PersonItem