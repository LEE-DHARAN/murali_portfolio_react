import React from 'react';

function Blog() {
    const blogPosts = [
        {
            title: 'React Hooks Explained',
            excerpt: 'Understanding useState, useEffect and other essential React hooks.',
            date: 'Dec 2, 2024',
            image: 'https://devdotcode.com/wp-content/uploads/2020/12/REACT-HOOKS-1-2048x1152.png'
,
            link: 'https://dev.to/leedharan/react-hooks-explained-for-beginners-1a8p'
        },
        
        {
            title: 'Getting Started with Django',
            excerpt: 'Learn the basics of Django framework and how to set up your first project.',
            date: 'April 15, 2025',
            image: 'https://linuxwizardry.com/wp-content/uploads/2022/06/75006572-how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-18.04-in-google-cloud.jpg',
            link: 'https://medium.com/@muralidhawan/how-django-templates-taught-me-to-build-staidlogics-best-interfaces-202b8b596a18'
        },
   
        {
            title: 'Transforming Norukku Theeni’s website with Flexbox',
            excerpt: 'A comprehensive guide to creating responsive layouts with Flexbox.',
            date: 'May 10, 2025',
            image: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/sites/2147496605/images/adSKFRGlQnauNI2eNk5y_blog-CSSGrid.jpg',
            link: 'https://medium.com/@muralidhawan/89f150ab425b'
        }
    ];

    return (
        <section id="blog" className="section">
            <div className="container">
                <h2 className="section-title">My <span>Blog</span></h2>
                <div className="blog-container">
                    {blogPosts.map((post, index) => (
                        <div className="blog-card" key={index}>
                            <div className="blog-img">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="blog-content">
                                <h3>{post.title}</h3>
                                <p><small>{post.date}</small></p>
                                <p>{post.excerpt}</p>
                                <a href={post.link} className="read-more">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog;