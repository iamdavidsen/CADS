import React from "react";
import {connect} from "react-redux";

import HomePage from "../home/Home";
import {PublicRoute} from "./components/publicRoute";
import Login from "../login/Login";
import Register from "../register/Register";
import {PrivateRoute} from "./components/privateRoute";
import {Switch} from "react-router";

interface IProps {
    loggedIn: boolean
}

const Routing = ({ loggedIn }: IProps) => (
    <Switch>
        <PublicRoute loggedIn={loggedIn} restricted={true} path="/" component={HomePage} exact={true}/>
        <PublicRoute loggedIn={loggedIn} restricted={true} path="/login" component={Login} exact={true}/>
        <PublicRoute loggedIn={loggedIn} restricted={true} path="/register" component={Register} exact={true}/>
        <PrivateRoute loggedIn={loggedIn} path="/projects" component={HomePage} exact={true}/>
    </Switch>
);

const mapStateToProps = (state: any) => {
    return {
        loggedIn: state.auth.loggedIn
    }
};

export default connect(
    mapStateToProps,
   null 
)(Routing)
