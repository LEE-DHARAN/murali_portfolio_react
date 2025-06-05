import React from 'react';

function Contact() {
    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Get In <span>Touch</span></h2>
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <div className="contact-details">
                            <p>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>chennai, India</span>
                            </p>
                            <p>
                                <i className="fas fa-envelope"></i>
                                <span>muralidhawan@gmail.com</span>
                            </p>
                            <p>
                                <i className="fas fa-phone"></i>
                                <span>+91 9790831837</span>
                            </p>
                        </div>
                        <div className="social-links">
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form action="https://formsubmit.co/muralidhawan@gmail.com" method="POST">
                            <input type="text" name="name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                            <input type="text" name="subject" placeholder="Subject" />
                            <textarea name="message" placeholder="Your Message" required></textarea>
                            <input type="hidden" name="_captcha" value="false" />
                            <button type="submit" className="btn">Send Message</button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;