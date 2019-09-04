import * as React from 'react'
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {getProjects} from "../../actions/project/getProjects";
import {ProjectItem} from "./components/projectItem";
import {Header} from "../shared/components/Header";
import {logout} from "../../actions/auth/logout";
import {Box} from "grommet";

interface IProps {
    projects?: any[]
    actions: {
        getProjects: () => void
        logout: () => void
    }
}

interface IState {

}

const projectListStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "100%"
};

const listStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap'
};

class ProjectList extends React.Component<IProps, IState> {
    componentWillMount(): void {
        this.props.actions.getProjects();
    }
    
    onAddProject = () => {
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {projects, actions: { logout }} = this.props;

        return (
            <div style={projectListStyle}>
                <Header user={"hello user"} onLogout={logout} onAddProject={this.onAddProject}/>
                <Box direction={"row"} style={listStyle} justify={"center"}>
                    {projects && projects.map(p => (<ProjectItem project={p}/>))}
                </Box>
            </div>
        );
    }
}

const fakeprojectData = [
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "HHahahhahhahhah" },
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "HHahahhahhahhah" },
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "HHahahhahhahhah" },
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "HHahahhahhahhah" },
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "HHahahhahhahhah" },
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "HHahahhahhahhah" },
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "HHahahhahhahhah" },
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "HHahahhahhahhah" },
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "HHahahhahhahhah" },
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "HHahahhahhahhah" },
];

const mapStateToProps = (state: any) => {
    return {
        projects: fakeprojectData
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: {
            getProjects: () => dispatch(getProjects() as any),
            logout: () => dispatch(logout() as any)
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectList)
