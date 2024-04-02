import arrowDownImage from '../assets/img/arrow-down.png';
import trash from '../assets/img/trash-can.png';
import { useState } from 'react';

function EducationButton({
    isProjectListVisible,
    toggleAddClicked,
    isAddClicked,
    onSchoolChange,
    onDegreeChange,
    onStartChange,
    onEndChange,
    onLocationChange,
    addEducation,
    educationArray,
    onEducationChange
}) {
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [location, setLocation] = useState('');
    const [buttonDisabled, setbuttonDisabled] = useState(true);

    const handleSchoolChange = (event) => {
        setSchool(event.target.value);
        verifyInputs();
    };

    const handleDegreeChange = (event) => {
        setDegree(event.target.value);
        verifyInputs();
    };

    const handleStartChange = (event) => {
        setStart(event.target.value);
        verifyInputs();
    };

    const handleEndChange = (event) => {
        setEnd(event.target.value);
        verifyInputs();
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
        verifyInputs();
    };

    const handleSaveClick = () => {
        // Chama a função de mudança de valor, passando o valor do input
        onSchoolChange(school);
        onDegreeChange(degree);
        onStartChange(start);
        onEndChange(end);
        onLocationChange(location);

        if(school !== '' && degree !== '' && start !== '' && end !== '' && location !== ''){
            addEducation(school, degree, start, end, location);
            toggleAddClicked();
            setSchool('');
            setDegree('');
            setStart('');
            setEnd('');
            setLocation('');
        }
    };

    const verifyInputs = () => {
        if (school !== '' && degree !== '' && start !== '' && end !== '' && location !== '') {
            setbuttonDisabled(false);
        } else {
            setbuttonDisabled(true);
        }
    }

    const removeEducationObject = (index) => {
        const newArray = [...educationArray];
        newArray.splice(index, 1);
        onEducationChange(newArray);
    };

    if (isProjectListVisible) {
        if (isAddClicked) {
            return (
                <>
                    <section className="education-form section-form" id="lu1g2zc7" data-array-name="educations">
                        <div className="input-group">
                            <label htmlFor="school-name">
                                <span className="label-text">School</span>
                            </label>
                            <input type="text" id="school-name" placeholder="Enter school / university" data-key="schoolName" onChange={handleSchoolChange} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="degree">
                                <span className="label-text">Degree</span>
                            </label>
                            <input type="text" id="degree" placeholder="Enter Field Of Study" data-key="degree" onChange={handleDegreeChange} />
                        </div>
                        <div className="dates-group">
                            <div className="input-group">
                                <label htmlFor="date">
                                    <span className="label-text">Start Date</span>
                                </label>
                                <input type="text" id="startDate" placeholder="Enter Start Date" data-key="startDate" onChange={handleStartChange} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="date">
                                    <span className="label-text">End Date</span>
                                </label>
                                <input type="text" id="endDate" placeholder="Enter End Date" data-key="endDate" onChange={handleEndChange} />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="location">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" id="location" placeholder="Enter Location" data-key="location" onChange={handleLocationChange} />
                        </div>
                        <div className="buttons">
                            <div className="main-buttons">
                                <button className="cancel" type="button" onClick={toggleAddClicked}>Cancel</button>
                                <button className="save" onClick={handleSaveClick} disabled={buttonDisabled}>Save</button>
                            </div>
                        </div>
                    </section>
                </>
            )
        }
        return (
            <>
                {educationArray.map((education, index) => (
                    <div key={index} className='education-edit-title'>
                        <h3>{education.school}</h3>
                        <button aria-label="Delete" onClick={() => removeEducationObject(index)}>
                            <img src={trash} alt="Trash can" />
                        </button>
                    </div>
                ))}
                <button onClick={toggleAddClicked}>Add</button>
            </>
        )
    } else {
        return null;
    }
}

export function Education({
    onSchoolChange,
    onDegreeChange,
    onStartChange,
    onEndChange,
    onLocationChange,
    addEducation,
    educationArray,
    onEducationChange
}
) {
    const [isProjectListVisible, setIsProjectListVisible] = useState(false);
    const [isAddClicked, setIsAddClicked] = useState(false);

    const toggleProjectList = () => {
        setIsProjectListVisible(!isProjectListVisible);
    };

    const toggleAddClicked = () => {
        setIsAddClicked(!isAddClicked);
    };

    return (
        <div className="education-div">
            <div className="education-title">
                <h2>Education</h2>
                <button className={`expand-button ${isProjectListVisible ? 'rotate' : ''}`} aria-label="Expand" onClick={toggleProjectList}>
                    <img src={arrowDownImage} alt="arrow down" />
                </button>
            </div>
            <EducationButton
                isProjectListVisible={isProjectListVisible}
                toggleAddClicked={toggleAddClicked}
                isAddClicked={isAddClicked}
                onSchoolChange={onSchoolChange}
                onDegreeChange={onDegreeChange}
                onStartChange={onStartChange}
                onEndChange={onEndChange}
                onLocationChange={onLocationChange}
                addEducation={addEducation}
                educationArray={educationArray}
                onEducationChange={onEducationChange}
            />
        </div>
    )
}