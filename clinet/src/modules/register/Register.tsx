import React, {ChangeEvent, Component} from 'react';
import {Box} from "grommet";
import {Button, Form, FormField, TextInput} from "grommet/es6";
import {connect} from "react-redux";
import {Dispatch} from "redux";

import {RegisterDto} from "../../../../Server/src/modules/auth/dto/register.dto";
import {registerUser} from "../../actions/auth/registerUser";

interface IProps {
    actions: {
        registerUser: (registerDto: RegisterDto) => void
    }
}

interface IState {
    username: string
    email: string
    password: string
    repeatPassword: string
}

class Register extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            repeatPassword: ''
        }
    }

    onChange = (e: ChangeEvent<HTMLInputElement>) => this.setState({[e.target.name]: e.target.value} as any);

    onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const { email, username, password } = this.state;
        
        this.props.actions.registerUser({
            email,
            username,
            password
        })
    };

    render() {
        const {username, email, password, repeatPassword} = this.state;
        return (
            <Box
                alignSelf={"center"}
                direction="row"
                border={{color: 'brand', size: "small"}}
                pad="medium"
            >
                <Form onSubmit={this.onSubmit}>
                    <FormField label="Username">
                        <TextInput name={"username"} onChange={this.onChange} value={username}/>
                    </FormField>
                    <FormField required label="Email"
                               value={email}>
                        <TextInput type={"email"} name={"email"} onChange={this.onChange} value={email}/>
                    </FormField>
                    <FormField label="Password"
                               value={password}>
                        <TextInput name={"password"} onChange={this.onChange} value={password}/>
                    </FormField>
                    <FormField label="Repeat password">
                        <TextInput name={"repeatPassword"} onChange={this.onChange} value={repeatPassword}/>
                    </FormField>
                    <Button type="submit" primary label="Submit"/>
                </Form>

            </Box>);
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: {
            registerUser: (registerDto: RegisterDto) => dispatch(registerUser(registerDto) as any)
        }
    }
};

export default connect(
    null,
    mapDispatchToProps
)(Register)
