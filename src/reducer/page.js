import { commentsAPI } from "../api";

const SET_COMMENT = "page/SET_COMMNET";
const SET_COMMENT_SUCCESS = "page/SET_COMMENT_SUCCESS";
const SET_COMMENT_FAILURE = "page/SET_COMMNET_FAILURE";

export const setComment = () => ({ type: SET_COMMENT });
export const setCommentSuccess = (data) => ({
  type: SET_COMMENT_SUCCESS,
  payload: data,
});
export const setCommentFailure = (data) => ({
  type: SET_COMMENT_FAILURE,
  payload: data,
});

export const setCommentThunk =
  (pageNum = 1) =>
  async (dispatch) => {
    dispatch(setComment());
    try {
      const { data } = await commentsAPI(pageNum);
      dispatch(setCommentSuccess(data));
    } catch (e) {
      dispatch(setCommentFailure(e));
    }
  };

const initialState = {
  page: 1,
  loading: false,
  error: null,
  comments: [],
};

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
