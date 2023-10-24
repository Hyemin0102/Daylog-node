import { useDispatch } from "react-redux";
import StyledButton from "./StyledButton";
import { useNavigate } from "react-router-dom";
import { logoutrUser } from "../redux/action/userAction";
import { useEffect, useState } from "react";
import styled from "styled-components";
import StyledBubble from "./StyledBubble";

const StyledHeaderWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

const Header = () =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = () =>{
    try{
      dispatch(logoutrUser());
      setIsLoggedOut(true);
      alert('로그아웃 처리되었습니다.');
    }catch(err){
      setIsLoggedOut(false)
    }
  };

  useEffect(()=>{
    if(isLoggedOut){
      navigate('/login');
    }
  },[isLoggedOut,navigate])

  return(
    <StyledHeaderWrap>
      <h1>DAYLOG</h1>
      <StyledBubble width="162px" src="./img_bubble.png" alt="bubble"/>
      <StyledBubble width="50px" src="./img_bubble.png" alt="bubble"/>
      <StyledButton
        borderRadius="24px"
        width="100px"
        height="40px"
        backgroundcolor="DarkGray"
        hoverbgcolor="Silver"
        onClick={handleLogout}>로그아웃</StyledButton>
    </StyledHeaderWrap>
  )
}

export default Header;