import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//글쓰기 요청 처리하는 비동기 액션
export const writePost = createAsyncThunk('/api/post/write', async (postData, { rejectWithValue }) => {
  try {
    const response = await axios.post('/api/post/write', {
      title:postData.title,
      body: postData.body,
    });
    return response.data;
  } catch (err) {
    let error = err;
    if(!error.response){
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

//글 목록 가져오는 비동기 액션
export const fetchPosts = createAsyncThunk('/api/post/list', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('/api/post/list');
    return response.data.posts;
  } catch (err) {
    let error = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
