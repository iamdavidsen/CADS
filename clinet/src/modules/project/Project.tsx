import * as React from 'react'
import {Dispatch} from "redux";
import { connect } from "react-redux";

import { Header } from "../shared/components/Header";
import { logout } from "../../actions/auth/logout";
import { CreateProjectModal } from "../projectsList/components/createProjectModal";
import { Box } from 'grommet';

interface IProps {
    actions: {
        logout: () => void
    }
}

interface IState {
    
}

const pageStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "100%"
};

const whereDoIGo: React.CSSProperties = {
    textAlign: "center",
    margin: "30% 0 0 0"
}

class Project extends React.Component {
    onAddProject = () => {
        this.setState({ showCreateProjectModal: true })
    };

   render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
       return (
           <div style={pageStyle}>
               <Header onLogout={logout} onAddProject={this.onAddProject} />
               <div style={whereDoIGo}> I don't know where i should be? :( </div>
           </div>
       );
   }
}

const mapStateToProps = (state: any) => {
    return {
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Project)
