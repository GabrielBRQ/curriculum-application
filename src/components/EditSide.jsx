import { PersonalDetails } from "./PersonalDetails.jsx";
import { Education } from "./Education.jsx";
import { Experience } from "./Experience.jsx";

export function Edit({
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
    onEducationChange
}) {
    return (
        <div className="edit-div">
            <PersonalDetails
                onNameChange={onNameChange}
                onEmailChange={onEmailChange}
                onPhoneChange={onPhoneChange}
                onAddressChange={onAddressChange}
            />
            <Education
                onSchoolChange={onSchoolChange}
                onDegreeChange={onDegreeChange}
                onStartChange={onStartChange}
                onEndChange={onEndChange}
                onLocationChange={onLocationChange}
                addEducation={addEducation}
                educationArray={educationArray}
                onEducationChange={onEducationChange}
            />
            <Experience
                onSchoolChange={onSchoolChange}
                onDegreeChange={onDegreeChange}
                onStartChange={onStartChange}
                onEndChange={onEndChange}
                onLocationChange={onLocationChange}
                addExperience={addExperience}
                experienceArray={experienceArray}
                onExperienceChange={onExperienceChange}
            />
        </div>
    )
}