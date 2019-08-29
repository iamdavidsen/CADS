import * as React from 'react'

import {Project} from "../../../../../Server/src/modules/projects/interfaces/project.interface";
import {Heading} from "grommet";

interface IProps {
    project: Project
}

const itemStyle: React.CSSProperties = {
    
};


export const ProjectItem: React.FC<IProps> = ({ project }) => {
   const bgStyle: React.CSSProperties = {
       backgroundImage: `url('${project.imgUrl}')`
   };
    
  return (
      <div style={{ ...itemStyle, ...bgStyle }}>
          <Heading>{project.projectName}</Heading>
      </div>
  )  
};