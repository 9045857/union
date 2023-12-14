// UserProfileForm.js
import React from 'react';

export const UserPersonalData = ({
    userData,
    isEditing,
    handleInputChange,
    handleSaveClick,
    handleEditClick,
}) => {
    return (
        <>
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
        </>
    );
};
