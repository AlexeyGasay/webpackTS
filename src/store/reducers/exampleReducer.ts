import { initialInterface, typeUpdateTextAC } from "../../types/types";
import { ACforExample } from "../action-creators/actionCreators";


const initalState: initialInterface = {
    text: ""
};

export const exampleReducer = (state = initalState, action: typeUpdateTextAC): initialInterface => {
    switch(action.type) {
        case ACforExample.UPDATE_INPUT_TEXT:
            return {
                ...state,
                text: action.payload
            }
        
        
        
        
        default:
            return state
    }
}


