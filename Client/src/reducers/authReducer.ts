import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../constants';

interface IAuthReducer {
    loggingIn: boolean,
    loggedIn: boolean,
    user?: {
        access_token: string
    }
}

const userString = localStorage.getItem('user');
const user = JSON.parse(userString ? userString : '');

const initialState: IAuthReducer = {
    loggedIn: Boolean(user),
    loggingIn: false,
    user: user && user,
};

export const auth = (state = initialState, action: any): IAuthReducer => {
    switch (action.type as string) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true,
                user: action.user
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                user: action.user
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
                user: undefined
            };
        case LOGOUT:
            return {
                ...state,
                loggingIn: false,
                loggedIn: false,
                user: undefined
            };
        default:
            return state
    }
};