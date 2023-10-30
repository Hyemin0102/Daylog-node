import { configureStore, combineReducers } from "@reduxjs/toolkit";
import user from "./slice/user.js";
import post from "./slice/post.js";


const rootReducer = combineReducers({
  user,
  post
});

const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware()
});


export default store;