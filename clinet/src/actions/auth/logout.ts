import {LOGOUT} from "../../constants";

export const logout = () => {
    localStorage.removeItem('user');
    
    window.location.reload();
    
    return {
        type: LOGOUT
    }
};
