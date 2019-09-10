import * as React from 'react'

import { Project } from "../../../../../Server/src/modules/projects/interfaces/project.interface";
import { Box, Heading, Text } from "grommet";
import { Link, NavLink } from "react-router-dom";

interface IProps {
    project: Project
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
    background: "#EFEEFE",
    borderRadius: "6px",
    padding: "10px 5px",
    width: "300px",
    height: "125px",
    wordBreak: "break-word",
    overflow: "hidden"
};


export const ProjectItem: React.FC<IProps> = ({ project }) => {
    return (
        <NavLink to={`/project/${project.id}`} style={linkStyle} >
            <Box style={boxStyle}>
                <Heading style={headingStyle}>{project.projectName}</Heading>
                <Text style={textStyle}>{project.description}</Text>
            </Box>
        </NavLink>
    )
};