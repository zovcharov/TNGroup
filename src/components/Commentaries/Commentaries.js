import React from 'react'
import PropTypes from 'prop-types'
import PersonItem from "../PersonItem/PersonItem";

import './Commentaries.scss'

const Commentaries = (props) => {
    return (
        <div className='commentaries'>
            <div className='comments'>
                <p>Комментарии:</p>
                <div className='comments__list'>
                    <div className='comment'>
                        <div className='comment__author'>
                            <PersonItem />
                        </div>
                        <div className='comment__message'></div>
                    </div>
                </div>
            </div>
            <div className='message'>
                <p>Комментарии:</p>
                <div className='message-box'>
                    <textarea />
                    <div className='message-box__bottom'>

                    </div>
                </div>
            </div>
        </div>
    )
}

Commentaries.propTypes = {

}

export default Commentaries