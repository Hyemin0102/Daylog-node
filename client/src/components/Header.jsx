import { useDispatch } from "react-redux";
import StyledButton from "./StyledButton";
import { useNavigate } from "react-router-dom";
import { logoutrUser } from "../redux/action";
import { useEffect, useState } from "react";

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
    <>
      <StyledButton onClick={handleLogout}>로그아웃</StyledButton>
    </>
  )
}

export default Header;