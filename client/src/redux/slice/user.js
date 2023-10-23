import { loginUser, registerUser } from "../action/userAction";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  register: {
    name: '',
    password: '',
    passwordConfirm: '',
    userData:null,
    error: null
  },
  login: {
    name: '',
    password: '',
    userData:null,
    error: null
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{
    changeField: (state, action) => {//리듀서 함수는 항상 두개의 인자 받음(state-현재상태, action-디스패치된 액션 객체)
      const {form, key, value} = action.payload;//액션에 포함된 데이터(form-폼이름, key-필드이름, value-변경할값)
      state[form][key] =  value;//현재 상태의 form의 특정 key를  value값으로 업데이트
    },
    initializeForm:(state, action) => {
      const form = action.payload;
      state[form] = {...initialState[form]};//현재 state의 form 초기화
    }
  },
  extraReducers:(builder)=>{
    //loginUser 성공
    builder.addCase(loginUser.fulfilled,(state,action)=>{
      state.login.userData = action.payload;//response.data를 userData에 저장
      state.login.error = null;
    });

    //loginUser 실패
    builder.addCase(loginUser.rejected,(state,action)=>{
      if(action.payload){
        state.login.error = action.payload;
      }else{
        state.login.error = action.error.message;
      }
    });
    
    // registerUser 요청이 성공한 경우
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.register.userData = action.payload; 
      state.register.error = null;
    });

    // registerUser 요청이 실패한 경우
    builder.addCase(registerUser.rejected, (state, action) => {
      if(action.payload){
        state.register.error = action.payload;
      }else{
        state.register.error = action.error.message;
      }
    });
  }
});

export const {
  changeField,
  initializeForm,
} = userSlice.actions;
export default userSlice.reducer;