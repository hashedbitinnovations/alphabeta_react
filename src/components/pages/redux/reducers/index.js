import { accountReducer } from "./accountReducer";
import { combineReducers } from "redux";


const reducers = combineReducers({
    accounts: accountReducer,

})

export default reducers;