import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>© {year} Afzal Bidhan. All rights reserved. Built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React.js</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;