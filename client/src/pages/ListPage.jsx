import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { logoutrUser } from "../redux/action";
import { useEffect, useState } from "react";
import StyledButton from "../components/StyledButton";

const ListPage = () =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = async() =>{
    try{
      await dispatch(logoutrUser());
      setIsLoggedOut(true);
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
    <div>
      <div style={{margin:'2rem'}}>post 조회 페이지입니다.</div>
      <StyledButton style={{margin:'2rem', paddingLeft:'1rem', paddingRight:'1rem'}}onClick={handleLogout}>로그아웃</StyledButton>
    </div>
  )
}

export default ListPage;