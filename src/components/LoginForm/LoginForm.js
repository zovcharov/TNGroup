import React, { useState } from 'react';
import ApiProvider from './../../ApiProvider/ApiProvider';
import Preloader from './../Preloader/Preloader';

import { Login } from './../../Api/LoginApi';

import './LoginForm.css';

const LoginForm = () => {
    const [login, changeLogin] = useState('');
    const [password, changePassword] = useState('');
    const [isLoading, changeLoading] = useState(false);

    const handleChangeLogin = event => changeLogin(event.target.value);
    const handleChangePassword = event => changePassword(event.target.value);

    const onLogin = () => {
        if (isLoading) {
            return null;
        }

        changeLoading(true);

        Login(login, password)
            .then(() => {
                window.location.pathname = '/';
            });
    };

    return (
        <div className="login-form">
            <div className="login-form__item login-form__login">
                <label htmlFor="login" className="login-form__label">
                    Логин:
                </label>
                <input value={login} onChange={handleChangeLogin} type="text" id="login" className="login-form__input" />
            </div>
            <div className="login-form__item login-form__pass">
                <label htmlFor="password" className="login-form__label">
                    Пароль:
                </label>
                <input value={password} onChange={handleChangePassword} type="password" id="password" className="login-form__input" />
            </div>
            <div className="login-form__item login-form__forget-pass">
                <a href="#" className="forget-pass__link">Забыли пароль?</a>
            </div>
            <button  onClick={onLogin} className="login-form__item login-form__submit">
                {
                    isLoading ? (
                        <Preloader />
                    ) : (
                        <span>Войти в систему</span>
                    )
                }
            </button>
        </div>
    )
};

export default LoginForm;
