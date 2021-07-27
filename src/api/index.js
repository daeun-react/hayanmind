import Axios from "axios";

const axios = Axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
});

//* GET API 요청하기
//* https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10
export const commentsAPI = (page, limit = 10) => {
  return axios.get(`/comments`, {
    params: {
      _page: page,
      _limit: limit,
    },
  });
};

export default axios;
