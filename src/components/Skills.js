import React from 'react';

function Skills() {
    const skills = [
        { icon: <i className="fab fa-html5"></i>, name: 'HTML5', description: 'Semantic markup, accessibility' },
        { icon: <i className="fab fa-css3-alt"></i>, name: 'CSS3', description: 'Flexbox, Grid, animations' },
        { icon: <i className="fab fa-js"></i>, name: 'JavaScript', description: 'ES6+, DOM manipulation' },
        { icon: <i className="fab fa-react"></i>, name: 'React', description: 'Hooks, Context API' },
        { icon: <i className="fab fa-node-js"></i>, name: 'Node.js', description: 'Express, REST APIs' },
        { icon: <i className="fab fa-python"></i>, name: 'Python', description: 'Django' },
        { icon: <i className="fas fa-database"></i>, name: 'Databases', description: 'MySQL, MongoDB' },
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">My <span>Skills</span></h2>
                <div className="skills-container">
                    {skills.map((skill, index) => (
                        <div className="skill-item" key={index}>
                            {skill.icon}
                            <h3>{skill.name}</h3>
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;