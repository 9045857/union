import React, { useState, useEffect } from 'react';
import { createCaptcha } from 'text-drawing';

import './captcha.css';

export const Captcha = () => {
    const [captchaText, setCaptchaText] = useState('');
    const [userInput, setUserInput] = useState('');
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);

    useEffect(() => {
        generateCaptcha();
    }, []); // Вызываем только при монтировании

    const generateCaptcha = () => {
        const { text, dataURL } = createCaptcha();
        setCaptchaText(text);
        setIsCaptchaValid(false);
    };

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Проверяем введенный пользователем текст
        setIsCaptchaValid(
            userInput.toLowerCase() === captchaText.toLowerCase()
        );
    };

    return (
        <div>
            <img
                src={captchaText && `data:image/png;base64,${captchaText}`}
                alt='captcha'
            />
            <form onSubmit={handleSubmit}>
                <label htmlFor='captchaInput'>Введите текст с картинки:</label>
                <input
                    type='text'
                    id='captchaInput'
                    value={userInput}
                    onChange={handleInputChange}
                />
                <button type='submit'>Подтвердить</button>
            </form>
            {isCaptchaValid && <p>Проверка успешна!</p>}
        </div>
    );
};
