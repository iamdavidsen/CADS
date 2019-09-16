import Axios from "axios";
import {Dispatch} from "redux";

import {
    GET_DOCUMENTS_REQUEST,
    GET_DOCUMENTS_SUCCESS,
    GET_DOCUMENTS_FAILURE
} from "../../constants";

import {BASE_URL} from "../../env";
import {handleError} from "../handleError";

export const getPublicDocuments = (projectId: string) => {
    let url = `${BASE_URL}/documents/public/project/${projectId}`;

    return (dispatch: Dispatch) => {
        dispatch({ type: GET_DOCUMENTS_REQUEST });
        Axios.get(url)
            .then((response) => dispatch({
                type: GET_DOCUMENTS_SUCCESS,
                data: response.data
            }))
            .catch((error) => {
                handleError(error, dispatch);
                return dispatch({
                    type: GET_DOCUMENTS_FAILURE
                });
            })
    }
};
