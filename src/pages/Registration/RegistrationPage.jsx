import React, { useState } from 'react';
import './registration.css';

export const RegistrationPage = () => {
    const [countries, setCountries] = useState([
        'Россия',
        'Казахстан',
        'Амэрика',
    ]);
    return (
        <div className='registration-container'>
            <h5 className='registration-container-title'>
                Присоединяйся к <br />
                Chemical Union
            </h5>

            <div className='warning'>
                <i className='material-icons'>error</i>
                Пожалуйста, используйте только английский алфавит.
            </div>
            <form className='registration-form'>
                <label htmlFor='country'>Страна/Регион:</label>
                <select
                    id='country'
                    className='form-input input-field col s12'
                >
                    {countries.map((country) => (
                        <option
                            key={country}
                            value={country}
                        >
                            {country}
                        </option>
                    ))}

                    {/* Добавьте другие варианты стран/регионов по вашему выбору */}
                </select>
                <label htmlFor='role'>Ваш статус:</label>
                <select
                    id='role'
                    className='form-input'
                >
                    <option value='supplier'>Поставщик</option>
                    <option value='buyer'>Покупатель</option>
                    <option value='both'>Оба</option>
                </select>
                <label>ФИО:</label>
                <input
                    type='text'
                    id='firstName'
                    className='form-input'
                />
                <label htmlFor='firstName'>Имя</label>
                <input
                    type='text'
                    id='lastName'
                    className='form-input'
                />
                <label htmlFor='lastName'>Фамилия</label>
                <input
                    type='text'
                    id='companyName'
                    className='form-input'
                />
                <label htmlFor='companyName'>Название Компании</label>
                <input
                    type='text'
                    id='phone'
                    className='form-input'
                />
                <label htmlFor='phone'>Телефон</label>
                <input
                    type='email'
                    id='email'
                    className='form-input'
                />
                <label htmlFor='email'>Электронная почта</label>
                {/* 
                <div className='input-field inline'>
                    <input
                        id='email_inline'
                        type='email'
                        className='validate'
                    />
                    <label htmlFor='email_inline'>Email</label>
                    <span
                        className='helper-text'
                        data-error='wrong'
                        data-success='right'
                    >
                        Helper text
                    </span>
                </div> */}
                <label htmlFor='password'>Создадим пароль:</label>
                <input
                    type='password'
                    id='password'
                    className='form-input'
                />
                <label htmlFor='password'>
                    Введите секретный код и запомните его
                </label>
                <input
                    type='password'
                    id='password-confirmation'
                    className='form-input'
                />
                <label htmlFor='password'>Введите пароль еще раз</label>

                {/* <input
                    type='text'
                    id='captcha'
                    className='form-input'
                />
                <label htmlFor='captcha'>Введите код</label> */}
                {/* <Captcha /> */}

                <button
                    type='submit'
                    className='submit-button'
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
