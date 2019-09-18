import React from 'react';

import LoginForm from './../../components/LoginForm/LoginForm';

import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className="login-page">
            <h3 className="login-page__title">Авторизация</h3>
            <LoginForm />
        </div>
    )
};

export default LoginPage;
