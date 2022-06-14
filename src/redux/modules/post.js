import { apis } from "../../shared/api";

// Actions
const LOAD = "post/LOAD";
const LOAD_ID = "post/LOAD_ID";

// Action Creators
export function loadPosts(post) {
  return { type: LOAD, post };
}

export function loadPost_ID(post) {
  return { type: LOAD_ID, post };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "post/LOAD": {
      console.log("이제 값을 불러올거야");
      console.log(action.post);
      return { list: action.post, is_loaded: true };
    }

    default:
      return state;
  }
}
// initialState
const initialState = {
  is_loaded: false,
  list: [],
};

/// middlewares(서버랑 통신하는 부분)
export const loadPostsApi = () => {
  return async function (dispatch) {
    try {
      const data = await apis.loadposts();
      dispatch(loadPosts(data.data));
    } catch (e) {
      console.log(`포스팅 조회 오류 발생!${e}`);
    }
  };
};

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
