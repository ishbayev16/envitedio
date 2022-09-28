import React, {useEffect, useState} from 'react';
import "./EventDetail.css";
import {withRouter} from "react-router-dom";
import image from "./images/img.png";
import 'boxicons';
import { BiCalendar, BiChevronRight,BiMap } from "react-icons/bi";

function EventDetail(props) {
    return (
        <div className="event-container">
            <div className="event-top-container">
                <div className="event-image-container">
                    <img className="image-detail" src={image} alt="image"/>
                </div>
            </div>
            <div className="info-top-container">
                <div className="event-name">
                    Birthday Bash
                </div>
                <div className="event-name-sub">
                    Hosted by <span className="host-name">Elysia</span>
                </div>
                <div className="info-container">
                    <div className="first-icon">
                        <BiCalendar color="#8456EC" size="32px"/>
                    </div>
                    <div className="date-container">
                        <div className="start-date">
                            18 August 6:00PM
                        </div>
                        <div className="end-date">
                            to <span className="bold-font">19 August 1:00PM</span> UTC +10
                        </div>
                    </div>
                    <div className="second-icon">
                        <BiChevronRight color="#BDBDBD" size="32px"/>
                    </div>
                </div>
                <div className="info-container">
                <div className="first-icon">
                    <BiMap color="#8456EC" size="32px"/>
                </div>
                <div className="date-container">
                    <div className="start-date">
                        Street name
                    </div>
                    <div className="end-date">
                        Suburb, State, Postcode
                    </div>
                </div>
                <div className="second-icon">
                    <BiChevronRight color="#BDBDBD" size="32px"/>
                </div>
            </div>
            </div>
        </div>
    );
}

export default withRouter(EventDetail);