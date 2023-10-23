import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import StyledButton from "./StyledButton";
import { fetchPosts, writePost } from "../redux/action/postAction";

const StyledWriteBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  min-height: 8rem;
  background-color: white;
  border-radius: 1rem;
`;

const WriteBox = () =>{
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (e) =>{
    setTitle(e.target.value);
  }
  
  const handleBodyChange = (e) =>{
    setBody(e.target.value);
  }

  const handleWritePost = async() =>{
    try {
      await dispatch(writePost({ title, body })); //글 작성
      await dispatch(fetchPosts()); //글 조회
      setTitle('');
      setBody('');
      
    } catch (error) {
      console.error('Error writing post: ', error);
    }
  }

  return(
    <StyledWriteBox>
      <input 
        style={{height:"30px", paddingLeft:"1rem", outline:"none"}}
        type="text" 
        placeholder="제목" 
        value={title} 
        onChange={handleTitleChange}/>
      <textarea
        style={{minHeight:"150px", padding:"1rem",outline:"none"}}
        placeholder="내용"
        value={body}
        onChange={handleBodyChange} />
      <StyledButton onClick={handleWritePost} width="6rem">글쓰기</StyledButton>
    </StyledWriteBox>
  )
}

export default WriteBox;