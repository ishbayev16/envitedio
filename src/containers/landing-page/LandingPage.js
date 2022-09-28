import React, {useEffect, useState} from 'react';
import "./LandingPage.css";
import {withRouter} from "react-router-dom";
import image from "./images/img.png";
function LandingPage(props) {
    return (
        <div className="main-container">
            <div className="title-container">
                <div className="title-1">Imagine if</div>
                <div className="title-2">Snapchat</div>
                <div className="title-1">has events.</div>
                <div className="sub-title">
                    Easily host and share events with your friends across any social media.
                </div>
                <div className="btn-container2">
                    <button onClick={()=>props.history.push('/create')}><span className="btn-title">🎉 Create my event</span></button>
                </div>
            </div>
            <div className="image-container">
                <img className="image" src={image} alt="image"/>
            </div>
            <div className="btn-container1">
            <button onClick={()=>props.history.push('/create')}><span className="btn-title">🎉 Create my event</span></button>
            </div>
        </div>
    );
}

export default withRouter(LandingPage);