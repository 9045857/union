import React, { useState } from 'react';
import './userProfile.css'; // Создайте файл стилей UserProfile.css

import userFacePhoto from '../../images/user/user-face.jpeg';

export const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);

    const [userData, setUserData] = useState({
        photo: userFacePhoto,
        firstName: 'John',
        lastName: 'Doe',
        country: 'USA',
        status: 'Buyer',
        companyName: 'ABC Inc.',
        phone: '+123456789',
        email: 'john.doe@example.com',
        password: '11111111',
    });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        // Здесь вы можете добавить логику для сохранения данных (например, отправка на сервер).
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className='user-profile'>
            <div className='user-info'>
                <img
                    className='user-photo'
                    src={userData.photo}
                    alt='User'
                />
                <div className='user-details'>
                    <label className='user-info-label'>
                        Имя:
                        <input
                            className='user-info-input'
                            type='text'
                            name='firstName'
                            value={userData.firstName}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                        />
                    </label>
                    <label className='user-info-label'>
                        Фамилия:
                        <input
                            className='user-info-input'
                            type='text'
                            name='lastName'
                            value={userData.lastName}
                            onChange={handleInputChange}
                            disabled={!isEditing}
                        />
                    </label>
                </div>
            </div>

            <label className='user-info-label'>
                Страна:
                <input
                    className='user-info-input'
                    type='text'
                    name='country'
                    value={userData.country}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                />
            </label>

            <label className='user-info-label'>
                Статус:
                <select
                    className='user-info-input'
                    name='status'
                    value={userData.status}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                >
                    <option value='Buyer'>Покупатель</option>
                    <option value='Supplier'>Поставщик</option>
                    <option value='Both'>Оба</option>
                </select>
            </label>

            <label className='user-info-label'>
                Название Компании:
                <input
                    className='user-info-input'
                    type='text'
                    name='companyName'
                    value={userData.companyName}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                />
            </label>

            <label className='user-info-label'>
                Телефон:
                <input
                    className='user-info-input'
                    type='tel'
                    name='phone'
                    value={userData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                />
            </label>
            <label className='user-info-label'>
                Электронная почта:
                <input
                    className='user-info-input'
                    type='email'
                    name='email'
                    value={userData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                />
            </label>

            <label className='user-info-label'>
                Пароль:
                <input
                    className='user-info-input'
                    type='password'
                    name='password'
                    value={userData.password}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                />
            </label>

            {isEditing ? (
                <button
                    className='save-button'
                    onClick={handleSaveClick}
                >
                    Сохранить
                </button>
            ) : (
                <button
                    className='edit-button'
                    onClick={handleEditClick}
                >
                    Редактировать
                </button>
            )}
        </div>
    );
};
