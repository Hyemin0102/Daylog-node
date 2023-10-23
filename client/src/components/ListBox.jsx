import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import post, { getPost } from "../redux/slice/post";
import { fetchPosts, writePost } from "../redux/action/postAction";
import StyledButton from "./StyledButton";

const StyledListBox = styled.div`
  padding: 1.5rem;
  min-height: 6rem;
  background-color: white;
  border-radius: 1rem;
`;

const StyledListWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid gray;
`;

const StyledButtonWrap = styled.div`
  display: flex;
  gap:1rem;
  align-items: end;
`;

const StyledPosition = styled.p`
  position:absolute;
  right:1rem;
  top: 0;
  font-size: 0.8rem;
  font-weight:bold;
`

const ListBox = () =>{
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);
  console.log('posts',posts)
/*const filteredPosts = posts.filter((post) => post.title && post.body) 
  console.log('filteredPosts',filteredPosts) */


  useEffect(()=>{
    dispatch(fetchPosts());
  },[dispatch])
  return(
    <StyledListBox>
      {posts.map((post) => {
        const formattedDate = post.publishedDate.slice(0, 10);
        return(
        <StyledListWrap key={post._id}>
          <div>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
          <StyledButtonWrap>
            <StyledButton fontSize="0.7rem" padding="0 1rem">수정</StyledButton>
            <StyledButton fontSize="0.7rem" padding="0 1rem" backgroundColor="tomato">삭제</StyledButton>
          </StyledButtonWrap>
          <StyledPosition>작성일 : {formattedDate}</StyledPosition>
        </StyledListWrap>
        );
      })}
    </StyledListBox>
  )
}

export default ListBox;