import { TOGGLE_AUTH } from "./Action";

export const AuthReducer = (state = {authStatus : false},{type, payload}) => {
    switch(type){
        case(TOGGLE_AUTH) : {
            return {
                ...state, authStatus : payload
            }
        }
        default : {
            return state
        }
    }
}