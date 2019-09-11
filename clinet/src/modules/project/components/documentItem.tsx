import React from "react";
import {Box, Heading, Text} from "grommet";
import {IDocument} from "../../../models/IDocument";

const itemStyle: React.CSSProperties = {
    cursor: 'pointer'
};

interface IProps {
    document: IDocument
    selected: boolean
    onClick: (document: IDocument) => void
}

export const DocumentItem: React.FC<IProps> = ({document, selected, onClick}) => {
    return (
        <Box style={itemStyle} onClick={() => onClick(document)}>
            <Text color={selected ? "#0077F0": "#000000"}>
                {document.documentTitle}
            </Text>
        </Box>
        
    )
};
