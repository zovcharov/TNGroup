import React from 'react';
import PersonItem from '../PersonItem/PersonItem';

import './Commentaries.scss';

const Commentaries = () => (
    <div className="commentaries">
        <div className="comments">
            <p className="comments__title">Комментарии:</p>
            <div className="comments__list">
                <div className="comment">
                    <div className="comment__author">
                        <PersonItem />
                    </div>
                    <div className="comment__info">
                        <div className="comment__time">09.08.2019. 16:52</div>
                        <div className="comment__message">
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                                Aliquid animi harum id mollitia possimus soluta tempore?
                                Cumque cupiditate deserunt expedita incidunt molestias nesciunt
                                nihil nisi, officia quas quod sit voluptatibus.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="message">
            <p className="comments__title">Написать сообщение:</p>
            <div className="message-box">
                <textarea className="message-box__input" />
                <div className="message-box__bottom" />
            </div>
        </div>
    </div>
);

Commentaries.propTypes = {

};

export default Commentaries;
