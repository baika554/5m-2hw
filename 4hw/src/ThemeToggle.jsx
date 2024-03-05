import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ThemeToggle = () => {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme.theme);

    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
    };

    return (
        <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <p>Current Theme: {theme}</p>
        </div>
    );
};

export default ThemeToggle;