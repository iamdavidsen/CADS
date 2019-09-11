import React, {ChangeEvent} from "react";
import {IDocument} from "../../../models/IDocument";
import {Box, Heading, TextInput} from "grommet";
import {IProject} from "../../../models/IProject";
import {DocumentItem} from "./documentItem";

const listStyle: React.CSSProperties = {
    flex: "0 1 300px"
};;

interface IProps {
    search: string
    project?: IProject
    documents?: IDocument[]
    selectedId?: string
    onClickItem: (document: IDocument) => void
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const DocumentList: React.FC<IProps> = ({search, project, documents, selectedId, onClickItem, onSearchChange}) => {
    return (
        <Box style={listStyle} pad={"medium"}>
            <Heading>{project && project.projectName}</Heading>
            
            <Heading level={4}>Documents</Heading>
            <TextInput placeholder={"Search"} onChange={onSearchChange} value={search}/>
            <Box>
                {documents && documents.map(d => <DocumentItem selected={d._id == selectedId} onClick={onClickItem} document={d}/>)}
            </Box>
        </Box>
    )
};
