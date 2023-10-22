import styled from "styled-components";
import Header from "../components/Header";
import ListBox from "../components/ListBox";
import WriteBox from "../components/WriteBox";

const ListPage = () =>{
  const StyledMainBox = styled.div`
    display: flex;
    flex-direction: column;
    gap:5rem;
  `
  
  return(
    <StyledMainBox>
      <Header />
      <WriteBox />
      <ListBox />
    </StyledMainBox>
  )
}

export default ListPage;