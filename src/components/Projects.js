import React from 'react';

function Projects() {
    const projects = [
        {
            title: 'React E-commerce Store',
            description: 'Full-featured online shopping platform with cart functionality. Achieved 40% faster load times through optimized image loading and code splitting.',
            technologies: 'React, Fake Store API, Tailwind CSS, React Router',
            image: 'https://img.freepik.com/premium-vector/ecommerce-online-shopping-marketing-concept-vector-stock-illustration_618588-583.jpg',
            demo: 'https://reactroutert2.netlify.app/',
            code: 'https://github.com/LEE-DHARAN/react-router-task',
            features: [
                'Product catalog with categories',
                'Shopping cart system with quantity adjustment',
                'Responsive product grid layout',
                'Dynamic price calculations with discounts',
                'Persistent cart state using local storage'
            ],
            outcome: 'Seamless user experience with 95% cart retention rate'
        },

        {
            title: 'Recipes Application',
            description: 'CRUD operations with user authentication. Maintained 100% data integrity with error-handling middleware.',
            technologies: 'React, Node.js, MongoDB, MVC',
            image: 'https://www.pngall.com/wp-content/uploads/8/Cooking-Recipe-PNG-Images.png',
            demo: '#',
            code: 'https://github.com/LEE-DHARAN/recipes',
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
            image: 'https://www.bihartechnogroup.com/wp-content/uploads/2023/05/banner_2.png',
            demo: 'https://hostelsys.netlify.app/login',
            code: 'https://github.com/LEE-DHARAN/FE-HOTELMANAGE',
            Code:'https://github.com/LEE-DHARAN/BE-HOTELMANAGE',
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
                                    {/* <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a> */}
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