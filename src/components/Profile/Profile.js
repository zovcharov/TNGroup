import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../Avatar/Avatar'
import './Profile.scss'
import { Dropdown, DropdownItem } from '../Dropdown/Dropdown'

const Profile = (props) => {
  const {
    avatar = 'https://www.rusdialog.ru/images/news/news_view/5107a4952d8cf8344551a6c9f4f80d0b.jpg',
    name = 'Иванов Иван Иванович'
  } = props

  const Logout = () => {
      localStorage.removeItem('UserId');
      localStorage.removeItem('UserRoles');
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_id');
      window.location.pathname = '/login';
  };

  return (
    <div className='profile'>
      <Avatar width='52px' height='52px' avatarUrl={avatar} />
      <Dropdown
        label={name}
        labelClass='profile__name'
        menuClass='profile__menu'
        buttonClass='profile__button'>
          <DropdownItem>qweqwe</DropdownItem>
          <DropdownItem>qweqwe</DropdownItem>
          <DropdownItem onClick={Logout}>Выйти</DropdownItem>
        </Dropdown>
    </div>
  )
}

export default Profile
