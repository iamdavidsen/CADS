import Axios from "axios";
import {Dispatch} from "redux";

import {
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE
} from "../../constants";

import {BASE_URL} from "../../env";
import {handleError} from "../handleError";

import {getHeaders} from "../getHeaders";
import {AddToProjectDto} from "../../../../Server/src/modules/projects/dto/addToProject.dto";

export const addUser = (projectId: string, project: AddToProjectDto) => {
    let url = `${BASE_URL}/projects/${projectId}/add`;

    return (dispatch: Dispatch) => {
        dispatch({ type: ADD_USER_REQUEST });
        Axios.patch(url, project, getHeaders())
            .then((response) => dispatch({
                type: ADD_USER_SUCCESS,
                data: response.data,
                email: project.emailToAdd
            }))
            .catch((error) => {
                handleError(error, dispatch);
                return dispatch({
                    type: ADD_USER_FAILURE
                });
            })
    }
};
