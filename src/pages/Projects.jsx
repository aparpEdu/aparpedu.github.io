import React, { useState } from "react";
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";

    const Projects = () => {
        const [categories, setCategories] = useState({
            restApiContent: false,
            androidContent: false,
            webAppsContent: false,
            otherContent: false,
            uniContent: false,
        });

        const toggleCategory = (categoryName) => {
            setCategories((prevCategories) => {
                return {
                    restApiContent: false,
                    androidContent: false,
                    webAppsContent: false,
                    otherContent: false,
                    uniContent: false,
                    [categoryName]: !prevCategories[categoryName]
                };
            });
        };

    return (
        <div className="home">
            <h1 className="title">Apps I've worked on</h1>
            <div className="category-container">
                <div className="category-header" onClick={() => toggleCategory("restApiContent")}>
                    <span className="category-title">REST API</span>
                    <FontAwesomeIcon icon={categories.restApiContent ? faChevronDown : faChevronRight} />
                </div>
                {categories.restApiContent && (
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
                <div className="category-header" onClick={() => toggleCategory("androidContent")}>
                    <span className="category-title">Android</span>
                    <FontAwesomeIcon icon={categories.androidContent ? faChevronDown : faChevronRight} />
                </div>
                {categories.androidContent && (
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
                <div className="category-header" onClick={() => toggleCategory("webAppsContent")}>
                    <span className="category-title">Web Apps</span>
                    <FontAwesomeIcon icon={categories.webAppsContent ? faChevronDown : faChevronRight} />
                </div>
                {categories.webAppsContent && (
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
                <div className="category-header" onClick={() => toggleCategory("uniContent")}>
                    <span className="category-title">University</span>
                    <FontAwesomeIcon icon={categories.uniContent ? faChevronDown : faChevronRight} />
                </div>
                {categories.uniContent && (
                    <div className="content">
                        <p>
                            <a href="https://github.com/aparpEdu/Image-Gallery" target="_blank" rel="noreferrer">
                                1.Picasso
                            </a>
                        </p>
                        <p>
                            <a href="https://github.com/aparpEdu/input-validation" target="_blank" rel="noreferrer">
                                2.Input Validations
                            </a>
                        </p>
                        <p>
                            <a href="https://github.com/aparpEdu/parcel-map" target="_blank" rel="noreferrer">
                                3.People(Parcel + Gmaps)
                            </a>
                        </p>

                    </div>
                )}
            </div>
            <div className="category-container">
                <div className="category-header" onClick={() => toggleCategory("otherContent")}>
                    <span className="category-title">Other</span>
                    <FontAwesomeIcon icon={categories.otherContent ? faChevronDown : faChevronRight} />
                </div>
                {categories.otherContent && (
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
