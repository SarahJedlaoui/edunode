import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <div className="toggle-switch-container">
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={handleToggle}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
