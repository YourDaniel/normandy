import {combineReducers} from "redux";
import exampleReducer from "./exampleReducer";
import settings from "./settings";
import data from "./data";
import user from "./user";


export default combineReducers({
    main: exampleReducer,
    settings,
    data,
    user
})