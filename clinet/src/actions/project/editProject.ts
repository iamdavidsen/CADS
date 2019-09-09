import Axios from "axios";
import {Dispatch} from "redux";

import {
    UPDATE_PROJECT_REQUEST,
    UPDATE_PROJECT_SUCCESS,
    UPDATE_PROJECT_FAILURE
} from "../../constants";

import {BASE_URL} from "../../env";
import {handleError} from "../handleError";

import {EditProjectDto} from "../../../../Server/src/modules/projects/dto/editProject.dto";
import {getHeaders} from "../getHeaders";

export const editProject = (projectId: string, project: EditProjectDto) => {
    let url = `${BASE_URL}/projects/${projectId}`;

    return (dispatch: Dispatch) => {
        dispatch({ type: UPDATE_PROJECT_REQUEST });
        Axios.patch(url, project, getHeaders())
            .then((response) => dispatch({
                type: UPDATE_PROJECT_SUCCESS,
                data: response.data
            }))
            .catch((error) => {
                handleError(error, dispatch);
                return dispatch({
                    type: UPDATE_PROJECT_FAILURE
                });
            })
    }
};
