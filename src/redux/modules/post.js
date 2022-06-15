import { apis } from "../../shared/api";

//Action
const LOAD = "post/LOAD";
const LOAD_ID = "post/LOAD_ID";
const ADD = "post/ADD";
const DELETE = "post/DELETE";

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

export function deletePost(post_index) {
  console.log("지울 인덱스", post_index);
  return { type: DELETE, post_index };
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
// export const loadPostApi = (id) => {
//   return async function (dispatch) {
//     try {
//       console.log(id);
//       const data = await apis.loadpost(id);
//       console.log(data.data.detail);
//       dispatch(loadPost_ID(data.data.detail));
//     } catch (e) {
//       console.log(`포스팅 조회 오류 발생!${e}`);
//     }
//   };
// };

export const loadPostApi = (id) => async (dispatch) => {
  try {
    const { data } = await apis.loadpost(id);
    dispatch(loadPost_ID(data));
  } catch (e) {
    // console.log(`개별 아티클 조회 오류 발생!${e}`);
  }
};

//포스팅 삭제하기
export const delPostApi = (id) => {
  return async function (dispatch, getState) {
    try {
      await apis.del(id);
    } catch (e) {}
  };
};

//포스팅 생성하기
export const createPostApi = (post) => {
  return async function (dispatch) {
    try {
      console.log("api에 데이터를 추가할거여");
      const docRef = await apis.addpost(post);
      const data = { id: docRef.id, ...post };
      console.log(data);
      dispatch(createPost(data.data));
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

    case "post/DELETE": {
      console.log("포스팅 삭제할거야");
      return { ...state };
    }

    default:
      return state;
  }
}
