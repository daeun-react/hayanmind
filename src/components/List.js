import React, { useEffect } from "react";
import styled from "styled-components";
import Item from "./Item";

import { useDispatch, useSelector } from "react-redux";
import { setCommentThunk } from "../reducer/page";

function List() {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.page);

  useEffect(() => {
    dispatch(setCommentThunk());
  }, [dispatch]);

  return (
    <Container>
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
