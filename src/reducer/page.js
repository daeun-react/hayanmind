import { commentsAPI } from "../api";

//* TYPE
const SET_COMMENT = "page/SET_COMMNET";
const SET_COMMENT_SUCCESS = "page/SET_COMMENT_SUCCESS";
const SET_COMMENT_FAILURE = "page/SET_COMMNET_FAILURE";

//* ACTION 함수 생성
export const getComment = () => ({ type: SET_COMMENT });
export const getCommentSuccess = (data) => ({
  type: SET_COMMENT_SUCCESS,
  payload: data,
});
export const getCommentFailure = (data) => ({
  type: SET_COMMENT_FAILURE,
  payload: data,
});

//* THUNK-ACTION 함수 생성
export const getCommentThunk =
  (pageNum = 1) =>
  async (dispatch) => {
    dispatch(getComment());
    try {
      const { data } = await commentsAPI(pageNum);
      dispatch(getCommentSuccess(data));
    } catch (e) {
      dispatch(getCommentFailure(e));
    }
  };

//* 초기 상태
const initialState = {
  page: 1,
  loading: false,
  error: null,
  comments: [],
};

//* 리듀서
function page(state = initialState, action) {
  switch (action.type) {
    case SET_COMMENT:
      return {
        ...state,
        loading: true,
      };
    case SET_COMMENT_SUCCESS:
      return {
        ...state,
        page: state.page + 1,
        loading: false,
        error: null,
        comments: state.comments.concat(action.payload),
      };
    case SET_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        comments: [],
      };
    default:
      return state;
  }
}

export default page;
