import '../styles/Settings.css'
import { ToggleSettings } from './ChangeSettings.jsx'
import { Edit } from './EditSide.jsx'

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
    educationArray
}) {
    return (
        <aside className="left-side">
            <ToggleSettings />
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
                educationArray={educationArray}
            />
        </aside>
    )
}