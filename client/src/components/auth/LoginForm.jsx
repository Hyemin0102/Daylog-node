import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import AuthForm from "./AuthForm"
import { changeField, initializeForm } from "../../redux/slice/user";
import { loginUser } from "../../redux/action/userAction";
import { useNavigate } from "react-router-dom";


const LoginForm = () =>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useSelector(state => state.user.login);

  //인풋 변경 핸들러
  const onChange = (e) =>{
    const {value, name} = e.target;
    dispatch(
      changeField({
        form:'login',
        key: name,
        value
      })
    )
  };

  //폼 등록 이벤트 핸들러
  const onSubmit = async(e) =>{
    e.preventDefault();
    const {name,password } = form;

    if (!name || !password) {
      return alert('아이디, 비밀번호는 필수 입력 항목입니다.');
    }
    try{
      await dispatch(loginUser(form))
        .unwrap()
        .then((res)=>{
          navigate('/list');
        })
        .catch((err)=>{
          console.log(err)
        });
    }catch(error){
      console.log(error)
      alert('로그인에 실패했습니다.');
    }
  };

  //첫 로드 시 form초기화
  useEffect(()=>{
      dispatch(initializeForm('login'));
  },[dispatch])

  return(
    <AuthForm 
      type='login'
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      />
  )
};

export default LoginForm;