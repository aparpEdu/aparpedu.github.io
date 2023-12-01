import React, { useEffect, useState } from "react";
import  './Nav-Bar.css';
import spring from '../../assets/springio-icon.svg'
import docker from '../../assets/docker-icon.svg'
import postgres from '../../assets/postgresql-icon.svg'
import maven from '../../assets/maven-icon.svg'
import redis from '../../assets/redis-icon.svg'
import java from  '../../assets/java.svg'
import Typewriter from "../typewriter/Typewriter";
const NavBar = () => {
    const [text, setText] = useState("");
    const skills = "Java Backend Developer";

    useEffect(() => {
        let currentCharIndex = 0;
        let interval;

        const typeText = () => {
            if (currentCharIndex < skills.length) {
                setText((prevText) => prevText + skills[currentCharIndex]);
                currentCharIndex++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    setText(""); // Clear the text
                    currentCharIndex = 0; // Reset the index
                    startTyping(); // Restart the animation
                }, 2000); // Wait for 2 seconds and then restart
            }
        };

        const startTyping = () => {
            interval = setInterval(typeText, 100); // Typing speed (adjust as needed)
        };

        startTyping();

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, []);



    return (
        <div className="sidebar">
            <div className="profile">
                <img
                    src="https://avatars.githubusercontent.com/u/115992953?v=4"
                    alt="Portfolio"
                    className="profile-image"
                />
            </div>
            <div className="name">ALEXANDER PARPULANSKY</div>
            {/*<div className="social-icons">*/}
            {/*    <a href="https://github.com/yourgithubprofile" target="_blank" rel="noopener noreferrer">*/}
            {/*        <i className="fa fa-github"></i> GitHub*/}
            {/*    </a>*/}
            {/*    <a href="https://linkedin.com/in/yourlinkedinprofile" target="_blank" rel="noopener noreferrer">*/}
            {/*        <i className="fa fa-linkedin"></i> LinkedIn*/}
            {/*    </a>*/}
            {/*</div>*/}
            <div className="tech-stack">
                <div className="stack-icons">
                    <img src={java} alt="Java" style={{ width: '24px', height: '24px' }}  title="Java"/>
                    <img src={spring} alt="Spring" style={{ width: '24px', height: '24px' }} title="Spring Framewotk" />
                    <img src={docker} alt="Docker" style={{ width: '32px', height: '32px' }}  title="Docker" />
                    <img src={postgres} alt="PostgreSQL" style={{ width: '24px', height: '24px' }}  title="PostgreSQL" />
                    <img src={maven} alt="Maven" style={{ width: '24px', height: '24px' }}  title="Maven" />
                    <img src={redis} alt="Redis" style={{ width: '24px', height: '24px' }}  title="Redis"/>
                </div>
               <div className="role">Java <Typewriter text="Backend Developer" delay={200} infinite /></div>
            </div>


            {/*<div className="tabs">*/}
            {/*    <ul>*/}
            {/*        <li>About Me</li>*/}
            {/*        <li>My Projects</li>*/}
            {/*        <li>University</li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    );
};

export default NavBar;
