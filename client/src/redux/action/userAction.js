import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 로그인 요청을 처리하는 비동기 액션
export const loginUser = createAsyncThunk('/api/user/login', async (userData, {rejectWithValue }) => {
  try{
    const response = await axios.post('/api/user/login', {
      //이 값들이 reducer에서 action.payload
      name: userData.name,
      password: userData.password,
    });
    return response.data;
  }catch(err){
    let error = err;
    if(!error.response){
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

// 회원가입 요청을 처리하는 비동기 액션
export const registerUser = createAsyncThunk('/api/user/register', async (userData, {rejectWithValue }) => {
  console.log('registerUser',userData); 
  try{
    const response = await axios.post('/api/user/register', {
      name: userData.name,
      password: userData.password,
    });
    console.log('registerUser',response.data);
    return response.data;
  }catch(err){
    let error = err;
    if(!error.response){
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

// 로그아웃 요청을 처리하는 비동기 액션
export const logoutrUser = createAsyncThunk('user/logout', async (_, thunkAPI) => { 
    const response = await axios.post('/api/user/logout');
    return response.data;
});

