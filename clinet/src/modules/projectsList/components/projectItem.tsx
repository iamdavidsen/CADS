import * as React from 'react'

import {Box, Button, Heading, Text} from "grommet";
import { Link, NavLink } from "react-router-dom";
import {IProject} from "../../../models/IProject";
import {Edit, Trash} from "grommet-icons";

const linkStyle: React.CSSProperties = {
    textDecoration: "none",
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

interface IProps {
    project: IProject
    onEditProject: (project: IProject) => void
    onDeleteProject: (project: IProject) => void
}

export const ProjectItem: React.FC<IProps> = ({ project, onDeleteProject, onEditProject }) => {
    return (
        <Box margin={"xsmall"}>

            <Box direction={"row"} justify={"between"}>
                <Heading style={headingStyle}>{project.projectName}</Heading>
                <Box justify={"end"} direction={"row"}>
                    <Button icon={<Edit />} onClick={() => onEditProject(project)} />
                    <Button icon={<Trash/>} onClick={() => onDeleteProject(project) }/>
                </Box>
            </Box>
            <NavLink to={`/project/${project._id}`} style={linkStyle} >
                <Box style={{...boxStyle,background: project.color}}>
                    <Text style={textStyle}>{project.description}</Text>
                </Box>
            </NavLink>
        </Box>
    )
};