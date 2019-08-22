import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const publicRoute = ({component: Component, loggedIn, restricted, ...rest}: any) => {
    return (
        <Route {...rest} render={props => (
            loggedIn && restricted ?
                <Redirect to="/dashboard" />
                : <Component {...props} />
        )} />
    );
};

