import React from "react";
import {IDocument} from "../../../models/IDocument";
import {Box, Heading} from "grommet";
import ReactMarkdown from "react-markdown";

interface IProps {
  document: IDocument  
}

export const Document: React.FC<IProps> = ({document}) => {
    return (
        <Box border={"all"} round={"medium"} pad={"medium"}>
            <Heading>{document.documentTitle}</Heading>
            <ReactMarkdown source={document.content} />          
        </Box>
    )
};