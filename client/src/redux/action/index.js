import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../node_modules/axios/index";

export const loginUser = createAsyncThunk('user/login', async (userData, {rejectWithValue }) => {
  //auth/login은 redux 액션의 유형, 두번째는 payload부분. 
  console.log('userData',userData);  
  try{
    const response = await axios.post('http://localhost:4000/api/user/login', {
      //이 값들이 reducer에서 action.payload
      name: userData.name,
      password: userData.password,
    });
    console.log('loginuser',response.data);
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
export const registerUser = createAsyncThunk('user/register', async (userData, {rejectWithValue }) => {
  console.log('registerUser',userData); 
  try{
    const response = await axios.post('http://localhost:4000/api/user/register', {
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
    const response = await axios.post('http://localhost:4000/api/user/logout');
    return response.data;
});