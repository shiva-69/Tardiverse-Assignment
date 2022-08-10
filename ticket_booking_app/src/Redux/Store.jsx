import {combineReducers, createStore} from "redux";
import { UserReducer } from "./User/Reducer";
import { setAllUserReducer } from "./AllUsers/Reducer";
const rootreducer = combineReducers({
    user: UserReducer,
    AllUser: setAllUserReducer,

})
export const store = createStore(rootreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
