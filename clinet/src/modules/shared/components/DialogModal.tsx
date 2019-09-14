import * as React from 'react'

import {Box, Button, Form, Heading, Layer, Text, TextArea, TextInput} from "grommet";
import {ChangeEvent} from "react";
import {IDocument} from "../../../models/IDocument";

interface IProps {
    show: boolean
    title: string
    content: string
    acceptText: string
    onHide: () => void
    onAccept: () => void
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


export const DialogModal: React.FC<IProps> = ({
                                                  show,
                                                  title,
                                                  content,
                                                  acceptText,
                                                  onHide,
                                                  onAccept

                                              }) => {
    if (!show) return null;

    return (
        <Layer
            onEsc={onHide}
            onClickOutside={onHide}
        >
            <Box alignContent="center"
                 justify="center"
                 alignSelf="center"
                 pad="large">
                <Heading>{title}</Heading>
                <Text>
                    {content}
                </Text>
                <Box direction={"row"} justify={"end"} style={boxStyle}>
                    <Button onClick={onHide} margin="0 15px 0 0" label={"Cancel"} plain color={"secondaryDark"}/>
                    <Button onClick={onAccept} label={acceptText} color={"primary"}/>
                </Box>
            </Box>
        </Layer>
    )
};
