import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import LandingPage from "./containers/landing-page/LandingPage";
import CreateEvent from "./containers/create-event/CreateEvent";
import EventDetail from "./containers/event-detail/EventDetail";

function Routes(props) {
    return (
        <Switch>
            <Route exact path='/' render={() => <LandingPage/>}/>
            <Route exact path='/create' render={() => <CreateEvent/>}/>
            <Route exact path='/event' render={() => <EventDetail/>}/>
        </Switch>
    );
}
export default withRouter(Routes);