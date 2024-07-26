import { combineReducers } from "redux";
import { getUsersReducer } from "./users/getUsersReducer";

export const rootReducer = combineReducers({
  users: getUsersReducer,
  // Add more reducers as needed
});
