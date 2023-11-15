import React from 'react';
import './registration.css';

export const RegistrationPage = () => {
    return (
        <div className='registration-container'>
            <h5 className='registration-container-title'>
                Присоединяйся к <br />
                Chemical Union
            </h5>

            <div className='warning'>
                <i class='material-icons'>error</i>
                Пожалуйста, используйте только английский алфавит.
            </div>
            <form className='registration-form'>
                <label htmlFor='country'>Страна/Регион:</label>
                <select
                    id='country'
                    className='form-input'
                >
                    <option value='Kazakhstan'>Казахстан</option>
                    {/* Добавьте другие варианты стран/регионов по вашему выбору */}
                </select>

                <label htmlFor='role'>Я:</label>
                <select
                    id='role'
                    className='form-input'
                >
                    <option value='supplier'>Поставщик</option>
                    <option value='buyer'>Покупатель</option>
                    <option value='both'>Оба</option>
                </select>

                <label htmlFor='firstName'>ФИО: Имя</label>
                <input
                    type='text'
                    id='firstName'
                    className='form-input'
                />

                <label htmlFor='lastName'>Фамилия</label>
                <input
                    type='text'
                    id='lastName'
                    className='form-input'
                />

                <label htmlFor='companyName'>Название Компании:</label>
                <input
                    type='text'
                    id='companyName'
                    className='form-input'
                />

                <label htmlFor='phone'>Телефон:</label>
                <input
                    type='text'
                    id='phone'
                    className='form-input'
                />

                <label htmlFor='email'>Электронная почта:</label>
                <input
                    type='email'
                    id='email'
                    className='form-input'
                />

                <label htmlFor='password'>Создать Пароль:</label>
                <input
                    type='password'
                    id='password'
                    className='form-input'
                />

                <label htmlFor='captcha'>Введите код:</label>
                <input
                    type='text'
                    id='captcha'
                    className='form-input'
                />

                <button
                    type='submit'
                    className='submit-button'
                >
                    Отправить
                </button>

                <div className='agreement'>
                    <p>
                        При создании моего счета, я соглашаюсь:
                        <br />
                        <a href='/'>Быть частью сообщества Chemical Union</a>
                        <br />
                        Получать на e-mail новости и предложение от Chemical
                        Union
                    </p>
                </div>
            </form>
        </div>
    );
};
