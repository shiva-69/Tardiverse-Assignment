import { SETUSER } from "./Action";


export const UserReducer = (state = {user : {}}, {type, payload}) => {
    switch(type){
        case SETUSER : 
            return {
                ...state , user : {...payload}
            }
        default :
          return state;    
    }
}