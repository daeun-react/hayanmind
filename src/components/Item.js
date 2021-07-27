import React from "react";
import styled from "styled-components";

function Item({ id, email, body }) {
  return (
    <Container>
      <div>
        <p>Comment Id</p> <span>{id}</span>
      </div>
      <div>
        <p>Email</p>
        <span> {email}</span>
      </div>
      <div>
        <p>Comment</p> <span>{body}</span>
      </div>
    </Container>
  );
}

const Container = styled.article`
  width: 500px;
  min-height: 193px;

  background: #f8f9fa;
  border: 0.5px solid #ced4da;
  border-radius: 20px;
  color: #212529;
  font-size: 18px;
  line-height: 21px;

  margin-bottom: 14px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 12px;

    font-size: 18px;
    line-height: 21px;
    color: #212529;

    p {
      font-weight: 600;
      margin-right: 12px;
    }

    span {
      word-break: keep-all;
    }

    &:last-child {
      display: flex;
      flex-direction: column;
      margin-bottom: 0;

      span {
        padding-top: 2px;
      }
    }
  }
`;

export default Item;
