import arrowDownImage from '../assets/img/arrow-down.png';
import { useState } from 'react';

function ExperienceButton({ toggleExperienceList, isExperiencesVisible, toggleAddClicked, isAddClicked }) {
    if (isExperiencesVisible) {
        if (isAddClicked) {
            return (
                <>
                    <form className="education-form section-form" id="lu1g2zc7" data-array-name="educations">
                        <div className="input-group">
                            <label htmlFor="company-name">
                                <span className="label-text">Company Name</span>
                            </label>
                            <input type="text" id="company-name" placeholder="Enter company name" data-key="companyName" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="position-title">
                                <span className="label-text">Position Title</span>
                            </label>
                            <input type="text" id="position-title" placeholder="Enter Field Of Study" data-key="positionTitle" />
                        </div>
                        <div className="dates-group">
                            <div className="input-group">
                                <label htmlFor="date">
                                    <span className="label-text">Start Date</span>
                                </label>
                                <input type="text" id="date" placeholder="Enter Start Date" data-key="startDate" />
                            </div>
                            <div className="input-group">
                                <label htmlFor="date">
                                    <span className="label-text">End Date</span>
                                </label>
                                <input type="text" id="date" placeholder="Enter End Date" data-key="endDate" />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="description">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" id="description" placeholder="Enter Location" data-key="description" />
                        </div>
                        <div className="buttons">
                            <div className="main-buttons">
                                <button className="cancel" type="button" onClick={toggleAddClicked}>Cancel</button>
                                <button className="save">Save</button>
                            </div>
                        </div>
                    </form>
                </>
            )
        }
        return (
            <button onClick={toggleAddClicked}>Add</button>
        )
    } else {
        return null;
    }
}

export function Experience() {
    const [isExperiencesVisible, setIsExperiencesVisible] = useState(false);
    const [isAddClicked, setIsAddClicked] = useState(false);

    const toggleExperienceList = () => {
        setIsExperiencesVisible(!isExperiencesVisible);
        if(isAddClicked){
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
            <ExperienceButton toggleExperienceList={toggleExperienceList} isExperiencesVisible={isExperiencesVisible} toggleAddClicked={toggleAddClicked} isAddClicked={isAddClicked}/>
        </div>

    )
}