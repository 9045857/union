import React, { useState } from 'react';
import './loginForm.css';

export const LoginForm = () => {
    const [isLoginInput, setIsLoginInput] = useState(false);
    const [isPasswordInput, setIsPasswordInput] = useState(false);
    const [isVisibilityPassword, setisVisibilityPassword] = useState(false);

    const handleLogin = () => {
        // Обработка входа пользователя
    };

    return (
        <div className='login-form'>
            <h5 className='login-title'>Вход</h5>
            <form>
                <div className='form-group input-field col s6'>
                    <i
                        className={`material-icons prefix ${
                            isLoginInput ? 'used-input' : ''
                        }`}
                    >
                        perm_identity
                    </i>
                    <input
                        type='text'
                        id='loginInput'
                        className='login-input'
                        placeholder=' Логин (е-mail или id)'
                        onSelect={() => setIsLoginInput(true)}
                        onBlur={() => setIsLoginInput(false)}
                    />
                </div>
                <div className='form-group input-field'>
                    <i
                        className={`material-icons prefix ${
                            isPasswordInput ? 'used-input' : ''
                        }`}
                    >
                        vpn_key
                    </i>
                    <input
                        type={isVisibilityPassword ? `text` : `password`}
                        id='passwordInput'
                        className='password-input validate'
                        placeholder='Пароль'
                        onSelect={() => setIsPasswordInput(true)}
                        onBlur={() => setIsPasswordInput(false)}
                    />
                    <i
                        className={`material-icons visibility-icon ${
                            isVisibilityPassword ? 'hidden-visibility-icon' : ''
                        }`}
                        onClick={() => setisVisibilityPassword(true)}
                    >
                        visibility
                    </i>
                    <i
                        className={`material-icons visibility-icon ${
                            !isVisibilityPassword
                                ? 'hidden-visibility-icon'
                                : ''
                        }`}
                        onClick={() => setisVisibilityPassword(false)}
                    >
                        visibility_off
                    </i>
                </div>
                <div className='forgot-password'>
                    <a
                        href='/reset-password'
                        className='forgot-password-link blue-text text-darken-2'
                    >
                        Забыли пароль?
                    </a>
                </div>
                <button
                    type='button'
                    onClick={handleLogin}
                    className='login-button btn'
                >
                    Войти
                </button>
            </form>
            <div className='register-link card-action'>
                <p>
                    Новый пользователь?{' '}
                    <a
                        href='/register'
                        className='register-link blue-text text-darken-2'
                    >
                        Зарегистрируйтесь здесь
                    </a>
                </p>
            </div>
        </div>
    );
};
