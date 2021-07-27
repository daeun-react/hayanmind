import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCommentThunk } from "../reducer/page";

function InfinityScroll({ children }) {
  const dispatch = useDispatch();
  const { page, loading } = useSelector((state) => state.page);

  //* throttle 적용
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

  const _handleScroll = throttle(() => {
    const { scrollHeight, scrollTop, clientHeight } =
      document.documentElement || document.body;

    if (clientHeight + scrollTop === scrollHeight) {
      dispatch(setCommentThunk(page));
    }
  }, 1000);

  const handleScroll = useCallback(_handleScroll, [_handleScroll]);

  useEffect(() => {
    //* 로딩중일 경우 중복 호출 방지
    if (loading) {
      return;
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, loading]);

  return <div>{children}</div>;
}

export default InfinityScroll;
