import Axios from "axios";
import {Dispatch} from "redux";

import {
    GET_PROJECTS_REQUEST,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAILURE, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, CREATE_PROJECT_FAILURE
} from "../../constants";

import {BASE_URL} from "../../env";
import {handleError} from "../handleError";

import {getHeaders} from "../getHeaders";
import {CreateProjectDto} from "../../../../Server/src/modules/projects/dto/createProject.dto";

export const createProject = (project: CreateProjectDto) => {
    let url = `${BASE_URL}/projects`;

    return (dispatch: Dispatch) => {
        dispatch({ type: CREATE_PROJECT_REQUEST });
        Axios.post(url, project, getHeaders())
            .then((response) => dispatch({
                type: CREATE_PROJECT_SUCCESS,
                data: response.data
            }))
            .catch((error) => {
                handleError(error, dispatch);
                return dispatch({
                    type: CREATE_PROJECT_FAILURE
                });
            })
    }
};
