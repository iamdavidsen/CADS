import * as React from 'react'

import { Box, Heading, Text } from "grommet";

const headingStyle: React.CSSProperties = {
    color: "black",
    margin: "0 0 13px 0",
    fontSize: "20px",
    lineHeight: "25px"
};

const itemStyle: React.CSSProperties = {
    background: "#EFEEFE",
    borderRadius: "6px",
    padding: "10px 5px",
    width: "300px",
    height: "125px",
    wordBreak: "break-word",
    overflow: "hidden"
};

interface IProps {
   addProject: () => void 
}


export const CreateProjectItem: React.FC<IProps> = ({ addProject }) => {
    return (
            <Box style={itemStyle} onClick={addProject}>
                <Heading style={headingStyle}>Create Project</Heading>
            </Box>
    )
};
