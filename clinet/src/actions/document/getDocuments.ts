import Axios from "axios";
import {Dispatch} from "redux";

import {
    GET_PROJECTS_REQUEST,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAILURE
} from "../../constants";

import {BASE_URL} from "../../env";
import {handleError} from "../handleError";

import {getHeaders} from "../getHeaders";

export const getProjects = () => {
    let url = `${BASE_URL}/projects`;

    return (dispatch: Dispatch) => {
        dispatch({ type: GET_PROJECTS_REQUEST });
        Axios.get(url, getHeaders())
            .then((response) => dispatch({
                type: GET_PROJECTS_SUCCESS,
                data: response.data
            }))
            .catch((error) => {
                handleError(error, dispatch);
                return dispatch({
                    type: GET_PROJECTS_FAILURE
                });
            })
    }
};
