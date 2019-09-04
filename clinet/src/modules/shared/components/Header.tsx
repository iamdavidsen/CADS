import * as React from 'react'
import {Logo} from "./Logo";
import {Box, Button, Heading, Text} from "grommet";

interface IProps {
    user: string
    onLogout: () => void
    onAddProject: () => void
}

const headerStyle: React.CSSProperties = {
    height: "40px",
    width: "100%",
    background: "#32ff42",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
};


export const Header: React.FC<IProps> = ({ user, onLogout, onAddProject }) =>
    (
        <Box direction={"row"} align={"center"} justify={"between"}>

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