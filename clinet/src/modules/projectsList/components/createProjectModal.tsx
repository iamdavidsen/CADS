import * as React from 'react'

import {Box, Button, CheckBox, Heading, Layer, Text, TextInput} from "grommet";
import { ChangeEvent } from "react";

interface IProps {
    shot: boolean
    onHide: () => void
    _id?: string
    title?: string
    description?: string
    isPublic?: boolean
    changeTitle: (e: ChangeEvent<HTMLInputElement>) => void
    changeDescription: (e: ChangeEvent<HTMLInputElement>) => void
    changePublic: (e: ChangeEvent<any>) => void
    createProject: () => void
}

const headingStyle: React.CSSProperties = {
    color: "black",
    margin: "15px 0 0 0",
    fontSize: "20px",
    lineHeight: "30px"
};

const boxStyle: React.CSSProperties = {
    alignItems: "right",
    padding: "40px 0 0 0"
};

export const CreateProjectModal: React.FC<IProps> = ({
    shot,
    onHide,
    title,
    _id,
    description,
    isPublic,
    changeTitle,
    changeDescription,
    createProject,
    changePublic
}) => {
    if (!shot) return null;

    return (
        <Layer
            onEsc={onHide}
            onClickOutside={onHide}
        >
            <Box
                alignContent="center"
                height="100%"
                justify="center"
                alignSelf="center"
                pad="large"
            >

                <Heading>{_id ? "Edit Project" : "Create Project" }</Heading>

                <Heading style={headingStyle}>Title</Heading>
                <TextInput value={title} onChange={changeTitle} />

                <Heading style={headingStyle}>Description</Heading>
                <TextInput value={description || ''} onChange={changeDescription} />

                <Heading style={headingStyle}>Public</Heading>
                <CheckBox checked={isPublic} onChange={changePublic} />
                
                {
                    isPublic && _id && (
                        <Box>
                            <Heading style={headingStyle}>Share link</Heading>
                            <Text>
                                {`${window.location.protocol}//${window.location.host}/public/project/${_id}` }
                            </Text>
                        </Box>
                    )
                }

                <Box direction={"row"} justify={"end"} style={boxStyle}>
                    <Button onClick={onHide} margin="0 15px 0 0" label={"Cancel"} plain color={"secondaryDark"} />
                    <Button onClick={createProject} label={ _id ? "Save" : "Create"} color={"primary"} />
                </Box>
            </Box>
        </Layer>
    )
};
