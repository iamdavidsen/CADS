import React, {ChangeEvent, Component} from 'react';
import {Button, Form, FormField, Heading, TextInput, Image, Menu} from "grommet/es6";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {logout} from "../../../actions/auth/logout"; 

import {Link} from "react-router-dom";

interface IProps {
    user?: {
        access_token: string,
        username: string,
        profilePictureUrl?: string
    }
    actions: {
        logout: () => void
    }
}

interface IState {
}

class LoggedInUser extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
        }
    }
    
    renderNotLoggedIn = () => (
        <div>
            <Link to={"/register"}><Button plain primary fill label={"Create User"}/></Link>
            <Link to={"/login"}><Button plain label={"Login"}/></Link>
        </div>
    );
    
    logout = () => {
      this.props.actions.logout()  
    };
    
    actions = [
        { label: 'Logout', onClick: logout } ,
    ];
    

    render() {
        const {user} = this.props;
        
        if (!user) return this.renderNotLoggedIn();
        
        return (
            <Menu icon={(<Image src={user.profilePictureUrl}/>)} items={this.actions}/>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.auth.user && state.auth.user
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: {
            logout: () => dispatch(logout())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoggedInUser)
