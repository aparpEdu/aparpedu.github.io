import React, { useState } from "react";
import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Archive = () => {
    // Define state variables for each category
    // const [restApiContent, setRestApiContent] = useState(false);
    const [androidContent, setAndroidContent] = useState(false);
    // const [webAppsContent, setWebAppsContent] = useState(false);
    // const [otherContent, setOtherContent] = useState(false);

    // Create separate toggle functions for each category
    // const toggleRestApiContent = () => {
    //     setRestApiContent(!restApiContent);
    // };

    const toggleAndroidContent = () => {
        setAndroidContent(!androidContent);
    };

    // const toggleWebAppsContent = () => {
    //     setWebAppsContent(!webAppsContent);
    // };

    // const toggleOtherContent = () => {
    //     setOtherContent(!otherContent);
    // };

    return (
        <div className="home">
            <h1 className="title">University Apps</h1>
            {/*<div className="category-container">*/}
            {/*    <div className="category-header" onClick={toggleRestApiContent}>*/}
            {/*        <span className="category-title">REST API</span>*/}
            {/*        <FontAwesomeIcon icon={restApiContent ? faChevronDown : faChevronRight} />*/}
            {/*    </div>*/}
            {/*    {restApiContent && (*/}
            {/*        <div className="content">*/}
            {/*            <p>*/}
            {/*                <a href="https://github.com/aparpEdu/Authentication-Spring/tree/feature/refresh-token-jwt-v2">*/}
            {/*                    Authentication*/}
            {/*                </a>*/}
            {/*            </p>*/}
            {/*            <p>*/}
            {/*                <a href="https://github.com/aparpEdu/Library-App-REST-API">*/}
            {/*                    Library*/}
            {/*                </a>*/}
            {/*            </p>*/}
            {/*            <p>*/}
            {/*                <a href="https://github.com/aparpEdu/Product-Store-Spring-REST-API">*/}
            {/*                    Product Store*/}
            {/*                </a>*/}
            {/*            </p>*/}
            {/*            <p>*/}
            {/*                <a href="https://github.com/aparpEdu/Blog-App-Spring-Rest-API">*/}
            {/*                    Blog*/}
            {/*                </a>*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}

            <div className="category-container">
                <div className="category-header" onClick={toggleAndroidContent}>
                    <span className="category-title">Android</span>
                    <FontAwesomeIcon icon={androidContent ? faChevronDown : faChevronRight} />
                </div>
                {androidContent && (
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

            {/*<div className="category-container">*/}
            {/*    <div className="category-header" onClick={toggleWebAppsContent}>*/}
            {/*        <span className="category-title">Web Apps</span>*/}
            {/*        <FontAwesomeIcon icon={webAppsContent ? faChevronDown : faChevronRight} />*/}
            {/*    </div>*/}
            {/*    {webAppsContent && (*/}
            {/*        <div className="content">*/}
            {/*            <p>*/}
            {/*                <a href="https://docconnect-yellow.devsmm.com/">*/}
            {/*                    Health Care*/}
            {/*                </a>*/}
            {/*            </p>*/}
            {/*            <p>*/}
            {/*                <a href="https://github.com/aparpEdu/Movie-Finder-Application">*/}
            {/*                    Movie Finder*/}
            {/*                </a>*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}

            {/*<div className="category-container">*/}
            {/*    <div className="category-header" onClick={toggleOtherContent}>*/}
            {/*        <span className="category-title">Other</span>*/}
            {/*        <FontAwesomeIcon icon={otherContent ? faChevronDown : faChevronRight} />*/}
            {/*    </div>*/}
            {/*    {otherContent && (*/}
            {/*        <div className="content">*/}
            {/*            <p>*/}
            {/*                <a href="https://github.com/aparpEdu/Wine-App-JavaFx">*/}
            {/*                    Wine Production Desktop App*/}
            {/*                </a>*/}
            {/*            </p>*/}
            {/*            <p>*/}
            {/*                <a href="https://github.com/aparpEdu/libraryApp">*/}
            {/*                    Library CLI*/}
            {/*                </a>*/}
            {/*            </p>*/}
            {/*            <p>*/}
            {/*                <a href="https://github.com/aparpEdu/ParkingApp">*/}
            {/*                    Parking CLI*/}
            {/*                </a>*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}
        </div>
    );
};

export default Archive;
