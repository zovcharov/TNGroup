import React from 'react'
import PropTypes from 'prop-types'
import './ProfileInfo.scss'
import Container from "../Container/Container";
import {InfoBlock} from "../ProjectMainInfo/ProjectPassport";

const ProfileInfo = (props) => {
    const {
        info = {},
    } = props
    const {
        UserName = 'Sample sample',
        Email = 'sample@sample.com',
    } = info
    console.log(info)
    return (
        <div className='profile-page'>
            <div className='profile-info'>
                <Container label='Профиль'>
                    <div className='profile-info__container'>
                        <div className='profile-info__avatar' />
                        <div className='profile-info__infoarea'>
                            <div className='profile-info__row'>
                                <InfoBlock label='Имя:'>{UserName}</InfoBlock>
                                <InfoBlock label='Контактный телефон:'>Иванов Иван Иванович</InfoBlock>
                            </div>
                            <div className='profile-info__row'>
                                <InfoBlock label='Должность:'>Иванов Иван Иванович</InfoBlock>
                                <InfoBlock label='Электронная почта:'>{Email}</InfoBlock>
                            </div>
                            <div className='profile-info__row'>
                                <InfoBlock label='Отдел:'>Иванов Иван Иванович</InfoBlock>
                                <InfoBlock label='WhatsApp:'>Иванов Иван Иванович</InfoBlock>
                            </div>
                            <div className='profile-info__row'>
                                <InfoBlock label='Дата рождения:'>Иванов Иван Иванович</InfoBlock>
                                <InfoBlock label='Соц. Сети:'>Иванов Иван Иванович</InfoBlock>
                            </div>
                            <div className='profile-info__row'>
                                <InfoBlock label='Пол:'>Иванов Иван Иванович</InfoBlock>
                                <InfoBlock label='Skype:'>Иванов Иван Иванович</InfoBlock>
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