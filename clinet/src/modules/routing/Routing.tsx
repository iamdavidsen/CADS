import React from "react";
import {connect} from "react-redux";

import HomePage from "../home/Home";
import {PublicRoute} from "./components/publicRoute";
import Login from "../login/Login";
import Register from "../register/Register";
import {PrivateRoute} from "./components/privateRoute";
import {Switch} from "react-router";
import ProjectsList from "../projectsList/ProjectsList";
import Project from "../project/Project";
import PublicProject from "../project/PublicProject";

interface IProps {
    loggedIn: boolean
}

const Routing = ({ loggedIn }: IProps) => (
    <Switch>
        <PublicRoute loggedIn={loggedIn} restricted={true} path="/" component={HomePage} exact={true}/>
        <PublicRoute loggedIn={loggedIn} restricted={true} path="/login" component={Login} exact={true}/>
        <PublicRoute loggedIn={loggedIn} restricted={true} path="/register" component={Register} exact={true}/>
        <PublicRoute loggedIn={loggedIn} path="/public/project/:id" component={PublicProject} exact={true}/>
        <PrivateRoute loggedIn={loggedIn} path="/project/:id" component={Project} exact={true}/>
        <PrivateRoute loggedIn={loggedIn} path="/projects" component={ProjectsList} exact={true}/>
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
