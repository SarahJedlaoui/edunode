import React, { useState } from 'react';
import './light-theme.css';
import './dark-theme.css';

function ThemeSwitcher() {
    const [theme, setTheme] = useState('light');

    const handleThemeChange = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.documentElement.className = 'dark-theme';
        } else {
            setTheme('light');
            document.documentElement.className = 'light-theme';
        }
    }

    return (
        <div>
            <button onClick={handleThemeChange}>Switch Theme</button>
        </div>
    );
}

export default ThemeSwitcher;
