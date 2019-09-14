import React from 'react';
import {Button, Heading} from "grommet";
import {Link} from "react-router-dom";

const backgroundStyle: React.CSSProperties = {
    backgroundColor: "#1366FF",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
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
    color: "Antiquewhite"
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
                <Heading color={"brand"} style={titleStyle}>
                    Cloud API Documentation System
                </Heading>
            </div>
            <div style={buttonContainerStyle}>
                <Link to={"/register"}><Button primary fill label={"Create User"}/></Link>
                <Link to={"/login"}><Button plain label={"Login"}/></Link>
            </div>
        </div>
    );
};

export default HomePage;
