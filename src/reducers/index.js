import counterReducer from "./counter.js";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counterReducer,
  loggedReducer,
});

export default allReducers;
