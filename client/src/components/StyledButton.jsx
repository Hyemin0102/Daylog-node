import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  font-family: "Pretendard";
  border-radius: ${(props) => props.borderradius || '8px'};
  font-size: ${(props) => props.fontSize || '1rem'};
  padding: ${(props) => props.padding || '0 1.3rem'};
  height: ${(props) => props.height || '2.5rem'};
  outline:none;
  cursor:pointer;
  color:#fff;
  background-color: ${(props) => props.backgroundcolor || 'RoyalBlue'};
  width: ${(props) => props.width || 'auto'};
    &:hover{
      background-color: ${(props) => props.hoverbgcolor || 'CornflowerBlue'};
    }
`;
export default StyledButton;