import React from "react";
import {IDocument} from "../../../models/IDocument";
import {Box, Heading} from "grommet";
import {IProject} from "../../../models/IProject";
import {DocumentItem} from "./documentItem";

interface IProps {
    project?: IProject
    documents?: IDocument[]
    onClickItem: (document: IDocument) => void
}

export const DocumentList: React.FC<IProps> = ({project, documents, onClickItem}) => {
    return (
        <Box>
            <Heading>{project && project.projectName}</Heading>
            <Box>
                {documents && documents.map(d => <DocumentItem onClick={onClickItem} document={d}/>)}
            </Box>
        </Box>
    )
};
