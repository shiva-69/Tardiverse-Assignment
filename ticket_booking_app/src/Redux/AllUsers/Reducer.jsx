import { SET_ALL_USER } from "./Action";

export const setAllUserReducer = (state = {allUser : []}, {type, payload}) => {
    switch(type){
        case SET_ALL_USER : 
            return {
                ...state ,
                allUser : [...payload]
            }
        default :
          return state;    
    }
}