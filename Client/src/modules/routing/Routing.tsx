import {IonPage, IonRouterOutlet} from "@ionic/react";
import {Redirect, Route} from "react-router";
import React from "react";
import {connect} from "react-redux";

import List from "../../pages/List";
import HomePage from "../home/Home";

interface IProps {
    loggedIn: boolean
}

const Routing = ({ loggedIn }: IProps) => (
    <IonRouterOutlet>
        <Route path="/:tab(home)" component={HomePage} exact={true}/>
        <Route path="/:tab(home)/list" component={List} exact={true}/>
        <Route exact path="/" render={() => <Redirect to="/home"/>}/>
    </IonRouterOutlet>
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
