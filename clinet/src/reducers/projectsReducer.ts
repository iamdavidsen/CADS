import {
    GET_PROJECTS_SUCCESS,
    CREATE_PROJECT_SUCCESS,
    CREATE_PROJECT_REQUEST,
    CREATE_PROJECT_FAILURE,
    GET_PROJECT_SUCCESS,
    GET_PROJECT_REQUEST,
    GET_PROJECT_FAILURE,
    GET_PROJECTS_REQUEST,
    GET_PROJECTS_FAILURE,
    GET_MEMBERS_SUCCESS,
    GET_MEMBERS_REQUEST,
    GET_MEMBERS_FAILURE
} from '../constants';

import {IProject} from "../models/IProject";
import {IMember} from "../models/IMember";

interface IProjectState {
    project?: IProject
    projects?: IProject[]
    members?: IMember[]
    getProjectStatus: string
    getProjectsStatus: string
    getMembersStatus: string
    createProjectStatus: string
}

const initialState: IProjectState = {
    getProjectStatus: '',
    getProjectsStatus: '',
    getMembersStatus: '',
    createProjectStatus: '',
};

export const project = (state = initialState, action: any): IProjectState => {
    switch (action.type as string) {

        //  GET PROJECT
        case GET_PROJECT_SUCCESS:
            return {
                ...state,
                project: action.data,
                getProjectStatus: action.type
            };
        case  GET_PROJECT_REQUEST:
        case  GET_PROJECT_FAILURE:
            return {
                ...state,
                getProjectStatus: action.type
            };

        //  GET PROJECTS
        case GET_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: action.data,
                getProjectsStatus: action.type
            };
        case  GET_PROJECTS_REQUEST:
        case  GET_PROJECTS_FAILURE:
            return {
                ...state,
                getProjectsStatus: action.type
            };

        //  GET Members
        case GET_MEMBERS_SUCCESS:
            return {
                ...state,
                members: action.data,
                getMembersStatus: action.type
            };
        case  GET_MEMBERS_REQUEST:
        case  GET_MEMBERS_FAILURE:
            return {
                ...state,
                members: [],
                getMembersStatus: action.type
            };


        //  CREATE PROJECT
        case CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                createProjectStatus: action.type,
                projects: [...state.projects || [], action.data]
            };
        case  CREATE_PROJECT_REQUEST:
        case  CREATE_PROJECT_FAILURE:
            return {
              ...state,
              createProjectStatus: action.type  
            };
        default:
            return state
    }
};

