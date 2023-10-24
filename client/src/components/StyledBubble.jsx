import styled from "styled-components";

const StyledBubble = styled.img`
  position: absolute;
  top: ${(props) => props.top || '-40px'};
  left: ${(props) => props.left || '35px'};
  width: ${(props) => props.width || 'auto'};
`;

export default StyledBubble;