import arrowDownImage from '../assets/img/arrow-down.png';
import trash from '../assets/img/trash-can.png';
import { useState } from 'react';

function ExperienceButton({
    isExperiencesVisible,
    toggleAddClicked,
    isAddClicked,
    onSchoolChange,
    onDegreeChange,
    onStartChange,
    onEndChange,
    onLocationChange,
    addExperience,
    experienceArray,
    onExperienceChange
}) {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [description, setDescription] = useState('');
    const [buttonDisabled, setbuttonDisabled] = useState(true);

    const handleCompanyChange = (event) => {
        setCompany(event.target.value);
        verifyInputs();
    };

    const handlePositionChange = (event) => {
        setPosition(event.target.value);
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

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        verifyInputs();
    };

    const handleSaveClick = () => {
        // Chama a função de mudança de valor, passando o valor do input
        onSchoolChange(company);
        onDegreeChange(position);
        onStartChange(start);
        onEndChange(end);
        onLocationChange(description);

        if (company !== '' && position !== '' && start !== '' && end !== '' && description !== '') {
            addExperience(company, position, start, end, description);
            toggleAddClicked();
            setCompany('');
            setPosition('');
            setStart('');
            setEnd('');
            setDescription('');
        }

    };

    const verifyInputs = () => {
        if (company !== '' && position !== '' && start !== '' && end !== '' && description !== '') {
            setbuttonDisabled(false);
        } else {
            setbuttonDisabled(true);
        }
    }

    const removeExperienceObject = (index) => {
        const newArray = [...experienceArray];
        newArray.splice(index, 1);
        onExperienceChange(newArray);
    };

    if (isExperiencesVisible) {
        if (isAddClicked) {
            return (
                <>
                    <section className="education-form section-form" id="lu1g2zc7" data-array-name="educations">
                        <div className="input-group">
                            <label htmlFor="company-name">
                                <span className="label-text">Company Name</span>
                            </label>
                            <input type="text" id="company-name" placeholder="Enter company name" data-key="companyName" onChange={handleCompanyChange} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="position-title">
                                <span className="label-text">Position Title</span>
                            </label>
                            <input type="text" id="position-title" placeholder="Enter Field Of Study" data-key="positionTitle" onChange={handlePositionChange} />
                        </div>
                        <div className="dates-group">
                            <div className="input-group">
                                <label htmlFor="date">
                                    <span className="label-text">Start Date</span>
                                </label>
                                <input type="text" id="date" placeholder="Enter Start Date" data-key="startDate" onChange={handleStartChange} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="date">
                                    <span className="label-text">End Date</span>
                                </label>
                                <input type="text" id="date" placeholder="Enter End Date" data-key="endDate" onChange={handleEndChange} />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="description">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" id="description" placeholder="Enter Location" data-key="description" onChange={handleDescriptionChange} />
                        </div>
                        <div className="buttons">
                            <div className="main-buttons">
                                <button className="cancel" type="button" onClick={toggleAddClicked}>Cancel</button>
                                <button className="save" disabled={buttonDisabled} onClick={handleSaveClick}>Save</button>
                            </div>
                        </div>
                    </section>
                </>
            )
        }
        return (
            <>
                {experienceArray.map((experience, index) => (
                    <div key={index} className='education-edit-title'>
                        <h3>{experience.company}</h3>
                        <button aria-label="Delete" onClick={() => removeExperienceObject(index)}>
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

export function Experience({
    onSchoolChange,
    onDegreeChange,
    onStartChange,
    onEndChange,
    onLocationChange,
    addExperience,
    experienceArray,
    onExperienceChange
}) {
    const [isExperiencesVisible, setIsExperiencesVisible] = useState(false);
    const [isAddClicked, setIsAddClicked] = useState(false);

    const toggleExperienceList = () => {
        setIsExperiencesVisible(!isExperiencesVisible);
        if (isAddClicked) {
            setIsAddClicked(false);
        }
    };

    const toggleAddClicked = () => {
        setIsAddClicked(!isAddClicked);
    };

    return (
        <div className="experience-div">
            <div className="experience-title">
                <h2>Experience</h2>
                <button className={`expand-button ${isExperiencesVisible ? 'rotate' : ''}`} aria-label="Expand" onClick={toggleExperienceList}>
                    <img src={arrowDownImage} alt="arrow down" />
                </button>
            </div>
            <ExperienceButton
                toggleExperienceList={toggleExperienceList}
                isExperiencesVisible={isExperiencesVisible}
                toggleAddClicked={toggleAddClicked}
                isAddClicked={isAddClicked}
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