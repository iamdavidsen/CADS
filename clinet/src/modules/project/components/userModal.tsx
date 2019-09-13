import * as React from 'react'
import {Trash} from "grommet-icons";

import {Box, Button, Heading, Layer, TextInput, Text} from "grommet";
import {ChangeEvent} from "react";
import {IMember} from "../../../models/IMember";

interface IProps {
    show: boolean
    onHide: () => void
    members: IMember[]
    userEmail: string
    changeAddUserEmail: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    removeUser: (email: string) => void
}


export const UserModal: React.FC<IProps> = ({
                                                          show,
                                                          onHide,
                                                          members,
                                                          userEmail,
                                                          changeAddUserEmail,
                                                          addUser,
                                                          removeUser,
                                                      }) => {
    if (!show) return null;

    return (
        <Layer
            onEsc={onHide}
            onClickOutside={onHide}
        >
            <Box pad={"large"} gap={"small"}>
                <Heading>{"Edit Users"}</Heading>
                <Box flex={"grow"}>
                    {members.map(m => (
                    <Box direction={"row"} align={"center"} justify={"between"}>
                        <Text>
                            {m.email}
                        </Text>
                        <Button onClick={() => removeUser(m.email)} icon={<Trash />}/>
                    </Box>
                ))}
                </Box>
                <Box>
                    <TextInput value={userEmail} onChange={changeAddUserEmail}/>
                    <Button onClick={addUser} label={"Add user"} color={"secondary"}/>
                </Box>
                <Box direction={"row"} justify={"end"} pad={"large"}>
                    <Button onClick={onHide} label={"Ok"} color={"primary"}/>
                </Box>
            </Box>
        </Layer>
    )
};
