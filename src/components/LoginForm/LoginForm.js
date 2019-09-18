import React from 'react';

import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className="login-form">
            <div className="login-form__item login-form__login">
                <label htmlFor="login" className="login-form__label">
                    Логин:
                </label>
                <input type="text" id="login" className="login-form__input" />
            </div>
            <div className="login-form__item login-form__pass">
                <label htmlFor="password" className="login-form__label">
                    Пароль:
                </label>
                <input type="password" id="password" className="login-form__input" />
            </div>
            <div className="login-form__item login-form__forget-pass">
                <a href="#" className="forget-pass__link">Забыли пароль?</a>
            </div>
            <button className="login-form__item login-form__submit">
                Войти в систему
            </button>
        </div>
    )
};

export default LoginForm;
