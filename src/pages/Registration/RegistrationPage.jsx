import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../hooks/authorization/AuthContext';
import './registration.css';

import {countries}from '../../constants/data'

export const RegistrationPage = () => {
    // const [countries, setCountries] = useState([
    //     'Россия',
    //     'Белорусия',
    //     'Казахстан',
    //     'Киргизия',
    // ]);
    const { logIn } = useContext(AuthContext);
    const history = useHistory();

    // Состояния для хранения значений полей формы
    const [formValues, setFormValues] = useState({
        country: '',
        role: 'buyer',
        firstName: '',
        lastName: '',
        companyName: '',
        phone: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isConsentForPersonalDataProcessing: false,
        isConsentForNewsAndOffers: false,
    });

    const [focusedComponent, setFocusedComponent] = useState('');

    // const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (component) => {
        setFocusedComponent(component);
    };

    const handleBlur = () => {
        setFocusedComponent('');
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleRegister = async () => {
        const isVerified = await verifyUser(formValues);

        if (isVerified) {
            // Выполняем вход
            logIn();

            // Переход по маршруту '/' после успешной верификации
            history.push('/');
        } else {
            alert('Верификация не пройдена');

            // При неудачной верификации можно обновить только те поля, которые необходимо очистить

            setFormValues((prevValues) => ({
                ...prevValues,
                password: '',
                passwordConfirmation: '',
            }));
        }
    };

    // Пример функции для верификации пользователя (замените на свою логику)
    const verifyUser = async (user) => {
        const {
            firstName,
            lastName,
            companyName,
            phone,
            email,
            password,
            passwordConfirmation,
        } = user;

        console.log(password + '  ' + passwordConfirmation);
        // Валидация формата firstName
        // Валидация формата lastName
        // Валидация формата companyName

        // Валидация формата email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Некорректный формат email');
            return false;
        }

        // Валидация телефона
        const phoneRegex = /^\d{11}$/;
        if (!phoneRegex.test(phone)) {
            alert('Некорректный формат телефона');
            return false;
        }

        // Валидация совпадения паролей
        if (password !== passwordConfirmation) {
            alert('Пароли не совпадают');
            return false;
        }
        // ... ваша логика проверки
        // В этом примере просто сравниваем пароль и его подтверждение
        return true;
    };

    return (
        <div className='registration-container'>
            <h5 className='registration-container-title'>
                Присоединяйся к <br />
                Chemical Union
            </h5>

            <div className='warning'>
                <i className='material-icons'>error</i>
                {/* Пожалуйста, используйте только английский алфавит. */}
                Данные будут сохранены в английской трансляции.
            </div>
            <form className='registration-form'>
                <label
                    htmlFor='country'
                    className={
                        focusedComponent === 'country'
                            ? 'label-focused-element'
                            : ''
                    }
                >
                    Страна/Регион:
                </label>
                <select
                    id='country'
                    className='form-input input-field col s12'
                    value={formValues.country}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('country')}
                    onBlur={handleBlur}
                >
                    {countries.map((country, index) => (
                        <option
                            key={index}
                            value={country}
                        >
                            {country}
                        </option>
                    ))}

                    {/* Добавьте другие варианты стран/регионов по вашему выбору */}
                </select>
                <label
                    htmlFor='role'
                    className={
                        focusedComponent === 'role'
                            ? 'label-focused-element'
                            : ''
                    }
                >
                    Ваш статус:
                </label>
                <select
                    id='role'
                    className='form-input input-field col s12'
                    value={formValues.role}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('role')}
                    onBlur={handleBlur}
                >
                    <option value='buyer'>Покупатель</option>
                    <option value='supplier'>Поставщик</option>
                    <option value='both'>Оба</option>
                </select>
                <label>ФИО:</label>
                <label
                    htmlFor='firstName'
                    className={
                        focusedComponent === 'firstName'
                            ? 'label-focused-element'
                            : ''
                    }
                >
                    Имя
                    <input
                        type='text'
                        id='firstName'
                        className='form-input'
                        value={formValues.firstName}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('firstName')}
                        onBlur={handleBlur}
                    />
                </label>
                <label
                    htmlFor='lastName'
                    className={
                        focusedComponent === 'lastName'
                            ? 'label-focused-element'
                            : ''
                    }
                >
                    Фамилия
                    <input
                        type='text'
                        id='lastName'
                        className='form-input'
                        value={formValues.lastName}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('lastName')}
                        onBlur={handleBlur}
                    />
                </label>
                <label
                    htmlFor='companyName'
                    className={
                        focusedComponent === 'companyName'
                            ? 'label-focused-element'
                            : ''
                    }
                >
                    Название Компании
                    <input
                        type='text'
                        id='companyName'
                        className='form-input'
                        value={formValues.companyName}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('companyName')}
                        onBlur={handleBlur}
                    />
                </label>
                <label
                    htmlFor='phone'
                    className={
                        focusedComponent === 'phone'
                            ? 'label-focused-element'
                            : ''
                    }
                >
                    Телефон
                    <input
                        type='text'
                        id='phone'
                        className='form-input'
                        value={formValues.phone}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('phone')}
                        onBlur={handleBlur}
                    />
                </label>
                <label
                    htmlFor='email'
                    className={
                        focusedComponent === 'email'
                            ? 'label-focused-element'
                            : ''
                    }
                >
                    Электронная почта
                    <input
                        type='email'
                        id='email'
                        className='form-input'
                        value={formValues.email}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                    />
                </label>
                <label>Создадим пароль:</label>
                <label
                    htmlFor='password'
                    className={
                        focusedComponent === 'password'
                            ? 'label-focused-element'
                            : ''
                    }
                >
                    Введите секретный код и запомните его
                </label>
                <input
                    type='password'
                    id='password'
                    className='form-input'
                    value={formValues.password}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('password')}
                    onBlur={handleBlur}
                />
                <label
                    htmlFor='password-confirmation'
                    className={
                        focusedComponent === 'password-confirmation'
                            ? 'label-focused-element'
                            : ''
                    }
                >
                    Введите пароль еще раз
                </label>
                <input
                    type='password'
                    id='passwordConfirmation'
                    className='form-input'
                    value={formValues.passwordConfirmation}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('password-confirmation')}
                    onBlur={handleBlur}
                />
                {/* <input
                    type='text'
                    id='captcha'
                    className='form-input'
                />
                <label htmlFor='captcha'>Введите код</label> */}
                {/* <Captcha /> */}
                <button
                    type='button'
                    className='submit-button'
                    onClick={handleRegister}
                >
                    Отправить
                </button>
                <div className='agreement'>
                    <p>
                        <label>
                            <input type='checkbox' />
                            <span>
                                Согласен на обработку персональных данных
                            </span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input type='checkbox' />
                            <span>
                                Хочу получать на e-mail новости и предложение от
                                Chemical Union
                            </span>
                        </label>
                    </p>
                </div>
            </form>
        </div>
    );
};
