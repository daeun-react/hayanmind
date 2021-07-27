import React, { useEffect } from "react";
import styled from "styled-components";
import Item from "./Item";

import { useDispatch, useSelector } from "react-redux";
import { getCommentThunk } from "../reducer/page";

function List() {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.page);

  //* 부드러운 화면 전환을 위해, Container div DOM에 지정
  const listRef = React.useRef(null);

  //* 처음 렌더링 시, page=1 호출
  useEffect(() => {
    dispatch(getCommentThunk());
  }, [dispatch]);

  //* commnet 변경 시, 페이지에 중앙으로 스크롤 이동
  useEffect(() => {
    listRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [comments]);

  return (
    <Container ref={listRef}>
      {comments.map((comment, index) => (
        <Item key={`commnet${index}`} {...comment} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default List;
