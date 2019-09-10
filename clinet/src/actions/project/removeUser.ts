import Axios from "axios";
import {Dispatch} from "redux";

import {
    REMOVE_USER_REQUEST,
    REMOVE_USER_SUCCESS,
    REMOVE_USER_FAILURE
} from "../../constants";

import {BASE_URL} from "../../env";
import {handleError} from "../handleError";

import {getHeaders} from "../getHeaders";
import {RemoveFromProjectDto} from "../../../../Server/src/modules/projects/dto/removeFromProject.dto";

export const addUser = (projectId: string, project: RemoveFromProjectDto) => {
    let url = `${BASE_URL}/projects/${projectId}/remove`;

    return (dispatch: Dispatch) => {
        dispatch({ type: REMOVE_USER_REQUEST });
        Axios.patch(url, project, getHeaders())
            .then((response) => dispatch({
                type: REMOVE_USER_SUCCESS,
                data: response.data
            }))
            .catch((error) => {
                handleError(error, dispatch);
                return dispatch({
                    type: REMOVE_USER_FAILURE
                });
            })
    }
};
