import React from "react";
import './Background.css';
import background from '../../assets/mario2.mp4'

const Background = () => {
    return (
        <div className="background">
            <video className="background-video" autoPlay loop muted>
                <source src={background} type='video/mp4' />
            </video>
        </div>
    );
};

export default Background;
