import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, writePost } from "../action/postAction";

const postSlice = createSlice({
  name:"post",
  initialState: [],
  reducers: {},
  extraReducers:(builder)=>{
    //writePost 성공
    builder.addCase(writePost.fulfilled,(state,action)=>{
      state.push(action.payload)
    });

    //writePost 실패
    builder.addCase(writePost.rejected,(state,action)=>{
      if(action.payload){
        state.error = action.payload;
      }else{
        state.error = action.error.message;
      }
    });

    //fetchPosts 성공
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      return action.payload.reverse();
    });
  }
});

export const {getPost,addPost} = postSlice.actions;
export default postSlice.reducer;