import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "./slice/user.js";
import logger from "redux-logger";

const rootReducer = combineReducers({
  user
});

const store = configureStore({
  reducer: rootReducer,
  middleWare:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
});


export default store;