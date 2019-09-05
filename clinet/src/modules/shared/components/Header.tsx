import * as React from 'react'
import {Box, Button, Heading, Text} from "grommet";

interface IProps {
    user: string
    onLogout: () => void
    onAddProject: () => void
}

export const Header: React.FC<IProps> = ({ user, onLogout, onAddProject }) =>
    (
        <Box direction={"row"} align={"center"} justify={"between"} background={"#ff0000"}>
            <Box direction={"row"} align={"center"}>
                <Heading size={"medium"}>CADS</Heading>
                <Button title={"Logout"} onClick={onAddProject}/>
            </Box>
           <Box direction={"row"} align={"center"}>
               <Text >{user}</Text>
               <Button title={"Logout"} onClick={onLogout}/>
           </Box> 
        </Box>
    );