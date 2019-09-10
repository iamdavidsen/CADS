import {
    GET_PROJECTS_SUCCESS,
    CREATE_PROJECT_SUCCESS, CREATE_PROJECT_REQUEST, CREATE_PROJECT_FAILURE
} from '../constants';

interface IProjectState {
    project?: any
    projects?: any[]
    createProjectStatus: string
}

const initialState: IProjectState = {
    createProjectStatus: ''
};

export const project = (state = initialState, action: any): IProjectState => {
    switch (action.type as string) {
        case GET_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: action.data
            };
        case  CREATE_PROJECT_REQUEST:
        case  CREATE_PROJECT_FAILURE:
            return {
              ...state,
              createProjectStatus: action.type  
            };
        case CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                createProjectStatus: action.type,
                projects: [...state.projects || [], action.data]
            };
        default:
            return state
    }
};

