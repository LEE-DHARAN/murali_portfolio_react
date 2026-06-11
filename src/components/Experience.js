import React from 'react';

function Experience() {
    const experiences = [
        {
            title: 'Full-stack Developer',
            company: 'StaidLogic',
            period: 'Apr 2025 - Present',
            description: 'Developing full-stack applications with Python and PostgreSQL. Working on-site in Nellore, Andhra Pradesh.',
            skills: ['Python', 'PostgreSQL', 'Full Stack Development']
        },
        {
            title: 'Full Stack Development Trainee',
            company: 'GUVI',
            period: 'Sep 2024 - Apr 2025',
            description: 'Designed and deployed full-stack applications with focus on building scalable and maintainable systems. Remote position based in Chennai.',
            skills: ['API Design', 'Redux.js', 'Full Stack Development']
        },
        {
            title: 'Entrepreneur',
            company: 'Norukku Theeni Restaurant',
            period: 'Aug 2022 - Sep 2024',
            description: 'Established and managed a successful restaurant specializing in American, Middle Eastern and Indo-Chinese cuisine. Managed team of 4 staff, financial records, inventory, and operations in Chennai.',
            skills: ['Customer Satisfaction', 'Leadership', 'Business Management']
        }
     
    ];
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Work <span>Experience</span></h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                            <div className="timeline-content">
                                <h3>{exp.title}</h3>
                                <p className="date">{exp.period}</p>
                                <h4>{exp.company}</h4>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
