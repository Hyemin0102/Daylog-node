import styled from "styled-components";
import StyledButton from "../components/StyledButton";
import AuthTemplate from "../components/auth/AuthTemplate";
import { useNavigate } from "react-router-dom";
import StyledBubble from "../components/StyledBubble";

const Styledflex = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 5rem;
`;

const MainPage = () =>{
  const navigate = useNavigate();

  const navigateToRegister = () =>{
    navigate("/register")
  };

  const navigateToLogin = () =>{
    navigate("/login")
  };

  return(
      <AuthTemplate>
        <div>
          <h1>DAYLOG</h1>
          <p style={{fontSize:"1.1rem"}}>안녕하세요:) Daylog에서 일상을 공유보세요🙆‍♀️</p>
          <Styledflex>
            <StyledButton onClick={navigateToRegister}>회원가입</StyledButton>
            <StyledButton onClick={navigateToLogin}>로그인</StyledButton>
          </Styledflex>
        </div>
      </AuthTemplate>
  )
}

export default MainPage;