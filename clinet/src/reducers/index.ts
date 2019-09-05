import { combineReducers } from 'redux';

import {auth} from "./authReducer";
import {project} from "./projectsReducer";

const rootReducer = combineReducers({
    auth,
    project
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;