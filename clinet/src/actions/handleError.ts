import {AxiosError, AxiosResponse} from "axios";
import {Dispatch} from "redux";

import {logout} from "./auth/logout";

export const handleError = (error: AxiosError, dispatch: Dispatch) => {
    const response = error.response;
    if (!response) return;
    
    if (response.status === 401) {
        dispatch(logout());
        location.reload(true);
    }

    return response.statusText
};