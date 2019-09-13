import Axios from "axios";
import {Dispatch} from "redux";

import {
    GET_DOCUMENTS_REQUEST,
    GET_DOCUMENTS_SUCCESS,
    GET_DOCUMENTS_FAILURE
} from "../../constants";

import {BASE_URL} from "../../env";
import {handleError} from "../handleError";

import {getHeaders} from "../getHeaders";

export const getDocuments = (projectId: string) => {
    let url = `${BASE_URL}/documents/project/${projectId}`;

    return (dispatch: Dispatch) => {
        dispatch({ type: GET_DOCUMENTS_REQUEST });
        Axios.get(url, getHeaders())
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
