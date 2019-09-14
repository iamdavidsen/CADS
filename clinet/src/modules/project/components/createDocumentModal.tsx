import * as React from 'react'

import {Box, Button, Form, Heading, Layer, Text, TextArea, TextInput} from "grommet";
import {ChangeEvent} from "react";
import {IDocument} from "../../../models/IDocument";

interface IProps {
    show: boolean
    onHide: () => void
    document: IDocument
    changeTitle: (e: ChangeEvent<HTMLInputElement>) => void
    changeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void
    createDocument: () => void
    saveDocument: () => void
}

const headingStyle: React.CSSProperties = {
    color: "black",
    margin: "15px 0 0 0",
    fontSize: "20px",
    lineHeight: "30px"
}
const boxStyle: React.CSSProperties = {
    alignItems: "right",
    padding: "40px 0 0 0"
}


export const CreateDocumentModal: React.FC<IProps> = ({
                                                          show,
                                                          onHide,
                                                          document,
                                                          changeTitle,
                                                          changeContent,
                                                          createDocument,
                                                          saveDocument
                                                      }) => {
    if (!show) return null;

    return (
        <Layer
            onEsc={onHide}
            onClickOutside={onHide}
        >
            <Box alignContent="center"
                height={"xxlarge"}
                width={"large"}
                justify="center"
                alignSelf="center"
                pad="large">
                <Heading>{document._id ? "Edit Document" : "Create Document"}</Heading>
                <Heading style={headingStyle}>Title</Heading>
                <TextInput value={document.documentTitle} onChange={changeTitle}  />

                <Heading style={headingStyle}>Text</Heading>
                <Box flex={"grow"}>
                    <TextArea resize={false} fill value={document.content || ''} onChange={changeContent}/>
                </Box>
                <Box direction={"row"} justify={"end"} style={boxStyle}>
                    <Button onClick={onHide} margin="0 15px 0 0" label={"Cancel"} plain color={"secondaryDark"}/>
                    {
                        document._id ? <Button onClick={saveDocument} label={"Save"} color={"primary"}/> :
                            <Button onClick={createDocument} label={"Create"} color={"primary"}/>
                    }
                </Box>
            </Box>
        </Layer>
    )
};
