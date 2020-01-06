/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-is-valid,react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */

import React, { useState } from 'react';
import Preloader from '../Preloader/Preloader';

import { Login } from '../../Api/LoginApi';

import './LoginForm.css';

const LoginForm = () => {
    const [login, changeLogin] = useState('');
    const [password, changePassword] = useState('');
    const [isLoading, changeLoading] = useState(false);

    const handleChangeLogin = (event) => changeLogin(event.target.value);
    const handleChangePassword = (event) => changePassword(event.target.value);

    // eslint-disable-next-line consistent-return
    const onLogin = () => {
        if (isLoading) {
            return null;
        }

        changeLoading(true);

        Login(login, password)
            .then(() => {
                window.location.hash = '#/';
            });
    };

    const onPressEnter = (event) => {
        if (event.key === 'Enter') {
            onLogin();
        }
    };

    return (
        <div className="login-form">
            <div className="login-form__item login-form__login">
                <label htmlFor="login" className="login-form__label">
                    Логин:
                </label>
                <input
                    value={login}
                    onChange={handleChangeLogin}
                    type="text"
                    id="login"
                    onKeyPress={onPressEnter}
                    className="login-form__input"
                />
            </div>
            <div className="login-form__item login-form__pass">
                <label htmlFor="password" className="login-form__label">
                    Пароль:
                </label>
                <input
                    value={password}
                    onChange={handleChangePassword}
                    type="password"
                    id="password"
                    onKeyPress={onPressEnter}
                    className="login-form__input"
                />
            </div>
            <div className="login-form__item login-form__forget-pass">
                <a href="#" className="forget-pass__link">Забыли пароль?</a>
            </div>
            <button onClick={onLogin} className="login-form__item login-form__submit">
                {
                    isLoading ? (
                        <Preloader />
                    ) : (
                        <span>Войти в систему</span>
                    )
                }
            </button>
        </div>
    );
};

export default LoginForm;
