import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001",
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
  loadposts: () => api.get("/posts"),
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
  login: (email, password) => 
  api.post('/user', { 
    userEmail: email, 
    passPassword: password 
  }),
  signup: (nickname, email, password, regionGu, regionDetail, ProfileImage) =>
  	api.post("/users", {
  		userNickname: nickname,
  		userEmail: email,
  		userPassword: password,
      regionGu: regionGu,
      regionDetail: regionDetail,
      userProfileImage: ProfileImage
  	}),
  // userInfo: () => api.get(`/myinfo`),
  // userPassword: (pw) => api.post(`/myinfo`, pw),
  // userNewPassword: (pw) => api.put(`/myinfo`, pw),
};
