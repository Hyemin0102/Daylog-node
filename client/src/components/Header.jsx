import { useDispatch } from "react-redux";
import StyledButton from "./StyledButton";
import { useNavigate } from "react-router-dom";
import { logoutrUser } from "../redux/action/userAction";
import { useEffect, useState } from "react";
import styled from "styled-components";


const StyledHeaderWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  @media (max-width: 768px) {
  padding: 0;
  }

    h1{
      font-size: 3rem;
    color: #2c2a2a;
    @media (max-width: 768px) {
      font-size: 2rem;
      }
    }
    div{
      display:"flex";
      flex-direction:column;
    }
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
      <h1>DAYLOG 💻</h1>
        <div>
          <StyledButton
          borderradius="24px"
          width="100px"
          height="40px"
          backgroundcolor="DarkGray"
          hoverbgcolor="Silver"
          onClick={handleLogout}>로그아웃</StyledButton>
        </div>
        

    </StyledHeaderWrap>
  )
}

export default Header;