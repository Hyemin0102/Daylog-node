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
  position:relative;
  box-shadow: 4px 12px 30px 6px rgba(0,0,0,.09);
  padding: 2rem;
  max-width:360px;
  background-color:#fff;
  border-radius:8px;
  margin: 1rem
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

