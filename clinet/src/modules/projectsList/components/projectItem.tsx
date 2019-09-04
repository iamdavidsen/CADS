import * as React from 'react'

import {Project} from "../../../../../Server/src/modules/projects/interfaces/project.interface";
import {Box, Heading, Text} from "grommet";
import {Link, NavLink} from "react-router-dom";

interface IProps {
    project: Project
}

const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    margin: "16px"
};

const itemStyle: React.CSSProperties = {
   background: "#0000FF",
   borderRadius: "4px" 
};


export const ProjectItem: React.FC<IProps> = ({ project }) => {
   const bgStyle: React.CSSProperties = {
       backgroundImage: `url('${project.imgUrl}')`
   };
    
  return (
      <NavLink to={`/project/${project.id}`} style={linkStyle} >
          <Box style={itemStyle}>
              <Heading>{project.projectName}</Heading>
              <Text>{project.description}</Text>
          </Box>
      </NavLink>
  )  
};