import Axios from "axios";
import {Dispatch} from "redux";

import {
    DELETE_PROJECT_REQUEST,
    DELETE_PROJECT_SUCCESS,
    DELETE_PROJECT_FAILURE
} from "../../constants";

import {BASE_URL} from "../../env";
import {handleError} from "../handleError";

import {getHeaders} from "../getHeaders";

export const deleteProject = (projectId: string) => {
    let url = `${BASE_URL}/projects/${projectId}`;

    return (dispatch: Dispatch) => {
        dispatch({ type: DELETE_PROJECT_REQUEST });
        Axios.delete(url, getHeaders())
            .then((response) => dispatch({
                type: DELETE_PROJECT_SUCCESS,
                data: response.data,
                id: projectId
            }))
            .catch((error) => {
                handleError(error, dispatch);
                return dispatch({
                    type: DELETE_PROJECT_FAILURE
                });
            })
    }
};
