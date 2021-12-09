import { RootReducer } from './../store/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';


export const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector