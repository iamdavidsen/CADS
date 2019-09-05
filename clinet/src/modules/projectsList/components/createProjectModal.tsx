import * as React from 'react'

import {Box, Button, Heading, Layer, Text, TextInput} from "grommet";

interface IProps {
    shot: boolean
    onHide: () => void
}


export const CreateProjectModal: React.FC<IProps> = ({ shot, onHide }) => {
    if (!shot) return null;
    
    return (
        <Layer
            onEsc={onHide}
            onClickOutside={onHide}
            full
        >
            <Box pad={"large"}>
                <Heading>Create Project</Heading>
                <TextInput/>
                <Box direction={"row"} justify={"end"} pad={"large"}>
                    <Button onClick={onHide} label={"Cancel"} plain color={"secondary"}/>
                    <Button label={"Create"} color={"primary"}/>
                </Box>
            </Box>
        </Layer>
)
};
