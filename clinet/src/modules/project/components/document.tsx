import React from "react";
import {IDocument} from "../../../models/IDocument";
import {Box, Button, Heading} from "grommet";
import ReactMarkdown from "react-markdown";
import {CodeBlock} from "./codeBlock";
import {Edit, Trash} from "grommet-icons";

interface IProps {
    document: IDocument
    onEdit: (document: IDocument) => void
    onDelete: (id: string) => void
}

export const Document: React.FC<IProps> = ({document, onEdit, onDelete}) => {
    return (
<Box>
    

    <Box direction={"row"} justify={"between"}>

        <Heading>{document.documentTitle}</Heading>
        <Box direction={"row"}>
            <Button icon={<Edit/>} onClick={() => onEdit(document)} />
            <Button icon={<Trash/>} onClick={() => onDelete(document._id ||'')}/>
        </Box>
    </Box>
    <Box border={"all"} round={"medium"} pad={"medium"}>
            <ReactMarkdown source={document.content}
                           renderers={{code: CodeBlock}}
                           escapeHtml
            />
        </Box>
</Box>
    )
};