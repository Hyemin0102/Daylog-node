import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, writePost } from "../action/postAction";

const postSlice = createSlice({
  name:"post",
  initialState: [],
  reducers: {},
  extraReducers:(builder)=>{
    //글쓰기 성공
    builder.addCase(writePost.fulfilled,(state,action)=>{
      state.push(action.payload)
      //return action.payload;
    });

    //글쓰기 실패
    builder.addCase(writePost.rejected,(state,action)=>{
      if(action.payload){
        state.error = action.payload;
      }else{
        state.error = action.error.message;
      }
    });

    //글 목록 조회
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return action.payload.reverse();
    });
  }
});

export const {getPost,addPost} = postSlice.actions;
export default postSlice.reducer;