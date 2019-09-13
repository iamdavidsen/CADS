import * as React from 'react'

import { Box, Heading, Text } from "grommet";
import { Link, NavLink } from "react-router-dom";
import {IProject} from "../../../models/IProject";
import {theme} from "../../../theme";

interface IProps {
    project: IProject
}

const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    margin: "16px"
};

const textStyle: React.CSSProperties = {
    color: "black",
    fontSize: "16px"
}
const headingStyle: React.CSSProperties = {
    color: "black",
    margin: "0 0 13px 0",
    fontSize: "20px",
    lineHeight: "25px"
}

const boxStyle: React.CSSProperties = {
    borderRadius: "6px",
    padding: "10px 5px",
    width: "300px",
    height: "125px",
    wordBreak: "break-word",
    overflow: "hidden",
    boxShadow: "2.5px 2.5px 8px 0px rgba(0,0,0,0.30)"
};


export const ProjectItem: React.FC<IProps> = ({ project }) => {
    return (
        <NavLink to={`/project/${project._id}`} style={linkStyle} >
            <Box style={{...boxStyle,background: project.color}}>
                <Heading style={headingStyle}>{project.projectName}</Heading>
                <Text style={textStyle}>{project.description}</Text>
            </Box>
        </NavLink>
    )
};