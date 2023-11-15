import React, { useState } from 'react';
import './registration.css';

export const RegistrationPage = () => {
    const [country, setCountry] = useState('Kazakhstan');
    const [role, setRole] = useState('Supplier');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreementChecked, setAgreementChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Здесь вы можете добавить логику отправки данных на сервер
        // Например, использовать fetch или библиотеку axios

        console.log('Submitted:', {
            country,
            role,
            firstName,
            lastName,
            companyName,
            phone,
            email,
            password,
            agreementChecked,
        });
    };

    return (
        <div className='registration-container'>
            <div className='warning'>
                Пожалуйста, используйте только английский алфавит.
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Страна/Регион:
                    <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                        <option value='Kazakhstan'>Казахстан</option>
                        {/* Добавьте другие варианты стран/регионов по мере необходимости */}
                    </select>
                </label>

                <label>
                    Я:
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value='Supplier'>Поставщик</option>
                        <option value='Buyer'>Покупатель</option>
                        <option value='Both'>Оба</option>
                    </select>
                </label>

                <label>
                    ФИО:
                    <input
                        type='text'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </label>

                <label>
                    Фамилия:
                    <input
                        type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </label>

                <label>
                    Название Компании:
                    <input
                        type='text'
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </label>

                <label>
                    Телефон:
                    <input
                        type='text'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>

                <label>
                    Электронная почта:
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label>
                    Создать Пароль:
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <label>
                    Введите код, изображенный на картине:
                    {/* Здесь вы можете добавить механизм капчи или другие меры безопасности */}
                    <input type='text' />
                </label>

                <div>
                    <input
                        type='checkbox'
                        id='agreement'
                        checked={agreementChecked}
                        onChange={() => setAgreementChecked(!agreementChecked)}
                    />
                    <label htmlFor='agreement'>
                        При создание моего счета, я соглашаюсь:
                        <br />
                        <a href='/membership-agreement'>
                            Alibaba.com соглашение о свободной Членство
                        </a>
                        <br />
                        Получать emails, связанные с членством и службой из
                        Alibaba.com
                    </label>
                </div>

                <button type='submit'>Отправить</button>
            </form>
        </div>
    );
};
