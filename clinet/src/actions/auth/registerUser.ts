import Axios from "axios";
import {Dispatch} from "redux";

import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, REGISTER_USER_FAILURE,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS
} from "../../constants";
import {BASE_URL} from "../../env";
import {handleError} from "../handleError";

import {CreateUserDto} from "../../../../Server/src/modules/users/dto/createUser.dto";

export const registerUser = (createUserDto: CreateUserDto) => {
    let url = `${BASE_URL}/auth/register`;

    return (dispatch: Dispatch) => {
        dispatch({ type: REGISTER_USER_REQUEST });
        Axios.post(url, createUserDto)
            .then((response) => dispatch({
                type: REGISTER_USER_SUCCESS,
                data: response.data
            }))
            .catch((error) => {
                handleError(error, dispatch);
                return dispatch({
                    type: REGISTER_USER_FAILURE
                });
            })
    }
};
