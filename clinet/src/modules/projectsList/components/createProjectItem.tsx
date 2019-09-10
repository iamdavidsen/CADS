import * as React from 'react'

import { Box, Heading, Text } from "grommet";

const textStyle: React.CSSProperties = {
    color: "black",
    fontSize: "16px",
    textAlign: "center",
};

const itemStyle: React.CSSProperties = {
    background: "#EFEEFE",
    borderRadius: "6px",
    padding: "10px 5px",
    width: "300px",
    height: "125px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    wordBreak: "break-word",
    overflow: "hidden",
    margin: "16px",
    cursor: "pointer"
};

interface IProps {
    addProject: () => void
}


export const CreateProjectItem: React.FC<IProps> = ({ addProject }) => {
    return (
        <Box style={itemStyle} onClick={addProject}>
            <text style={textStyle}>Create new Project</text>
        </Box>
    )
};
