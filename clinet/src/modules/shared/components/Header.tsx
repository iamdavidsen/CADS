import * as React from 'react'
import { Box, Button, Heading } from "grommet";
import { Add , Group} from "grommet-icons";
import { Link, NavLink } from 'react-router-dom';
//@ts-ignore
import {theme } from '../../../theme';

interface IProps {
    onLogout: () => void
    onAddProject: () => void
    onAddUser?: () => void
}

const logoTextStyle: React.CSSProperties = {
    lineHeight: "10px",
    fontSize: "36px",
    textDecoration: "none",
    color: "white"
}

const buttonStyle: React.CSSProperties = {
    minHeight: "30px",
    margin: "0 0 0 0px",
    padding: "0px 10px 0 10px",
}

const navbarStyle: React.CSSProperties = {
    padding: "0 10px 0 10px",
    display: "flex",
    flex: "0 0 50px",
    boxShadow: "0px 4px 10px 2px rgba(0,0,0,0.30)"
}

export const Header: React.FC<IProps> = ({ onLogout, onAddProject, onAddUser }) =>
    (<Box style={navbarStyle} direction={"row"} align={"center"} justify={"between"} background={theme.global.colors.brand}>
        <Box direction={"row"} align={"center"}>
            <NavLink to={`/`} style={logoTextStyle}>
                <Heading style={logoTextStyle} size={"medium"}>CADS</Heading>
            </NavLink>
        </Box>
        <Box direction={"row"} align={"center"}>
                {onAddUser && <Button style={buttonStyle} title={"Add New Project"} onClick={onAddUser} icon={<Group/>}/> }
            <Button style={buttonStyle} title={"Add New Project"} onClick={onAddProject} icon={<Add />} />
            <Button style={buttonStyle} title={"Logout"} onClick={onLogout} label={"Logout"} />
        </Box>
    </Box>
    );