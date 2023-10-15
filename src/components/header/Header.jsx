import React from "react";
import  './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="logo">
                </div>
                <div className="nav-links">
                    <a href= "/"><FontAwesomeIcon icon={faHouse} style={{color: "#5187e7",}} /></a>
                    <a href="/projects">Projects</a>
                    <a href="/university">University</a>
                    <a href="https://github.com/aparpEdu"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/alexander-parpulansky/">
                        <FontAwesomeIcon icon={faLinkedin} style={{color: "#0077B5"}} /></a>
                </div>
            </div>
        </div>
    );
};

export default Header;