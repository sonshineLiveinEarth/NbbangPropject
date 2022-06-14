import axios from "axios";

const proxy = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    proxy("/api", {
      //도메인 api로 호출
      target: "http://3.39.226.20", //통신할 서버의 도메인주소
      changeOrigin: true,
    })
  );
};

const api = axios.create({
  baseURL: "/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});

// api.interceptors.request.use(function (config) {
// 	const accessToken = document.cookie.split('=')[1];
// 	config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
// 	return config;
// });

export const apis = {
  // post"
  loadposts: () => api.get("/postlist"),
  // loadpost: () => api.get("/posts"),
  // add: (contents) => api.post('/api/articles', contents),
  // edit: (id, contents) => api.put(`api/articles/${id}`, contents),
  // del: (id) => api.delete(`api/articles/${id}`),

  // comment
  loadcomments: (id) => api.get(`/comments`),
  // addComment: (id, content) =>
  // 	api.post(`/api/articles/${id}/comments`, { content }),
  // delComment: (id, coId) => api.delete(`/api/articles/${id}/comments/${coId}`),
  // editComment: (id, coId, content) =>
  // 	api.put(`/api/articles/${id}/comments/${coId}`, { content }),

  // user
  // login: (id, pw) => api.post('/user/login', { username: id, password: pw }),
  signup: (
    nickname,
    email,
    password,
    passwordChek,
    regionDetail,
    ProfileImage
  ) =>
    api.post("/users", {
      userNickname: nickname,
      userEmail: email,
      userPassword: password,
      userPasswordChek: passwordChek,
      regionDetail: regionDetail,
      userProfileImage: ProfileImage,
    }),
  // userInfo: () => api.get(`/myinfo`),
  // userPassword: (pw) => api.post(`/myinfo`, pw),
  // userNewPassword: (pw) => api.put(`/myinfo`, pw),
};
