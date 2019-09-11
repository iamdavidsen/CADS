import Axios from "axios";
import {Dispatch} from "redux";

import {
    GET_PROJECT_REQUEST,
    GET_PROJECT_SUCCESS,
    GET_PROJECT_FAILURE
} from "../../constants";

import {BASE_URL} from "../../env";
import {handleError} from "../handleError";

import {getHeaders} from "../getHeaders";

export const getProject = (id: string) => {
    let url = `${BASE_URL}/projects/${id}`;

    return (dispatch: Dispatch) => {
        dispatch({ type: GET_PROJECT_REQUEST });
        Axios.get(url, getHeaders())
            .then((response) => dispatch({
                type: GET_PROJECT_SUCCESS,
                data: response.data
            }))
            .catch((error) => {
                handleError(error, dispatch);
                return dispatch({
                    type: GET_PROJECT_FAILURE
                });
            })
    }
};
