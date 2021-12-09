import { combineReducers, createStore } from "redux";
import { exampleReducer } from "./reducers/exampleReducer";

const rootReducer = combineReducers({
    example: exampleReducer
})

export const store = createStore(rootReducer);

export type RootReducer = ReturnType<typeof rootReducer>