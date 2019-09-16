import React from 'react';
import {Button, Heading} from "grommet";
import {Link} from "react-router-dom";
import { theme } from '../../theme';

const backgroundStyle: React.CSSProperties = {
    background: "url(https://images.unsplash.com/photo-1443694910004-3567042689f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
};

const titleContainer: React.CSSProperties = {
    flex: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const titleStyle: React.CSSProperties = {
    flex: 3,
    fontSize: "4em",
    color: theme.global.colors.brandDark
};

const buttonContainerStyle: React.CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    justifySelf: "flex-end"
};

const HomePage: React.FunctionComponent = () => {
    return (
        <div style={backgroundStyle}>
            <div style={titleContainer}>
                <Heading style={titleStyle}>
                    Cloud API Documentation System
                </Heading>
            </div>
            <div style={buttonContainerStyle}>
                <Link to={"/register"}><Button primary fill label={"Create User"}/></Link>
                <Link to={"/login"}><Button plain label={"Login"} color={theme.global.colors.brandDark}/></Link>
            </div>
        </div>
    );
};

export default HomePage;
