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
    GET_MEMBERS_FAILURE,
    ADD_USER_REQUEST,
    ADD_USER_FAILURE,
    ADD_USER_SUCCESS,
    REMOVE_USER_SUCCESS,
    REMOVE_USER_REQUEST,
    REMOVE_USER_FAILURE
} from '../constants';

import {IProject} from "../models/IProject";
import {IMember} from "../models/IMember";

interface IProjectState {
    project?: IProject
    projects?: IProject[]
    members?: IMember[]
    getProjectStatus: string
    getProjectsStatus: string
    createProjectStatus: string
    getMembersStatus: string
    addMembersStatus: string
    removeMembersStatus: string
}

const initialState: IProjectState = {
    getProjectStatus: '',
    getProjectsStatus: '',
    getMembersStatus: '',
    createProjectStatus: '',
    addMembersStatus: '',
    removeMembersStatus: ''
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


        //  Add Member
        case ADD_USER_SUCCESS:
            return {
                ...state,
                members: [...(state.members || []), { username: '', email: action.email }],
                addMembersStatus: action.type
            };
        case  ADD_USER_REQUEST:
        case  ADD_USER_FAILURE:
            return {
                ...state,
                addMembersStatus: action.type
            };
            
        //  Remove Member
        case REMOVE_USER_SUCCESS:
            return {
                ...state,
                members: (state.members || []).filter(m => m.email != action.id),
                removeMembersStatus: action.type
            };
        case  REMOVE_USER_REQUEST:
        case  REMOVE_USER_FAILURE:
            return {
                ...state,
                removeMembersStatus: action.type
            };


    }
};

