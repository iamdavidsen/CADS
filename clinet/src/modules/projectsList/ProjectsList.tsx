import * as React from 'react'
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { getProjects } from "../../actions/project/getProjects";
import { ProjectItem } from "./components/projectItem";
import { Header } from "../shared/components/Header";
import { logout } from "../../actions/auth/logout";
import { Box, Heading } from "grommet";
import { CreateProjectModal } from "./components/createProjectModal";
import { AppState } from "../../reducers";
import { CreateProjectDto } from "../../../../Server/src/modules/projects/dto/createProject.dto";
import { createProject } from "../../actions/project/createProject";
import { ChangeEvent } from "react";
import { CreateProjectItem } from "./components/createProjectItem";
import { CREATE_PROJECT_SUCCESS } from "../../constants";
import { IProject } from "../../models/IProject";

interface IProps {
    projects?: IProject[]
    createProjectStatus: string
    actions: {
        getProjects: () => void
        logout: () => void
        createProject: (project: CreateProjectDto) => void
    }
}

interface IState {
    showCreateProjectModal: boolean,
    createProjectDto: CreateProjectDto,
}

class ProjectList extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            showCreateProjectModal: false,
            createProjectDto: {
                projectName: '',
                description: ''
            }
        }
    }

    componentWillMount(): void {
        this.props.actions.getProjects();
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
        if (this.props.createProjectStatus == CREATE_PROJECT_SUCCESS && this.props.createProjectStatus != prevProps.createProjectStatus) {
            this.hideModal()
        }
    }

    onAddProject = () => {
        this.setState({
            showCreateProjectModal: true,
            createProjectDto: {
                projectName: '',
                description: ''
            }
        })
    };

    hideModal = () => {
        this.setState({ showCreateProjectModal: false })
    };

    createProject = () => {
        this.props.actions.createProject(this.state.createProjectDto)
    };

    changeProjectTitle = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            createProjectDto: {
                ...this.state.createProjectDto,
                projectName: e.target.value
            }
        })
    };

    changeProjectDesc = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            createProjectDto: {
                ...this.state.createProjectDto,
                description: e.target.value
            }
        })
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const { projects, actions: { logout } } = this.props;
        const { showCreateProjectModal, createProjectDto: { description, projectName } } = this.state;

        return (
                <Box width={"100%"} height={"100%"}>
                    <Header onLogout={logout} onAddProject={this.onAddProject} />
                    <Heading alignSelf={"center"} >Cloud API Documentation System Projects</Heading>
                    <Box direction={"row"} wrap justify={"center"} overflow={"auto"} >
                        {projects && Array.isArray(projects) && projects.map(p => (<ProjectItem project={p} />))}
                        <CreateProjectItem addProject={this.onAddProject} />
                    </Box>
                    <CreateProjectModal shot={showCreateProjectModal} onHide={this.hideModal} description={description}
                        title={projectName}
                        changeDescription={this.changeProjectDesc}
                        changeTitle={this.changeProjectTitle}
                        createProject={this.createProject}
                    />
                </Box>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        projects: state.project.projects,
        createProjectStatus: state.project.createProjectStatus
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: {
            getProjects: () => dispatch(getProjects() as any),
            logout: () => dispatch(logout() as any),
            createProject: (project: CreateProjectDto) => dispatch(createProject(project) as any)
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectList)
