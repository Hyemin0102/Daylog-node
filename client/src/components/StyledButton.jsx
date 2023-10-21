import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  padding: 0 1.3rem;
  line-height:2.5rem;
  outline:none;
  cursor:pointer;
  color:#fff;
  background-color: RoyalBlue;
    &:hover{
      background-color:CornflowerBlue;
    }
`;
export default StyledButton;