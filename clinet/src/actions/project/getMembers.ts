import Axios from "axios";
import {Dispatch} from "redux";

import {
    GET_MEMBERS_REQUEST,
    GET_MEMBERS_SUCCESS,
    GET_MEMBERS_FAILURE
} from "../../constants";

import {BASE_URL} from "../../env";
import {handleError} from "../handleError";

import {getHeaders} from "../getHeaders";

export const getMembers = (id: string) => {
    let url = `${BASE_URL}/projects/${id}/members`;

    return (dispatch: Dispatch) => {
        dispatch({ type: GET_MEMBERS_REQUEST });
        Axios.get(url, getHeaders())
            .then((response) => dispatch({
                type: GET_MEMBERS_SUCCESS,
                data: response.data
            }))
            .catch((error) => {
                handleError(error, dispatch);
                return dispatch({
                    type: GET_MEMBERS_FAILURE
                });
            })
    }
};
