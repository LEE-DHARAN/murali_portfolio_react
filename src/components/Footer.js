import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Murali. All Rights Reserved.</p>
                <p>Designed & Built with ❤️ by Murali</p>
            </div>
        </footer>
    );
}

export default Footer;