import React, { ChangeEvent, Component } from 'react';
import { Box } from "grommet";
import { Button, Form, FormField, Heading, TextInput } from "grommet/es6";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { RegisterDto } from "../../../../Server/src/modules/auth/dto/register.dto";
import { registerUser } from "../../actions/auth/registerUser";
import { withRouter } from "react-router";

import { REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../../constants";
import { Link } from 'react-router-dom';
import { theme } from '../../theme';

interface IProps {
    history: any
    registerStatus: string
    actions: {
        registerUser: (registerDto: RegisterDto) => void
    }
}

interface IState {
    username: string
    email: string
    password: string
}

const backgroundStyle: React.CSSProperties = {
    background: "url(https://images.unsplash.com/photo-1443694910004-3567042689f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    justifyContent: "center"
};

class Register extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
        }
    }

    componentWillUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>, nextContext: any): void {
        if (this.props.registerStatus === REGISTER_USER_REQUEST && this.props.registerStatus !== nextProps.registerStatus) {
            this.handleRegister(nextProps.registerStatus)
        }
    }

    handleRegister = (registerStatus: string) => {
        switch (registerStatus) {
            case REGISTER_USER_FAILURE:
                return;
            case REGISTER_USER_SUCCESS:
                this.props.history.push(`/login`);
                return;
        }
    };

    onChange = (e: ChangeEvent<HTMLInputElement>) => this.setState({ [e.target.name]: e.target.value } as any);

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
        const { username, email, password } = this.state;
        return (
            <Box style={backgroundStyle}>
                <Box
                    alignSelf={"center"}
                    direction="column"
                    pad="medium"
                    background="#FFFFFF"
                >
                    <Heading>Register</Heading>
                    <Form onSubmit={this.onSubmit}>
                        <FormField label="Username">
                            <TextInput required name={"username"} onChange={this.onChange} value={username} />
                        </FormField>
                        <FormField required label="Email">
                            <TextInput type={"email"} name={"email"} onChange={this.onChange} value={email} />
                        </FormField>
                        <FormField label="Password">
                            <TextInput type={"password"} required name={"password"} onChange={this.onChange} value={password} />
                        </FormField>
                        <Button type="submit" primary label="Submit" />
                    </Form>
                    <Link to={"/login"}><Button plain label={"Login"} color={theme.global.colors.brandDark} margin="5px 0 0 24px" /></Link>
                </Box>
            </Box>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        registerStatus: state.auth.registerStatus
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: {
            registerUser: (registerDto: RegisterDto) => dispatch(registerUser(registerDto) as any)
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Register as any))
