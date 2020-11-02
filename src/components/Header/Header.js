import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-light bg-primary justify-content-between">
                <a className="navbar-brand">E - Learning</a>
                <form className="form-inline">
                    <input type="search" placeholder="Search" aria-label="Search" className="form-control mr-sm-2"/>
                </form>
            </nav>
        </div>
    );
};

export default Header;