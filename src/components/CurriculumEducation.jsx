export function CurriculumEducation({educationArray}) {
    return (
        <div className="curriculum-education-div">
            <h3 className="topic-title">Education</h3>
            {educationArray.map((education, index) => (
                <div key={index} className="education-topic">
                    <div className="education-date">
                        <p>{education.start} - {education.end}</p>
                        <p>{education.location}</p>
                    </div>
                    <div className="education-info">
                        <p className="education-title">{education.school}</p>
                        <p>{education.degree}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}