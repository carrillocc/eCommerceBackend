import { combineReducers } from "redux";
import { counterReducer } from "./counterExample";
import { userReducer } from "./userExample";

const rootReducer = combineReducers({
  // Define your reducers here
  counter: counterReducer,
  user: userReducer,
  // Add more reducers as needed
});

export default rootReducer;
