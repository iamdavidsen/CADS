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
            <Box pad={"large"} height={"xxlarge"} width={"large"} gap={"small"}>
                <Heading>{document._id ? "Edit Document" : "Create Document"}</Heading>
                <TextInput value={document.documentTitle} onChange={changeTitle}  />
                <Box flex={"grow"}>
                    <TextArea resize={false} fill value={document.content || ''} onChange={changeContent}/>
                </Box>
                <Box direction={"row"} justify={"end"} pad={"large"}>
                    <Button onClick={onHide} label={"Cancel"} plain color={"secondary"}/>
                    {
                        document._id ? <Button onClick={saveDocument} label={"Save"} color={"primary"}/> :
                            <Button onClick={createDocument} label={"Create"} color={"primary"}/>
                    }
                </Box>
            </Box>
        </Layer>
    )
};
