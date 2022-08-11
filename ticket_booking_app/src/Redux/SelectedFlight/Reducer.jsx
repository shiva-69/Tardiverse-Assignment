import { ADD_FLIGHT } from "./Action";

export const AddFlightReducer = (state = {flight : {}}, {type, payload}) => {
    switch(type){
        case ADD_FLIGHT : {
            return {
                ...state,
                flight : {...payload}
            }
        }
        default : {
            return state;
        }
    }
}