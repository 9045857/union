import React from 'react';
import { LoginForm } from './../../components/loginForm/LoginForm'; // Укажите правильный путь к компоненту LoginForm

export const LoginPage = () => {
    return (
        <div className='login-page'>
            {/* <h1>Welcome to My Website</h1>
            <p>Please log in to continue.</p> */}
            <LoginForm />
        </div>
    );
};
