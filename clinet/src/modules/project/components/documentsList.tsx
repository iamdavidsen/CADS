import React, {ChangeEvent} from "react";
import {IDocument} from "../../../models/IDocument";
import {Box, Heading, TextInput} from "grommet";
import {IProject} from "../../../models/IProject";
import {DocumentItem} from "./documentItem";
import {theme} from "../../../theme"

const listStyle: React.CSSProperties = {
    flex: "0 1 350px"
};

const boxStyle: React.CSSProperties = {
    background: "#d8d8d8",
    marginTop: "10px",
    boxShadow: "2.5px 2.5px 8px 0px rgba(0,0,0,0.30)",
    borderRadius: "5px",
    padding: "5px 10px"
};

const BoxShadowStyle: React.CSSProperties = {
    boxShadow: "2.5px 2.5px 8px 0px rgba(0,0,0,0.30)"
}

const textStyle: React.CSSProperties = {
    lineHeight: "20px",
    marginBottom: "10px" 
}


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
            <Heading level={2} >{project && project.projectName}</Heading>
            
            <Heading level={4} style={textStyle} >Documents</Heading>
            <TextInput placeholder={"Search"} onChange={onSearchChange} value={search} style={BoxShadowStyle}/>
            <Box style={boxStyle}>
                {documents && documents.map(d => <DocumentItem selected={d._id == selectedId} onClick={onClickItem} document={d}/>)}
            </Box>
        </Box>
    )
};
