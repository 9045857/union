import { createContext } from 'react';
import React, { useReducer } from 'react';
import { authReducer } from './authReducer';

export const AuthContext = createContext();

const initialState = {
    isLoggedIn: true, //false
    userProfileSectionSelected: '', //выбранный раздел в профиле пользователя
    // Другие свойства, которые могут понадобиться
    userProfile: {
        photo: '',
        firstName: 'John',
        lastName: 'Doe',
        country: 'USA',
        status: 'Buyer',
        companyName: 'ABC Inc.',
        phone: '+123456789',
        email: 'john.doe@example.com',
        password: '11111111',
    },
};

export const AuthProvider = ({ children }) => {
    const [value, dispatch] = useReducer(authReducer, initialState);

    value.logIn = () => {
        dispatch({ type: 'LOGIN' });
    };

    value.logOut = () => {
        dispatch({ type: 'LOGOUT' });
    };

    value.selectUserProfileSection = (section) => {
        dispatch({
            type: 'SET_SELECTED_USER_PROFILE_SECTION',
            payload: section,
        });
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
