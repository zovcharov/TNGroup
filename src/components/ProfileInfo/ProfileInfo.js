import React from 'react'
import PropTypes from 'prop-types'
import './ProfileInfo.scss'
import Container from "../Container/Container";
import {InfoBlock} from "../ProjectMainInfo/ProjectPassport";
import {formatDateToString} from "../../helpers/helpers";

const ProfileInfo = (props) => {
    const {
        info = {},
    } = props
    const {
        Name,
        Email,
        RefUrlAvatar = 'https://www.rusdialog.ru/images/news/news_view/5107a4952d8cf8344551a6c9f4f80d0b.jpg',
        Phone,
        Position,
        Department,
        IsWhatsApp,
        DateBirth,
        SocialNet,
        Sex,
        Skype
    } = info;
    return (
        <div className='profile-page'>
            <div className='profile-info'>
                <Container label='Профиль'>
                    <div className='profile-info__container'>
                        <div className='profile-info__avatar'>
                            <img src={RefUrlAvatar}/>
                        </div>
                        <div className='profile-info__infoarea'>
                            <div className='profile-info__row'>
                                <InfoBlock label='Имя:'>{Name}</InfoBlock>
                                <InfoBlock label='Контактный телефон:'>{Phone}</InfoBlock>
                            </div>
                            <div className='profile-info__row'>
                                <InfoBlock label='Должность:'>{Position}</InfoBlock>
                                <InfoBlock label='Электронная почта:'>{Email}</InfoBlock>
                            </div>
                            <div className='profile-info__row'>
                                <InfoBlock label='Отдел:'>{Department}</InfoBlock>
                                <InfoBlock label='WhatsApp:'>{IsWhatsApp ? 'Да' : 'Нет'}</InfoBlock>
                            </div>
                            <div className='profile-info__row'>
                                <InfoBlock label='Дата рождения:'>{formatDateToString(DateBirth)}</InfoBlock>
                                <InfoBlock label='Соц. Сети:'>{SocialNet}</InfoBlock>
                            </div>
                            <div className='profile-info__row'>
                                <InfoBlock label='Пол:'>{Sex ? 'Мужчина' : 'Женщина'}</InfoBlock>
                                <InfoBlock label='Skype:'>{Skype}</InfoBlock>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

ProfileInfo.propTypes = {
    info: PropTypes.object,
}

export default ProfileInfo
