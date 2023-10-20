import styled from "styled-components";

const StyledAuthTemplate = styled.div`
  position: absolute;
  left:0;
  top:0;
  bottom:0;
  right:0;
  background-color:#E5ECF3;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;

const FormBox = styled.div`
  box-shadow: 0 0 8px rgba(0,0,0,0.025);
  padding: 2rem;
  width:360px;
  background-color:#fff;
  border-radius:8px;
`;

const AuthTemplate = ({children}) =>{
  return(
    <StyledAuthTemplate>
      <FormBox>
        {children}
      </FormBox>
    </StyledAuthTemplate>
  )
};

export default AuthTemplate;