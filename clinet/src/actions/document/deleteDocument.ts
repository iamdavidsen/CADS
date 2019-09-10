import Axios from "axios";
import {Dispatch} from "redux";

import {
    DELETE_DOCUMENT_REQUEST,
    DELETE_DOCUMENT_SUCCESS,
    DELETE_DOCUMENT_FAILURE
} from "../../constants";

import {BASE_URL} from "../../env";
import {handleError} from "../handleError";

import {getHeaders} from "../getHeaders";

export const deleteProject = (doucmentId: string) => {
    let url = `${BASE_URL}/documents/${doucmentId}`;

    return (dispatch: Dispatch) => {
        dispatch({ type: DELETE_DOCUMENT_REQUEST });
        Axios.delete(url, getHeaders())
            .then((response) => dispatch({
                type: DELETE_DOCUMENT_SUCCESS,
                data: response.data
            }))
            .catch((error) => {
                handleError(error, dispatch);
                return dispatch({
                    type: DELETE_DOCUMENT_FAILURE
                });
            })
    }
};
