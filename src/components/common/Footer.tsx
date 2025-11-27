import React from 'react';
import './Footer.css';
import { APP_CONFIG } from '../../utils/constants';

const Footer: React.FC = () => {
    return (
        <footer className="app-footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} {APP_CONFIG.APP_NAME}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
