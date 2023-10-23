import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "./slice/user.js";
import post from "./slice/post.js";
import logger from "redux-logger";


const rootReducer = combineReducers({
  user,
  post
});

const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
});


export default store;