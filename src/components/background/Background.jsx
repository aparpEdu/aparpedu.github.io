import React from "react";
import './Background.css';
import background from '../../assets/bg.mp4'

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
