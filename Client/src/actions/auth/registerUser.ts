import Axios from "axios";
import {Dispatch} from "redux";

import {LOGIN_FAILURE, LOGIN_SUCCESS} from "../../constants";
import {BASE_URL} from "../../env";
import {handleError} from "../handleError";

import {CreateUserDto} from "../../../../Server/src/modules/users/dto/createUser.dto";

export const registerUser = (createUserDto: CreateUserDto) => {
    let url = `${BASE_URL}/auth/login`;

    return async (dispatch: Dispatch) => {
        Axios.post(url, createUserDto)
            .then((response) => dispatch({
                type: LOGIN_SUCCESS,
                data: response.data
            }))
            .catch((error) => {
                handleError(error, dispatch);
                return dispatch({
                    type: LOGIN_FAILURE
                });
            })
    }
};
