import styled from "styled-components";
import StyledButton from "./StyledButton";
import { useState } from "react";
import { StyledButtonWrap } from "./ListBox";

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
      <input 
        style={{height:"30px", paddingLeft:"1rem", outline:"none"}}
        value={title} 
        onChange={(e)=>setTitle(e.target.value)}/>
      <textarea
        style={{minHeight:"100px", padding:"1rem",outline:"none"}}
        value={body} 
        onChange={(e)=>setBody(e.target.value)}/>
      <StyledButtonWrap style={{justifyContent:"end"}}>
        <StyledButton 
          fontSize="0.7rem"
          padding="0 1rem"
          onClick={handleUpdateClick}>수정</StyledButton>
        <StyledButton 
          fontSize="0.7rem"
          padding="0 1rem"
          backgroundColor="tomato"
          onClick={onCancel}>취소</StyledButton>
      </StyledButtonWrap>

    </StyledUpdateBox>
  )
}

export default UpdateBox;