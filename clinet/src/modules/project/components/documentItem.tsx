import React, { ReactElement } from "react";
import {Box, Heading, Text} from "grommet";
import {IDocument} from "../../../models/IDocument";

const itemStyle: React.CSSProperties = {
    cursor: 'pointer'
};

const textStyle: React.CSSProperties = {
    overflow: "hidden",
    overflowWrap: "break-word",
    marginBottom: "8px",
    borderBottom: "1px solid black",
    
    
}

interface IProps {
    document: IDocument
    selected: boolean
    onClick: (document: IDocument) => void
}

export const DocumentItem: React.FC<IProps> = ({document, selected, onClick}) => {
    return (
        <Box style={itemStyle} onClick={() => onClick(document)}>
            <Text style={textStyle} color={selected ? "#FFFFFF": "#000000"}>
                {document.documentTitle || 'Unnamed'}
            </Text>
        </Box>
        
    )
};
