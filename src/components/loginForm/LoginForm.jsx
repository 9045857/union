import React, { useState, useContext } from 'react';
import { AuthContext } from '../../hooks/authorization/AuthContext';
import { Link } from 'react-router-dom';
import './loginForm.css';

export const LoginForm = () => {
    const [isLoginInput, setIsLoginInput] = useState(false);
    const [isPasswordInput, setIsPasswordInput] = useState(false);
    const [isVisibilityPassword, setisVisibilityPassword] = useState(false);

    const { logIn } = useContext(AuthContext);

    const handleLogin = () => {
        // Обработка входа пользователя
        logIn();
    };

    return (
        <div className='login-form'>
            <h5 className='login-title'>Вход</h5>
            <form>
                <div className='form-group input-field login-input-field'>
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
                <div className='form-group input-field password-input-field'>
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
                <label>
                    <input type='checkbox' />
                    <span className='remember-user-holder'> Запомнить</span>
                </label>
                <div className='forgot-password'>
                    <a
                        href='/reset-password'
                        className='forgot-password-link'
                    >
                        Забыли пароль?
                    </a>
                </div>
                <Link to='/'>
                    <button
                        type='button'
                        onClick={handleLogin}
                        className='login-button cu-btn-blue '
                    >
                        Войти
                    </button>
                </Link>
            </form>
            <div className='register-link card-action'>
                <p>
                    Новый пользователь?{' '}
                    <Link
                        to='/join'
                        className='register-link-link'
                    >
                        Зарегистрируйтесь здесь
                    </Link>
                </p>
            </div>
        </div>
    );
};
