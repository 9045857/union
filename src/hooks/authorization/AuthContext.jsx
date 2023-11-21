import { createContext } from 'react';
import React, { useReducer } from 'react';
import { authReducer } from './authReducer';

export const AuthContext = createContext();

const initialState = {
    isLoggedIn: true,//false
    // Другие свойства, которые могут понадобиться
};

export const AuthProvider = ({ children }) => {
    const [value, dispatch] = useReducer(authReducer, initialState);

    value.logIn = () => {
        dispatch({ type: 'LOGIN' });
    };

    value.logOut = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
