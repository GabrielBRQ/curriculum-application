import '../styles/Settings.css'
import { ToggleSettings } from './ChangeSettings.jsx'
import { Edit } from './EditSide.jsx'
import { Custom } from './Custom.jsx';
import { useState } from 'react';

export function Settings({
    onNameChange,
    onEmailChange,
    onPhoneChange,
    onAddressChange,
    onSchoolChange,
    onDegreeChange,
    onStartChange,
    onEndChange,
    onLocationChange,
    addEducation,
    addExperience,
    educationArray,
    experienceArray,
    onExperienceChange,
    onEducationChange,
    handleColorChange,
    selectedColor,
    toggleIsTop
}) {
    const [isCustomClicked, setIsCustomClicked] = useState(false);
    const toggleClicked= () => {
        setIsCustomClicked(!isCustomClicked);
    };
    return (
        <aside className="left-side">
            <ToggleSettings toggleClicked={toggleClicked}/>
            {isCustomClicked ? (
                <Custom 
                    handleColorChange={handleColorChange}
                    selectedColor={selectedColor}
                    toggleIsTop={toggleIsTop}
                />
            ) : (
                <Edit
                    onNameChange={onNameChange}
                    onEmailChange={onEmailChange}
                    onPhoneChange={onPhoneChange}
                    onAddressChange={onAddressChange}
                    onSchoolChange={onSchoolChange}
                    onDegreeChange={onDegreeChange}
                    onStartChange={onStartChange}
                    onEndChange={onEndChange}
                    onLocationChange={onLocationChange}
                    addEducation={addEducation}
                    addExperience={addExperience}
                    educationArray={educationArray}
                    experienceArray={experienceArray}
                    onExperienceChange={onExperienceChange}
                    onEducationChange={onEducationChange}
                />
            )}
        </aside>
    )
}