import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchPosts} from "../redux/action/postAction";
import StyledButton from "./StyledButton";
import axios from "axios";
import UpdateBox from "./UpdateBox";

export const StyledListBox = styled.div`
  padding: 1.5rem;
  min-height: 6rem;
  background-color: white;
  border-radius: 1rem;
`;

const StyledListWrap = styled.div`
  position: relative;
  padding: 1rem;
  border-bottom: 1px solid gray;
`;

const StyledListInner = styled.div`
  display: flex;
  justify-content:space-between;
  @media (max-width: 768px) {
    display: block;;
  }

`

export const StyledButtonWrap = styled.div`
  display: flex;
  gap:1rem;
  align-items: end;
  @media (max-width: 768px) {
    justify-content: end;;
  }
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
  const [editPostId, setEditPostId] = useState(null);


  useEffect(()=>{
    dispatch(fetchPosts());
  },[dispatch]);

  const handleDelete = async(postId) => {
    const confirmed = window.confirm('정말로 이 포스트를 삭제하시겠습니까?');
    if(confirmed){
      try{
        await axios.delete(`/api/post/${postId}`);
        await dispatch(fetchPosts());
      } catch (error) {
        console.error('포스트 삭제에 실패했습니다:', error);
      }
    } else {
      console.log('포스트 삭제가 취소되었습니다.')
    }
    
  };

  const handleUpdate = async(postId, updateData)=>{
    try{
      await axios.patch(`/api/post/${postId}`, updateData);
      await dispatch(fetchPosts());
      setEditPostId(null); //수정 후 editingPostId를 초기화하여 수정 상태 종료
    }catch (error) {
      console.error('포스트 수정에 실패했습니다:', error);
    }
  };

  //수정 버튼 클릭 시 postId 업데이트
  const handleEditClick = (postId) => () => {
    setEditPostId(postId);
  };

  // 수정 취소 시 editingPostId를 초기화하여 수정 상태 종료
  const handleCancelEdit = () => {
    setEditPostId(null); 
  };

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };

  return(
    <StyledListBox>
      {posts.map((post) => {
        const kor = new Date(post.publishedDate);
        const formattedDate = kor.toLocaleString('ko-KR', options);
        const isEditing = post._id === editPostId;
        return(
        <StyledListWrap key={post._id}>
          <div>
            {isEditing ? (
              <UpdateBox 
                postId = {post._id}
                initialTitle={post.title}
                initialBody={post.body}
                onUpdate={handleUpdate}
                onCancel={handleCancelEdit}
              />
            ):(
              <StyledListInner>
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </div>
                <StyledButtonWrap>
                    <StyledButton
                      borderradius="24px"
                      fontSize="0.7rem"
                      padding="0 1rem"
                      onClick={handleEditClick(post._id)}
                      >수정</StyledButton>
                    <StyledButton
                      borderradius="24px"
                      fontSize="0.7rem"
                      padding="0 1rem"
                      backgroundcolor="tomato"
                      hoverbgcolor="Coral"
                      onClick={()=>handleDelete(post._id)}
                      >삭제</StyledButton>
                </StyledButtonWrap>
                <StyledPosition> {formattedDate}</StyledPosition>
              </StyledListInner>
            )}
          </div>
        </StyledListWrap>
        );
      })}
    </StyledListBox>
  )
}

export default ListBox;