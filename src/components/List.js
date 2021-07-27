import React, { useEffect } from "react";
import styled from "styled-components";
import Item from "./Item";

import { useDispatch, useSelector } from "react-redux";
import { setCommentThunk } from "../reducer/page";

function List() {
  const listRef = React.useRef(null);

  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.page);

  useEffect(() => {
    dispatch(setCommentThunk());
  }, [dispatch]);

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
