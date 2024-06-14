import React from 'react';
import headerImage from '../assets/HTM_5.0.svg';

const Header = () => {
    return (
        <div className="header">
            <img src={headerImage} alt="Hackathon Banner" />
        </div>
    );
};

export default Header;
