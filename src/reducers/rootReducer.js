import userReducer from "./userReducers";
import authReducer from "./authReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer: userReducer,
  authReducer: authReducer
});
export default rootReducer;
