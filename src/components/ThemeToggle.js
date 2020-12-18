import React, {useState} from 'react';
import '../styles/components/ThemeToggle.css';

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");

    const handleSwitchTheme = () => {
        let element = document.body;
        element.classList.toggle("day-mode");
        if(theme === "light")
            setTheme("dark");
        else setTheme("light");
    }

    return (
        <button className="toggle-button" onClick={handleSwitchTheme}>Switch to {theme} mode</button>
    )
}

export default ThemeToggle;