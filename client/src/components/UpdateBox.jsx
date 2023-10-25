import styled from "styled-components";
import StyledButton from "./StyledButton";
import { useState } from "react";
import { StyledButtonWrap } from "./ListBox";
import { StyledInput, StyledTextarea } from "./WriteBox";

const StyledUpdateBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const UpdateBox = ({postId,initialTitle,initialBody,onUpdate,onCancel}) => {
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);

  const handleUpdateClick = () => {
    onUpdate(postId, { title, body });
  };

  return(
    <StyledUpdateBox>
      <StyledInput 
        style={{height:"30px", paddingLeft:"1rem",fontWeight:"bold", fontSize:"1.17rem"}}
        value={title} 
        onChange={(e)=>setTitle(e.target.value)}/>
      <StyledTextarea
        style={{minHeight:"100px", padding:"1rem"}}
        value={body} 
        onChange={(e)=>setBody(e.target.value)}/>
      <StyledButtonWrap style={{justifyContent:"end"}}>
        <StyledButton 
          fontSize="0.7rem"
          padding="0 1rem"
          borderradius="24px"
          onClick={handleUpdateClick}>수정</StyledButton>
        <StyledButton 
          fontSize="0.7rem"
          padding="0 1rem"
          borderradius="24px"
          backgroundcolor="tomato"
          hoverbgcolor="Coral"
          onClick={onCancel}>취소</StyledButton>
      </StyledButtonWrap>

    </StyledUpdateBox>
  )
}

export default UpdateBox;