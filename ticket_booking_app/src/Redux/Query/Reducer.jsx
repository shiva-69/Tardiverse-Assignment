import { QUERY } from "./Action";

export const queryReducer = (state ={query: {}}, {type, payload}) => {
    switch (type){
        case QUERY : {
            return {
                ...state, query : {...payload}
            }
        }
        default : {
            return state
        }
    }
}