import Axios from "axios";
import {Dispatch} from "redux";

import {
    UPDATE_DOCUMENT_REQUEST,
    UPDATE_DOCUMENT_SUCCESS,
    UPDATE_DOCUMENT_FAILURE
} from "../../constants";

import {BASE_URL} from "../../env";
import {handleError} from "../handleError";

import {getHeaders} from "../getHeaders";
import {EditDocumentDto} from "../../../../Server/src/modules/documents/dto/editDocument.dto";

export const editProject = (documentId: string, document: EditDocumentDto) => {
    let url = `${BASE_URL}/documents/${documentId}`;

    return (dispatch: Dispatch) => {
        dispatch({ type: UPDATE_DOCUMENT_REQUEST });
        Axios.patch(url, document, getHeaders())
            .then((response) => dispatch({
                type: UPDATE_DOCUMENT_SUCCESS,
                data: response.data
            }))
            .catch((error) => {
                handleError(error, dispatch);
                return dispatch({
                    type: UPDATE_DOCUMENT_FAILURE
                });
            })
    }
};
