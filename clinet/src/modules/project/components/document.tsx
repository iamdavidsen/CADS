import React from "react";
import {IDocument} from "../../../models/IDocument";
import {Box, Button, Heading} from "grommet";
import ReactMarkdown from "react-markdown";
import {CodeBlock} from "./codeBlock";
import {Edit, Trash} from "grommet-icons";

interface IProps {
    document: IDocument
    onEdit?: (document: IDocument) => void
    onDelete?: (id: string) => void
}

const boxStyle: React.CSSProperties = {
    boxShadow: "0px 4px 10px 2px rgba(0,0,0,0.30)"
}

export const Document: React.FC<IProps> = ({document, onEdit, onDelete}) => {
    return (
<Box>
    <Box direction={"row"} justify={"between"}>

        <Heading>{document.documentTitle}</Heading>
        <Box direction={"row"}>
            {onEdit && <Button icon={<Edit/>} onClick={() => onEdit(document)} />}
            {onDelete && <Button icon={<Trash/>} onClick={() => onDelete(document._id ||'')}/>}
        </Box>
    </Box>
    <Box border={"all"} round={"small"} pad={"medium"} style={boxStyle}>
            <ReactMarkdown source={document.content}
                           renderers={{code: CodeBlock}}
                           escapeHtml
            />
        </Box>
</Box>
    )
};