import * as React from 'react'
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {getProjects} from "../../actions/project/getProjects";
import {ProjectItem} from "./components/projectItem";
import {Header} from "../shared/components/Header";
import {logout} from "../../actions/auth/logout";
import {Box, Heading} from "grommet";
import {CreateProjectModal} from "./components/createProjectModal";
import {AppState} from "../../reducers";
import {CreateProjectDto} from "../../../../Server/src/modules/projects/dto/createProject.dto";
import {createProject} from "../../actions/project/createProject";
import {ChangeEvent} from "react";
import {CreateProjectItem} from "./components/createProjectItem";
import {CREATE_PROJECT_SUCCESS, DELETE_PROJECT_SUCCESS, UPDATE_PROJECT_SUCCESS} from "../../constants";
import {IProject} from "../../models/IProject";
import {IWithId} from "../shared/Utils/IWithId";
import {EditProjectDto} from "../../../../Server/src/modules/projects/dto/editProject.dto";
import {editProject} from "../../actions/project/editProject";
import {deleteProject} from "../../actions/project/deleteProject";
import {DialogModal} from "../shared/components/DialogModal";

interface IProps {
    projects?: IProject[]
    createProjectStatus: string
    updateProjectStatus: string
    deleteProjectStatus: string
    actions: {
        getProjects: () => void
        logout: () => void
        createProject: (project: CreateProjectDto) => void
        editProject: (projectId: string, project: EditProjectDto) => void
        deleteProject: (projectId: string) => void
    }
}

interface IState {
    showCreateProjectModal: boolean,
    showDeleteProjectModal: boolean,
    createProjectDto: CreateProjectDto & IWithId,
}

class ProjectList extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            showCreateProjectModal: false,
            showDeleteProjectModal: false,
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

        if (this.props.updateProjectStatus == UPDATE_PROJECT_SUCCESS && this.props.updateProjectStatus != prevProps.updateProjectStatus) {
            this.hideModal()
        }

        if (this.props.deleteProjectStatus == DELETE_PROJECT_SUCCESS && this.props.deleteProjectStatus != prevProps.deleteProjectStatus) {
            this.onHideDeleteModal()
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
        this.setState({showCreateProjectModal: false})
    };

    createProject = () => {
        this.props.actions.createProject(this.state.createProjectDto)
    };

    saveProject = () => {
        const project = this.state.createProjectDto;

        if (!project || !project._id) return;

        this.props.actions.editProject(project._id, project)
    };

    deleteProject = () => {
        const project = this.state.createProjectDto;

        if (!project || !project._id) return;

        this.props.actions.deleteProject(project._id)
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

    onOpenEditModal = (project: IProject) => {
        this.setState({createProjectDto: project, showCreateProjectModal: true})
    };

    onHideDeleteModal = () => {
        this.setState({showDeleteProjectModal: false})
    }

    onOpenDeleteModal = (project: IProject) => {
        this.setState({createProjectDto: project, showDeleteProjectModal: true})
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {projects, actions: {logout}} = this.props;
        const {showCreateProjectModal, showDeleteProjectModal, createProjectDto: {description, projectName, _id}} = this.state;

        return (
            <Box width={"100%"} height={"100%"}>
                <Header onLogout={logout} onAddProject={this.onAddProject}/>
                <Heading alignSelf={"center"}>Cloud API Documentation System Projects</Heading>
                <Box direction={"row"} wrap justify={"center"} overflow={"auto"}>
                    {projects && Array.isArray(projects) && projects.map(p => (
                        <ProjectItem onDeleteProject={this.onOpenDeleteModal} onEditProject={this.onOpenEditModal}
                                     project={p}/>))}
                    <CreateProjectItem addProject={this.onAddProject}/>
                </Box>
                <CreateProjectModal edit={Boolean(_id)} shot={showCreateProjectModal} onHide={this.hideModal}
                                    description={description}
                                    title={projectName}
                                    changeDescription={this.changeProjectDesc}
                                    changeTitle={this.changeProjectTitle}
                                    createProject={Boolean(_id) ? this.saveProject : this.createProject}
                />
                <DialogModal show={showDeleteProjectModal} title={"Delete Project"}
                             content={`Are you sure you want to delete ${projectName}?`} acceptText={"Delete"}
                             onHide={this.onHideDeleteModal} onAccept={this.deleteProject}/>
            </Box>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        projects: state.project.projects,
        createProjectStatus: state.project.createProjectStatus,
        updateProjectStatus: state.project.updateProjectStatus,
        deleteProjectStatus: state.project.deleteProjectStatus
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: {
            getProjects: () => dispatch(getProjects() as any),
            logout: () => dispatch(logout() as any),
            createProject: (project: CreateProjectDto) => dispatch(createProject(project) as any),
            editProject: (projectId: string, project: EditProjectDto) => dispatch(editProject(projectId, project) as any),
            deleteProject: (projectId: string) => dispatch(deleteProject(projectId) as any)
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectList)
