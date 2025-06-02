import React from 'react';

function Projects() {
    const projects = [
        {
            title: 'Movie Search Application',
            description: 'Dynamic movie discovery platform with favourites system. Achieved 90% Lighthouse score via lazy loading implementation.',
            technologies: 'React, TMDB API, Tailwind CSS',
            image: 'https://via.placeholder.com/600x400',
            demo: '#',
            code: '#',
            features: [
                'Movie discovery platform',
                'Favorites system',
                'Lazy loading for performance'
            ],
            outcome: '90% Lighthouse score'
        },
        {
            title: 'Recipes Application',
            description: 'CRUD operations with user authentication. Maintained 100% data integrity with error-handling middleware.',
            technologies: 'React, Node.js, MongoDB, MVC',
            image: 'https://via.placeholder.com/600x400',
            demo: '#',
            code: '#',
            features: [
                'User authentication',
                'Full CRUD operations',
                'Error-handling middleware'
            ],
            outcome: '100% data integrity'
        },
        {
            title: 'Hostel Management System',
            description: 'Automated hostel administration with real-time tracking. Reduced manual tasks by 60% through payment and notification automation.',
            technologies: 'React, Node.js, Express, MongoDB, JWT, Razorpay',
            image: 'https://via.placeholder.com/600x400',
            demo: '#',
            code: '#',
            features: [
                'Payment integration (Razorpay)',
                'Real-time tracking',
                'Automated notifications'
            ],
            outcome: '60% reduction in manual tasks'
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">My <span>Projects</span></h2>
                <div className="projects-container">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-img">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <p><small>{project.technologies}</small></p>
                                <div className="project-links">
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                                    <a href={project.code} target="_blank" rel="noopener noreferrer">View Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;