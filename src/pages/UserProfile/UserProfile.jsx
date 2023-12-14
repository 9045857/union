import React, { useState } from 'react';
import { AuthContext } from '../../hooks/authorization/AuthContext';
import { useContext } from 'react';

import { userBuyerSections } from '../../constants/data';
import './userProfile.css';

import { UserPersonalData } from './userProfileComponents/UserPersonalData';
import { UserMainComponent } from './userProfileComponents/UserMainComponent';

import userFacePhoto from '../../images/user/user-face.jpeg';

export const UserProfile = () => {
    const [isEditing, setIsEditing] = useState(false);
    // const [section, setSection] = useState('');

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

    const {
        userProfileSectionSelected,
        selectUserProfileSection,
        // isLoggedIn,
        // logIn,
        // logOut,
    } = useContext(AuthContext);

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

            <div className='up-user-interface-sections'>
                {userBuyerSections.map((s, index) => (
                    <p
                        key={index}
                        id={s.name}
                        className={`up-section ${
                            s.name === userProfileSectionSelected
                                ? 'up-section-selected'
                                : ''
                        }`}
                        onClick={() => selectUserProfileSection(s.name)}
                    >
                        {s.title}
                    </p>
                ))}
            </div>

            {userProfileSectionSelected === 'personal-data' ? (
                <UserPersonalData
                    userData={userData}
                    isEditing={isEditing}
                    handleInputChange={handleInputChange}
                    handleSaveClick={handleSaveClick}
                    handleEditClick={handleEditClick}
                />
            ) : (
                <UserMainComponent componentType={userProfileSectionSelected} />
            )}
        </div>
    );
};
