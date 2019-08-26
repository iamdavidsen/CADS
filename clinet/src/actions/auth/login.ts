import Axios from "axios";
import {Dispatch} from "redux";

import {LOGIN_FAILURE, LOGIN_SUCCESS} from "../../constants";
import {BASE_URL} from "../../env";
import {handleError} from "../handleError";

export const login = (email: string, password: string) => {
    const url = `${BASE_URL}/auth/login`;
    
    const body = {
        username: email,
        password: password
    };

    return async (dispatch: Dispatch) => {
        Axios.post(url, body)
            .then((response) => {
                localStorage.setItem('user', response.data);;
                
                return dispatch({
                    type: LOGIN_SUCCESS,
                    data: response.data
                });
            })
            .catch((error) => {
                handleError(error, dispatch);
                return dispatch({
                    type: LOGIN_FAILURE
                });
            })
    }
};
