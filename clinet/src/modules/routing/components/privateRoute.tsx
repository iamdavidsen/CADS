import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({component: Component, loggedIn, ...rest}: any) => {
    return (
        <Route {...rest} render={props => (
        loggedIn ?
            <Component {...props} /> :
            <Redirect to="/login" />
)} />
);
};

