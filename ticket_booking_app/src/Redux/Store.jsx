import {combineReducers, createStore} from "redux";
import { UserReducer } from "./User/Reducer";
import { setAllUserReducer } from "./AllUsers/Reducer";
import { AuthReducer } from "./Auth/Reducer";
import { queryReducer } from "./Query/Reducer";
import { AddFlightReducer } from "./SelectedFlight/Reducer";
const rootreducer = combineReducers({
    user: UserReducer,
    AllUser: setAllUserReducer,
    auth: AuthReducer,
    query : queryReducer,
    flight: AddFlightReducer
})
export const store = createStore(rootreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
