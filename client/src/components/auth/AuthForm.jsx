import styled from "styled-components";
import { Link } from "../../../node_modules/react-router-dom/dist/index";
import StyledButton from "../StyledButton";
//import ImgUpload from "../ImgUpload";

const ErrorMessgae = styled.div`
  color: red;
  text-align: center;
  font-size:0.9rem;
  margin-top:1rem;
  font-weight:bold;
`;

const StyledAuthForm = styled.div`
  h3{
    margin:0;
    margin-bottom:1.5rem;
  }
`;
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid gray;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus{
    color:blue;
    border-bottom: 1px solid black;
  }
  & + & {
    margin-top: 1rem;
  }
`;
const Footer = styled.div`
  margin-top: 4rem;
  text-align: right;
  a{
    color: gray;
    &:hover{
      color: #000;
    }
  }

`;

const textArr = {
  login: '로그인',
  register: '회원가입'
};

const AuthForm = ({type, form, onChange, onSubmit}) =>{
  const text = textArr[type];
  return(
    <StyledAuthForm>
      <h1>DAYLOG</h1>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput 
            autoComplete="name"
            name="name"
            placeholder="아이디"
            onChange={onChange}
            value={form.name}
          />
        <StyledInput 
          autoComplete="password"
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={onChange}
          value={form.password}
          />
      {type === 'register'&&(
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            type="password"
            placeholder='비밀번호 확인'
            onChange={onChange}
            value={form.passwordConfirm}
            />
        )}
      {form.error && <ErrorMessgae>{form.error}</ErrorMessgae>}
      <StyledButton style={{width:'100%', marginTop:'1.5rem'}}>{text}</StyledButton>
      </form>
      <Footer>
      {type === 'login' ? (
          <div>
            <p>새로운 계정을 추가 하고 싶나요?</p>
            <Link to="/register">회원가입</Link>
          </div>

        ):(
          <div>
            <p>이미 회원이신가요?</p>
            <Link to="/login">로그인</Link>
          </div>
          
        )}
      </Footer>
    </StyledAuthForm>
  )
};

export default AuthForm;