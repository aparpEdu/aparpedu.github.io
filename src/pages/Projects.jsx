import React, { useState } from "react";
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
    // Define state variables for each category
    const [restApiContent, setRestApiContent] = useState(false);
    const [androidContent, setAndroidContent] = useState(false);
    const [webAppsContent, setWebAppsContent] = useState(false);
    const [otherContent, setOtherContent] = useState(false);

    // Create separate toggle functions for each category
    const toggleRestApiContent = () => {
        setRestApiContent(!restApiContent);
    };

    const toggleAndroidContent = () => {
        setAndroidContent(!androidContent);
    };

    const toggleWebAppsContent = () => {
        setWebAppsContent(!webAppsContent);
    };

    const toggleOtherContent = () => {
        setOtherContent(!otherContent);
    };

    return (
        <div className="home">
            <h1 className="title">Apps I've worked on</h1>
            <div className="category-container">
                <div className="category-header" onClick={toggleRestApiContent}>
                    <span className="category-title">REST API</span>
                    <FontAwesomeIcon icon={restApiContent ? faChevronDown : faChevronRight} />
                </div>
                {restApiContent && (
                    <div className="content">
                        <p>
                            <a href="https://github.com/aparpEdu/Authentication-Spring/tree/feature/refresh-token-jwt-v2" target="_blank" rel="noreferrer">
                            Authentication
                            </a>
                        </p>
                        <p>
                            <a href="https://github.com/aparpEdu/Library-App-REST-API" target="_blank" rel="noreferrer">
                                Library
                            </a>
                        </p>
                        <p>
                            <a href="https://github.com/aparpEdu/Product-Store-Spring-REST-API" target="_blank" rel="noreferrer">
                                Product Store
                            </a>
                        </p>
                        <p>
                            <a href="https://github.com/aparpEdu/Blog-App-Spring-Rest-API" target="_blank" rel="noreferrer">
                               Blog
                            </a>
                        </p>
                    </div>
                )}
            </div>

            <div className="category-container">
                <div className="category-header" onClick={toggleAndroidContent}>
                    <span className="category-title">Android</span>
                    <FontAwesomeIcon icon={androidContent ? faChevronDown : faChevronRight} />
                </div>
                {androidContent && (
                    <div className="content">
                        <p>
                            <a href="https://github.com/aparpEdu/FRN-MUSIC-PLAYER">
                                Music Player
                            </a>
                        </p>
                        <p>
                            <a href="https://github.com/aparpEdu/Android-Widgets">
                                Widgets
                            </a>
                        </p>
                        <p>
                            <a href="https://github.com/aparpEdu/Lucky-Numbers/tree/feature/java11">
                                Lucky Numbers
                            </a>
                        </p>

                    </div>
                )}
            </div>

            <div className="category-container">
                <div className="category-header" onClick={toggleWebAppsContent}>
                    <span className="category-title">Web Apps</span>
                    <FontAwesomeIcon icon={webAppsContent ? faChevronDown : faChevronRight} />
                </div>
                {webAppsContent && (
                    <div className="content">
                        <p>
                            <a href="https://docconnect-yellow.devsmm.com/" target="_blank" rel="noreferrer">
                                Health Care
                            </a>
                        </p>
                        <p>
                            <a href="https://github.com/aparpEdu/Movie-Finder-Application" target="_blank" rel="noreferrer">
                               Movie Finder
                            </a>
                        </p>
                    </div>
                )}
            </div>

            <div className="category-container">
                <div className="category-header" onClick={toggleOtherContent}>
                    <span className="category-title">Other</span>
                    <FontAwesomeIcon icon={otherContent ? faChevronDown : faChevronRight} />
                </div>
                {otherContent && (
                    <div className="content">
                        <p>
                            <a href="https://github.com/aparpEdu/Wine-App-JavaFx" target="_blank" rel="noreferrer">
                                Wine Production Desktop App
                            </a>
                        </p>
                        <p>
                            <a href="https://github.com/aparpEdu/libraryApp" target="_blank" rel="noreferrer">
                               Library CLI
                            </a>
                        </p>
                        <p>
                            <a href="https://github.com/aparpEdu/ParkingApp" target="_blank" rel="noreferrer">
                               Parking CLI
                            </a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;
