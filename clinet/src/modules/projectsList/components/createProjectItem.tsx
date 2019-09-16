import * as React from 'react'

import { Box, Heading, Text } from "grommet";
import { theme } from '../../../theme';

const textStyle: React.CSSProperties = {
    color: "black",
    fontSize: "16px",
    textAlign: "center",
};

const itemStyle: React.CSSProperties = {
    background: "#FFFFFF",
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
    cursor: "pointer",
    boxShadow: "2.5px 2.5px 8px 0px rgba(0,0,0,0.30)"
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
