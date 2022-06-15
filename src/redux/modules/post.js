import { apis } from "../../shared/api";

//Action
const LOAD = "post/LOAD";
const LOAD_ID = "post/LOAD_ID";
const ADD = "post/ADD";

// Action Creator
export function loadPosts(post) {
  return { type: LOAD, post };
}

export function loadPost_ID(post) {
  return { type: LOAD_ID, post };
}

export function createPost(post) {
  console.log("포스트를 생성할거야!", post);
  return { type: ADD, post: post };
}

// initialState
const initialState = {
  is_loaded: false,
  list: [],
};

/// middlewares(서버랑 통신하는 부분)
// 포스팅 전체 리스트 불러오기
export const loadPostsApi = () => {
  return async function (dispatch) {
    try {
      console.log("얍");
      const data = await apis.loadposts();
      dispatch(loadPosts(data.data));
    } catch (e) {
      console.log(`포스팅 조회 오류 발생!${e}`);
    }
  };
};
// 포스팅 하나 불러오기
export const loadPostApi = () => {
  return async function (dispatch) {
    try {
      const data = await apis.loadpost();
      dispatch(loadPost_ID(data.data));
    } catch (e) {
      console.log(`포스팅 조회 오류 발생!${e}`);
    }
  };
};

//포스팅 생성하기
export const createPostApi = (post) => {
  return async function (dispatch) {
    try {
      console.log("api에 데이터를 추가할거여");
      const docRef = await apis.addpost();
      const data = { id: docRef.id, ...post };
      dispatch(loadPosts(data.data));
    } catch (e) {
      console.log(`포스팅 추가 오류 발생!${e}`);
    }
  };
};

//Reducer

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "post/LOAD": {
      console.log("이제 값을 불러올거야");
      console.log(action.post);
      return { list: action.post, is_loaded: true };
    }

    case "post/ADD": {
      console.log("공구가 올라갈거야!");
      const new_post_list = [...state.list, action.post];
      return { list: new_post_list };
    }

    default:
      return state;
  }
}
