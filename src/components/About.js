import React from 'react';

function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About <span>Me</span></h2>
                <div className="about-content">
                    <div className="about-img">
                        <img src="/pic.jpg" alt="Murali" className="profile-pic" />


                    </div>
                    <div className="about-text">
                        <h3>Full-Stack Developer</h3>
                        <p>
                            I'm a passionate Full-Stack Developer with expertise in building web applications
                            using modern technologies. I specialize in frontend development with React and Django,
                            Backend development with Node.js and Python.
                        </p>
                        <p>
                            With over 2 years of professional experience, I've worked on various projects
                            ranging from small business websites to complex web applications. I'm dedicated
                            to writing clean, efficient, and maintainable code.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, contributing
                            to open-source projects, or mentoring aspiring developers.
                        </p>
                        <a href="#contact" className="btn">Hire Me</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;