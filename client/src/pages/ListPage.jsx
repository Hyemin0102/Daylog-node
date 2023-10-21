import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { logoutrUser } from "../redux/action";
import { useEffect, useState } from "react";
import StyledButton from "../components/StyledButton";
import AuthTemplate from "../components/auth/AuthTemplate";

const ListPage = () =>{
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

  const navigateToWirte = () =>{
    navigate("/write")
  };

  useEffect(()=>{
    if(isLoggedOut){
      navigate('/login');
    }
  },[isLoggedOut,navigate])
  
  return(
    <div style={{padding:"3rem"}}>
      <div style={{margin:'2rem'}}>post 조회 페이지입니다.</div>
      <div style={{display:"flex", gap:"1rem"}}>
        <StyledButton onClick={navigateToWirte}>글쓰기</StyledButton>
        <StyledButton onClick={handleLogout}>로그아웃</StyledButton>
      </div>
    </div>
  )
}

export default ListPage;