import React, { ChangeEvent, Component } from 'react';
import { Box } from "grommet";
import { Button, Form, FormField, Heading, TextInput } from "grommet/es6";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { withRouter } from "react-router";

import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../../constants";

import { login } from "../../actions/auth/login";
import { theme } from '../../theme';
import { Link } from 'react-router-dom';

interface IProps {
    loginStatus: string
    actions: {
        login: (email: string, password: string) => void
    }
}

interface IState {
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

class Login extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    componentWillUpdate(nextProps: Readonly<IProps>, nextState: Readonly<IState>, nextContext: any): void {
        if (this.props.loginStatus === LOGIN_FAILURE && this.props.loginStatus !== nextProps.loginStatus) {
            // On failure
        }
    }

    onChange = (e: ChangeEvent<HTMLInputElement>) => this.setState({ [e.target.name]: e.target.value } as any);

    onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { email, password } = this.state;

        this.props.actions.login(
            email,
            password
        )
    };

    render() {
        const { email, password } = this.state;
        return (
            <Box style={backgroundStyle}>
                <Box
                    alignSelf={"center"}
                    direction="column"
                    pad="medium"
                    background="#FFFFFF"
                >
                    <Heading>Login</Heading>
                    <Form onSubmit={this.onSubmit}>
                        <FormField label="Email">
                            <TextInput type={"email"} required name={"email"} onChange={this.onChange} value={email} />
                        </FormField>
                        <FormField label="Password">
                            <TextInput type={"Password"} required name={"password"} onChange={this.onChange} 
                            value={password} />
                        </FormField>
                        <Button type="submit" primary label="Login" />
                    </Form>
                        <Link to={"/register"}><Button plain label={"Sign up"} color={theme.global.colors.brandDark} 
                        margin="5px 0 0 24px" /></Link>
                </Box>
            </Box>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        loginStatus: state.auth.loginStatus
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: {
            login: (e: string, p: string) => dispatch(login(e, p) as any)
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Login as any))
