import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import App from "../App.js";
import Home from "../components/Home";
import Tickets from "../components/Tickets";
import Shop from "../components/Shop";
import Logo from "../components/Logo";
import Discover from "../components/Discover";

const router = (
    <Router>
        <App>
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/tickets' component={Tickets}/>
                <Route path='/shop' component={Shop}/>
                <Route path='/logo' component={Logo}/>
                <Route path='/discover' component={Discover}/>

                <Redirect from="*" to="/home" />
            </Switch>
        </App>
    </Router>
)

export default router;

