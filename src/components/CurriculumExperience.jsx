export function CurriculumExperience({experienceArray, selectedColor, isLightColor}) {
    return (
        <div className="curriculum-education-div">
            <h3 className="topic-title" style={{ color: selectedColor, backgroundColor: isLightColor(selectedColor) ? '#000000' : '#eef1f3' }}>Professional Experience</h3>
            {experienceArray.map((experience, index) => (
                <div key={index} className="education-topic">
                    <div className="education-date" style={{ borderRight: '2px solid ' + selectedColor}}>
                        <p>{experience.start} - {experience.end}</p>
                        <p>{experience.position}</p>
                    </div>
                    <div className="education-info">
                        <p className="education-title">{experience.company}</p>
                        <p>{experience.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}