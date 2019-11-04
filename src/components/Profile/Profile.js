import React from 'react'
import { connect } from 'react-redux';
import Avatar from '../Avatar/Avatar'
import './Profile.scss'
import { Dropdown, DropdownItem } from '../Dropdown/Dropdown'
import {Link} from 'react-router-dom';

import {
  resetState
} from '../../redux/actions';

const Profile = (props) => {
  const {
    avatar = 'https://www.rusdialog.ru/images/news/news_view/5107a4952d8cf8344551a6c9f4f80d0b.jpg',
    name = 'Иванов Иван Иванович',
    resetState
  } = props;

  const Logout = () => {
      localStorage.removeItem('UserId');
      localStorage.removeItem('UserRoles');
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_id');
      resetState();
      window.location.hash = '#/login';
  };

  return (
    <div className='profile'>
      <Avatar width='52px' height='52px' avatarUrl={avatar} />
      <Dropdown
        label={name}
        labelClass='profile__name'
        buttonClass='profile__button'>
          <DropdownItem><Link to="/profile">Профиль</Link></DropdownItem>
          <DropdownItem onClick={Logout}>Выйти</DropdownItem>
        </Dropdown>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  resetState: () => dispatch(resetState()),
});

export default connect(null, mapDispatchToProps)(Profile)
