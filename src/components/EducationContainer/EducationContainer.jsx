import './EducationContainer.css'

export default function EducationContainer({ education }) {
    return (
        <div className="education">
            <div className="education-logo">
                <img src={education.school_logo} alt="School Logo" />
            </div>
            <div className="education-info">
                {education.title && <h3>{education.title}</h3>}
                {education.school && <h5>{education.school}</h5>}
                <p>{education.date}</p>
                {education.final_year_project && <h5>{education.final_year_project}</h5>}
                {education.result && <h5>{education.result}</h5>}
            </div>
        </div>
    )
}
