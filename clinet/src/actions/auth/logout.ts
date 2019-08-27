import {LOGOUT} from "../../constants";

export const logout = () => {
    localStorage.removeItem('user');

    // tslint:disable-next-line
    window.location.reload();
    
    return {
        type: LOGOUT
    }
};
