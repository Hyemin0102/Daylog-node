import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import AuthForm from "./AuthForm"
import { changeField, initializeForm} from "../../redux/slice/user.js";
import { registerUser } from "../../redux/action/userAction";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";

const RegisterForm = () =>{
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {form} = useSelector(({user}) => ({
    form: user.register,
  }));

  //인풋 변경 핸들러
  const onChange = (e) =>{
    const {value, name} = e.target;
    dispatch(
      changeField({
        form:'register',
        key: name,
        value
      })
    )
  };

  //폼 등록 이벤트 핸들러
  const onSubmit = async(e) =>{
    e.preventDefault();
    const {name, password,passwordConfirm} = form;
    console.log('회원가입 제출됨');

    if (!name || !password || !passwordConfirm) {
      // 아이디, 비밀번호, 비밀번호 확인 중 하나라도 비어있을 때
      return alert('아이디, 비밀번호, 비밀번호 확인은 필수 입력 항목입니다.');
    }

    if(password !== passwordConfirm){
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }
    try{
      await dispatch(registerUser(form))
        .unwrap()
        .then(()=>{
          alert('회원가입에 성공했습니다! 로그인 페이지로 이동합니다.');
        })
        .then((res)=>{
          navigate('/login');
          console.log(res)
        })
        .catch((err)=>{
          console.log(err)
        });
    }catch(error){
      console.log(error)
      alert('회원가입에 실패했습니다.');
    }
  };

  //첫 로드 시 form초기화
  useEffect(()=>{
      dispatch(initializeForm('register'));
  },[dispatch]);

  return(
    <div>
      <AuthForm
        type='register'
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        />
    </div>
    
  )
};

export default RegisterForm;