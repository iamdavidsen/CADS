import {
    GET_PROJECTS_SUCCESS

} from '../constants';

interface IProjectState {
    project?: any
    projects?: any[]
}

const initialState: IProjectState = {};

export const project = (state = initialState, action: any): IProjectState => {
    switch (action.type as string) {
        case GET_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: action
            };
        default:
            return state
    }
};

