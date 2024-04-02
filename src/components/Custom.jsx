import React, { useState } from 'react';

export function Custom({handleColorChange, selectedColor, toggleIsTop}) {
    const [activeButton, setActiveButton] = useState('Top');

    const handleButtonClick = (event) => {
        const clickedElement = event.target;
        let clickedButton;
        
        if (clickedElement.tagName === 'BUTTON') {
            clickedButton = clickedElement.lastChild.textContent; // Se for um botão, pegue o texto do último filho
        } else if (clickedElement.tagName === 'DIV') {
            // Se for uma div, pegue o texto do irmão
            clickedButton = clickedElement.nextSibling.textContent;
        } else if (clickedElement.tagName === 'P') {
            clickedButton = clickedElement.textContent; // Se for um parágrafo, pegue o próprio texto
        }
        
        console.log(clickedButton);
        
        if (clickedButton && clickedButton !== activeButton) {
            setActiveButton(clickedButton);
            toggleIsTop();
        }
    };
    
    return (
        <div className="custom-div">
            <div className="layout">
                <h2>Layout</h2>
                <div className="col-buttons">
                    <button className={activeButton === 'Top' ? 'active-button' : ''} onClick={handleButtonClick}>
                        <div className="top-visual visual"></div>
                        <p>Top</p>
                    </button>
                    <button className={activeButton === 'Left' ? 'active-button' : ''} onClick={handleButtonClick}>
                        <div className="left-visual visual"></div>
                        <p>Left</p>
                    </button>
                </div>
            </div>
            <div className="color-div">
                <h2>Color</h2>
                <label className="accent-color">
                    Accent Color 
                    <input type="color" defaultValue={selectedColor} onChange={(e) => handleColorChange(e.target.value)} />
                </label>
            </div>
        </div>
    )
}