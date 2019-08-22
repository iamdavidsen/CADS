import {AxiosResponse} from "axios";
import {Dispatch} from "redux";

import {logout} from "./auth/logout";

const handleResponse = (response: AxiosResponse, dispatch: Dispatch) => {
    if (response.status === 200) return response.data;
    
    if (response.status === 401) {
        dispatch(logout());
        location.reload(true);
    }

    return response.statusText
};