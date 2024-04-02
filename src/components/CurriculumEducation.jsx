export function CurriculumEducation({educationArray, selectedColor, isLightColor}) {
    return (
        <div className="curriculum-education-div">
            <h3 className="topic-title" style={{ color: selectedColor, backgroundColor: isLightColor(selectedColor) ? '#000000' : '#eef1f3' }}>Education</h3>
            {educationArray.map((education, index) => (
                <div key={index} className="education-topic">
                    <div className="education-date" style={{ borderRight: '2px solid ' + selectedColor}}>
                        <p>{education.start} - {education.end}</p>
                        <p>{education.location}</p>
                    </div>
                    <div className="education-info">
                        <p className="education-title" >{education.school}</p>
                        <p>{education.degree}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}