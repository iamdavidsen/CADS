import * as React from 'react'

import {Box, Button, Heading, Layer, Text, TextInput} from "grommet";
import {ChangeEvent} from "react";

interface IProps {
    shot: boolean
    onHide: () => void
    title: string
    description?: string
    changeTitle: (e: ChangeEvent<HTMLInputElement>) => void
    changeDescription: (e: ChangeEvent<HTMLInputElement>) => void
    createProject: () => void
}


export const CreateProjectModal: React.FC<IProps> = ({
                                                         shot,
                                                         onHide,
                                                         title,
                                                         description,
                                                         changeTitle,
                                                         changeDescription,
    createProject
                                                     }) => {
    if (!shot) return null;

    return (
        <Layer
            onEsc={onHide}
            onClickOutside={onHide}
            full
        >
            <Box pad={"large"}>
                <Heading>Create Project</Heading>
                <TextInput value={title} onChange={changeTitle}/>
                <TextInput value={description || ''} onChange={changeDescription}/>
                <Box direction={"row"} justify={"end"} pad={"large"}>
                    <Button onClick={onHide} label={"Cancel"} plain color={"secondary"}/>
                    <Button onClick={createProject} label={"Create"} color={"primary"}/>
                </Box>
            </Box>
        </Layer>
    )
};
