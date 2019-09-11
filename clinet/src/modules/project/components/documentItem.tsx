import React from "react";
import {Box, Heading, Text} from "grommet";
import {IDocument} from "../../../models/IDocument";

interface IProps {
    document: IDocument
    onClick: (document: IDocument) => void
}

export const DocumentItem: React.FC<IProps> = ({document, onClick}) => {
    return (
        <li onClick={() => onClick(document)}>
            <Text>
                {document.documentTitle}
            </Text>
        </li>
        
    )
};
