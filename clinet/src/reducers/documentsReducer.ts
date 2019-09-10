import {
    GET_PROJECTS_SUCCESS,
    CREATE_PROJECT_SUCCESS, CREATE_PROJECT_REQUEST, CREATE_PROJECT_FAILURE
} from '../constants';

interface IDocumentsState {
}

const initialState: IDocumentsState = {
};

export const document = (state = initialState, action: any): IDocumentsState => {
    switch (action.type as string) {
            
        default:
            return state
    }
};

