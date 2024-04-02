import React, { useState } from 'react';

export function ToggleSettings({ toggleClicked }) {
    const [activeButton, setActiveButton] = useState('Content');

    const handleButtonClick = (event) => {
        const clickedButton = event.target.textContent;
        if (clickedButton !== activeButton) {
            setActiveButton(clickedButton);
            toggleClicked();
        }
    };

    return (
        <nav className="toggle-div">
            <button className={activeButton === 'Content' ? 'active-button' : ''} onClick={handleButtonClick}>Content</button>
            <button className={activeButton === 'Customize' ? 'active-button' : ''} onClick={handleButtonClick}>Customize</button>
        </nav>
    );
}
