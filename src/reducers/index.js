import { combineReducers } from "redux";
import counterReducer from "./Couter";
import isLogged from "./Logged";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: isLogged,
});

export default rootReducer;
