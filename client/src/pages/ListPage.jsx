import styled from "styled-components";
import Header from "../components/Header";
import ListBox from "../components/ListBox";
import WriteBox from "../components/WriteBox";

const StyledMainBox = styled.div`
display: flex;
flex-direction: column;
gap:2rem;
background-color: #E5ECF3;
height: 100%;
padding: 3rem 5rem;
@media (max-width: 768px) {
  padding: 2rem 2rem;
  }
`

const ListPage = () =>{
  
  return(
    <StyledMainBox>
      <Header/>
      <WriteBox/>
      <ListBox/>
    </StyledMainBox>
  )
}

export default ListPage;