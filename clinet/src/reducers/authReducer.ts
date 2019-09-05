import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from '../constants';

interface IAuthState {
    registerStatus: string,
    loggingIn: boolean,
    loggedIn: boolean,
    user?: string | null
}

const userString = localStorage.getItem('user');

const initialState: IAuthState = {
    registerStatus: '',
    loggedIn: Boolean(userString),
    loggingIn: false,
    user: userString,
};

export const auth = (state = initialState, action: any): IAuthState => {
    switch (action.type as string) {
        case REGISTER_USER_REQUEST:
        case REGISTER_USER_SUCCESS:
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                registerStatus: action.type
            };
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

