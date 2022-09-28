import React, {useEffect, useState} from 'react';
import "./CreateEvent.css";
import {withRouter} from "react-router-dom";
import {format} from "date-fns";

function CreateEvent(props) {
    const [eventName, setEventName] = useState('');
    const [hostName, setHostName] = useState('');
    const [startDate, setStartDate] = useState(format(new Date(), "yyyy-MM-dd hh:mm:ss"));
    const [endDate, setEndDate] = useState(format(new Date(), "yyyy-MM-dd hh:mm:ss"));
    const [location, setLocation] = useState('');
    const [photo, setPhoto] = useState('https://dummyimage.com/480x480/fff/aaa');

    const submit = (event) => {
        event.preventDefault();
        console.log(eventName);
        console.log(hostName);
        console.log(startDate);
        console.log(endDate);
        console.log(location);
        console.log(photo);
        props.history.push('/event')
    };

    const onImageInputChange = (event) => {
        setPhoto(URL.createObjectURL(event.target.files[0]));
    }
    return (
        <div className="container">

            <div className=" row form-bg">
                <div className="column padding-horizontal--48">
                    <form onSubmit={submit}>
                        <div className="field padding-bottom--24">
                            <label htmlFor="event_name">Event Name:</label>
                            <input type="text" id="event_name" name="event_name" value={eventName}
                                   onChange={(e) => setEventName(e.target.value)}
                                   placeholder={"Event Name"} required/>
                        </div>
                        <div className="field padding-bottom--24">
                            <label htmlFor="host_name">Host Name:</label>
                            <input type="text" id="host_name" name="host_name" value={hostName}
                                   onChange={(e) => setHostName(e.target.value)}
                                   placeholder={"Host Name"} required/>
                        </div>
                        <div className="row">
                            <div className="column">
                                <div className="field padding-bottom--24" style={{marginRight:"10px"}}>
                                    <label htmlFor="start_date">Start Date:</label>
                                    <input type="datetime-local" id="start_date" name="start_date" value={startDate}

                                           onChange={(e) => setStartDate(e.target.value)}
                                           placeholder={"Start Date"} required/>
                                </div>
                            </div>
                            <div className="column">
                                <div className="field padding-bottom--24">
                                    <label htmlFor="end_date">End Date:</label>
                                    <input type="datetime-local" id="end_date" name="end_date" value={endDate}

                                           onChange={(e) => setEndDate(e.target.value)}
                                           placeholder={"End Date"} required/>
                                </div>
                            </div>
                        </div>


                        <div className="field padding-bottom--24">
                            <label htmlFor="location">Location:</label>
                            <textarea id="location" name="location" value={location}
                                      onChange={(e) => setLocation(e.target.value)}
                                      placeholder={"Location"} required></textarea>
                        </div>
                        <div className="field padding-bottom--24">
                            <label htmlFor="photo">Event Photo:</label>
                            <input type="file" id="photo" accept={'image/*'} name="photo"
                                   onChange={onImageInputChange}
                                   placeholder={"Photo"} required/>
                        </div>
                        <div className="field">
                            <input type="submit" value="Next"/>
                        </div>
                    </form>
                </div>

            </div>
            <div className="column">
                <img src={photo} alt="" height={'100%'}/><br/>
            </div>
        </div>
    );
}

export default withRouter(CreateEvent);