import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  //padding: 1rem;
  line-height:2.5rem;
  outline:none;
  cursor:pointer;
  color:#fff;
  background-color:#0065FF;
    &:hover{
      background-color:gray;
    }
`;
export default StyledButton;