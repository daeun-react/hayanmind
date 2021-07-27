import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentThunk } from "../reducer/page";

function InfinityScroll({ children }) {
  const dispatch = useDispatch();
  const { page, loading } = useSelector((state) => state.page);

  //* throttle 함수
  const throttle = (func, delay) => {
    let timeout = null;
    return function (...args) {
      if (!timeout) {
        timeout = setTimeout(() => {
          func.call(this, ...args);
          timeout = null;
        }, delay);
      }
    };
  };

  //* 화면 하단부까지 scroll되면, 새로운 comment 요청
  const _handleScroll = throttle(() => {
    const { scrollHeight, scrollTop, clientHeight } =
      document.documentElement || document.body;

    if (clientHeight + scrollTop === scrollHeight) {
      dispatch(getCommentThunk(page));
    }
  }, 1000);

  const handleScroll = useCallback(_handleScroll, [_handleScroll]);

  //* scroll event 등록 및 해제
  useEffect(() => {
    if (loading) {
      return; //* 로딩중일 경우 중복 호출 방지
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, loading]);

  return <div>{children}</div>;
}

export default InfinityScroll;
