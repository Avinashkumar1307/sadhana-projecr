import { combineReducers } from "redux";
import LoginReducer from "./Slices/login/reducer";


const rootReducer = combineReducers({
    login: LoginReducer,
   
});

export default rootReducer;