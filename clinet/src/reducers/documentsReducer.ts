import {
    GET_PROJECTS_SUCCESS,
    CREATE_PROJECT_SUCCESS, CREATE_PROJECT_REQUEST, CREATE_PROJECT_FAILURE
} from '../constants';
import {IDocument} from "../models/IDocument";

interface IDocumentsState {
    documents?: IDocument[]
    getDocumentsStatus: string
    createDocumentsStatus: string
    updateDocumentsStatus: string
    deleteDocumentsStatus: string
}

const initialState: IDocumentsState = {
    getDocumentsStatus: '',
    createDocumentsStatus: '',
    updateDocumentsStatus: '',
    deleteDocumentsStatus: ''
};

export const document = (state = initialState, action: any): IDocumentsState => {
    switch (action.type as string) {
        case GET_D
        case GET_PROJECTS_SUCCESS
        default:
            return state
    }
};

