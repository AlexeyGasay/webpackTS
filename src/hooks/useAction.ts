import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EmaxpleAC from '../store/action-creators/example'

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(EmaxpleAC, dispatch)
}