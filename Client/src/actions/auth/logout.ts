import {LOGOUT} from "../../constants";

export const logout = () => {
    localStorage.removeItem('user');
    location.reload();
    
    return {
        type: LOGOUT
    }
};
