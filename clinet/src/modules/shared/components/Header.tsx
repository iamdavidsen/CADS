import * as React from 'react'
import { Box, Button, Heading, Text } from "grommet";
import { Link, NavLink } from 'react-router-dom';

interface IProps {
    user: string
    onLogout: () => void
    onAddProject: () => void
}

const logoTextStyle: React.CSSProperties = {
    lineHeight: "10px",
    fontSize: "36px",
    textDecoration: "none",
    color: "white"
}

const buttonStyle: React.CSSProperties = {
    height: "30px",
    margin: "0 0 0 0px",
    padding: "0px 10px 0 10px",
}

const navbarStyle: React.CSSProperties = {
    padding: "0 10px 0 10px",
}

export const Header: React.FC<IProps> = ({ user, onLogout, onAddProject }) =>
    (
        <Box style={navbarStyle} direction={"row"} align={"center"} justify={"between"} background={"#0077F0"}>
            <Box direction={"row"} align={"center"}>
                <NavLink to={`/`} style={logoTextStyle}>
                    <Heading style={logoTextStyle} size={"medium"}>CADS</Heading>
                </NavLink>
            </Box>
            <Box direction={"row"} align={"center"}>
                <Button style={buttonStyle} title={"Add New Project"} onClick={onAddProject}>Add New Project</Button>
                <Text>{user}</Text>
                <Button style={buttonStyle} title={"Logout"} onClick={onLogout}>Logout</Button>
            </Box>
        </Box>
    );