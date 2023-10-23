import { useDispatch } from "react-redux";
import StyledButton from "./StyledButton";
import { useNavigate } from "react-router-dom";
import { logoutrUser } from "../redux/action/userAction";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledHeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      <h1>DayLog</h1>
      <StyledButton width="120px" height="40px" onClick={handleLogout}>로그아웃</StyledButton>
    </StyledHeaderWrap>
  )
}

export default Header;