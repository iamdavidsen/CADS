import Axios from "axios";
import {Dispatch} from "redux";

import {
    CREATE_DOCUMENT_REQUEST,
    CREATE_DOCUMENT_SUCCESS,
    CREATE_DOCUMENT_FAILURE,
} from "../../constants";

import {BASE_URL} from "../../env";
import {handleError} from "../handleError";

import {getHeaders} from "../getHeaders";
import {AddDocumentDto} from "../../../../Server/src/modules/documents/dto/addDocument.dto";

export const createDocument = (document: AddDocumentDto) => {
    let url = `${BASE_URL}/documents`;

    return (dispatch: Dispatch) => {
        dispatch({ type: CREATE_DOCUMENT_REQUEST });
        Axios.post(url, document, getHeaders())
            .then((response) => dispatch({
                type: CREATE_DOCUMENT_SUCCESS,
                data: response.data
            }))
            .catch((error) => {
                handleError(error, dispatch);
                return dispatch({
                    type: CREATE_DOCUMENT_FAILURE
                });
            })
    }
};
