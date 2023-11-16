import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

// Add the Redux DevTools Extension
export const store = configureStore({
  reducer: rootReducer,
  devTools:
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
});
