// import { Dispatch } from 'redux';
import { ACforExample } from './actionCreators';
// import { typeUpdateTextAC } from '../../types/types';

export const updateTextAC = (text: string) => {
    // debugger
    // return (dispatch: Dispatch<typeUpdateTextAC>) => {
    //     dispatch({
    //         type: ACforExample.UPDATE_INPUT_TEXT,
    //         payload: text
    //     })
    // }

    return {
        type: ACforExample.UPDATE_INPUT_TEXT,
        payload: text
    }
}