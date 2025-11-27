import React from 'react';
import './Header.css';
import { APP_CONFIG } from '../../utils/constants';

const Header: React.FC = () => {
    return (
        <header className="app-header">
            <div className="container header-content">
                <div className="logo">
                    <h1>{APP_CONFIG.APP_NAME}</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
