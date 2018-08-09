import { Reducer, combineReducers } from "redux";
import { IActionObject } from "../interfaces/IReducers";

// Reducers
import main, { IMainReducer } from "./MainReducer";

// Reducers Interfaces
export interface IGlobalStore {
    main: IMainReducer;
}

const reducer: Reducer<IGlobalStore, IActionObject> = combineReducers({
    main,
});

export default reducer;
