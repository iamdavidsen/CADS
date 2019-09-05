import * as React from 'react'
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {getProjects} from "../../actions/project/getProjects";
import {ProjectItem} from "./components/projectItem";
import {Header} from "../shared/components/Header";
import {logout} from "../../actions/auth/logout";
import {Box} from "grommet";
import {CreateProjectModal} from "./components/createProjectModal";
import {AppState} from "../../reducers";

interface IProps {
    projects?: any[]
    actions: {
        getProjects: () => void
        logout: () => void
    }
}

interface IState {
    showCreateProjectModal: boolean
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
    constructor(props: IProps) {
        super(props)
        
        this.state = {
            showCreateProjectModal: false
        }
    }
    
    componentWillMount(): void {
        this.props.actions.getProjects();
    }
    
    onAddProject = () => {
        this.setState({showCreateProjectModal: true})
    };
    
    hideModal = () => {
        this.setState({ showCreateProjectModal: false })
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {projects, actions: { logout }} = this.props;
        const { showCreateProjectModal } = this.state;

        return (
            <div style={projectListStyle}>
                <Header user={"user"} onLogout={logout} onAddProject={this.onAddProject}/>
                <Box direction={"row"} style={listStyle} justify={"center"}>
                    {projects && Array.isArray(projects) && projects.map(p => (<ProjectItem project={p} />))}
                </Box>
                <CreateProjectModal shot={showCreateProjectModal} onHide={this.hideModal} />
            </div>
        );
    }
}


const fakeprojectData = [
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "Test" },
    { id: "fuck this", creator: "", members: [], description: "This is a desc This is a desc This is a desc This is a desc This is a desc This is a desc This is a desc ", projectName: "This Is A Test On A Long Heading Name" },
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "HHahahhahhahhah" },
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "HHahahhahhahhah" },
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "HHahahhahhahhah" },
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "HHahahhahhahhah" },
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "HHahahhahhahhah" },
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "HHahahhahhahhah" },
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "HHahahhahhahhah" },
    { id: "fuck this", creator: "", members: [], description: "This is a desc", projectName: "HHahahhahhahhah" },
];

const mapStateToProps = (state: AppState) => {
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
