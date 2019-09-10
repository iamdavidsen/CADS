import {combineReducers} from 'redux';

import {auth} from "./authReducer";
import {project} from "./projectsReducer";
import {document} from './documentsReducer'

const rootReducer = combineReducers({
    auth,
    project,
    document
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;