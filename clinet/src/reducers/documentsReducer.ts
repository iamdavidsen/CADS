import {
    GET_PROJECTS_SUCCESS,
    CREATE_PROJECT_SUCCESS,
    CREATE_PROJECT_REQUEST,
    CREATE_PROJECT_FAILURE,
    GET_PROJECT_SUCCESS,
    GET_PROJECT_REQUEST,
    GET_PROJECT_FAILURE,
    GET_DOCUMENTS_REQUEST,
    GET_DOCUMENTS_SUCCESS,
    GET_DOCUMENTS_FAILURE,
    UPDATE_DOCUMENT_SUCCESS,
    UPDATE_DOCUMENT_REQUEST,
    UPDATE_DOCUMENT_FAILURE,
    DELETE_DOCUMENT_SUCCESS,
    DELETE_DOCUMENT_REQUEST,
    DELETE_DOCUMENT_FAILURE
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
        //  GET Documents
        case GET_DOCUMENTS_SUCCESS:
            return {
                ...state,
                documents: action.data,
                getDocumentsStatus: action.type
            };
        case  GET_DOCUMENTS_REQUEST:
        case  GET_DOCUMENTS_FAILURE:
            return {
                ...state,
                getDocumentsStatus: action.type
            };

        //  CREATE Document
        case CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                documents: [...(state.documents || []), action.data],
                createDocumentsStatus: action.type
            };
        case  CREATE_PROJECT_REQUEST:
        case  CREATE_PROJECT_FAILURE:
            return {
                ...state,
                createDocumentsStatus: action.type
            };


        //  UPDATE Document
        case UPDATE_DOCUMENT_SUCCESS:
            return {
                ...state,
                documents: (state.documents || []).map(d => d._id == action.data._id ? action.data : d),
                updateDocumentsStatus: action.type
            };
        case  UPDATE_DOCUMENT_REQUEST:
        case  UPDATE_DOCUMENT_FAILURE:
            return {
                ...state,
                updateDocumentsStatus: action.type
            };

        //  DELETE Document
        case DELETE_DOCUMENT_SUCCESS:
            return {
                ...state,
                documents: (state.documents || []).filter(d => d._id != action.id),
                deleteDocumentsStatus: action.type
            };
        case  DELETE_DOCUMENT_REQUEST:
        case  DELETE_DOCUMENT_FAILURE:
            return {
                ...state,
                deleteDocumentsStatus: action.type
            };
        default:
            return state
    }
};

