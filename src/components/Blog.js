import React from 'react';

function Blog() {
    const blogPosts = [
        {
            title: 'React Hooks Explained',
            excerpt: 'Understanding useState, useEffect and other essential React hooks.',
            date: 'Dec 2, 2024',
            image: 'https://via.placeholder.com/600x400',
            link: '#'
        },
        
        {
            title: 'Getting Started with Django',
            excerpt: 'Learn the basics of Django framework and how to set up your first project.',
            date: 'April 15, 2025',
            image: 'https://via.placeholder.com/600x400',
            link: '#'
        },
   
        {
            title: 'CSS Grid Layout',
            excerpt: 'A comprehensive guide to creating responsive layouts with CSS Grid.',
            date: 'May 10, 2025',
            image: 'https://via.placeholder.com/600x400',
            link: '#'
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