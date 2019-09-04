import React, {ChangeEvent, Component} from 'react';
import {Box} from "grommet";
import {Button, Form, FormField, Heading, TextInput} from "grommet/es6";
import {connect} from "react-redux";
import {Dispatch} from "redux";

import {withRouter} from "react-router";

import {LOGIN_FAILURE, LOGIN_SUCCESS} from "../../constants";

import {login} from "../../actions/auth/login";

interface IProps {
    loginStatus: string
    actions: {
        login: (email: string, password: string)  => void
    }
}

interface IState {
    email: string
    password: string
}

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

    onChange = (e: ChangeEvent<HTMLInputElement>) => this.setState({[e.target.name]: e.target.value} as any);

    onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { email, password } = this.state;

        this.props.actions.login(
            email,
            password
        )
    };

    render() {
        const { email, password} = this.state;
        return (
            <Box
                alignSelf={"center"}
                direction="column"
                border={{color: 'brand', size: "small"}}
                pad="medium"
            >
                <Heading>Login</Heading>
                <Form onSubmit={this.onSubmit}>
                    <FormField label="Email">
                        <TextInput type={"email"} required name={"email"} onChange={this.onChange} value={email}/>
                    </FormField>
                    <FormField label="Password">
                        <TextInput type={"Password"} required name={"password"} onChange={this.onChange} value={password}/>
                    </FormField>
                    <Button type="submit" primary label="Submit"/>
                </Form>
            </Box>);
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
