import { apis } from "../../shared/api";
import { localStorageGet, localStorageSet } from "../../shared/localStorage";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

// // Actions
const LOAD = "comment/LOAD";
const CREATE = "comment/CREATE";
const DELETE = "comment/DELETE";

// // Reducer
export default function reducer(state = initalState, action = {}) {
  switch (action.type) {
    case "comment/LOAD": {
      console.log("이제 값을 불러올거야");
      console.log(action.comment);
      // const q = query(action.magazine, orderBy("posting_id"), limit(1000));
      return { list: action.comment, is_loaded: true };
    }

    case "comment/CREATE": {
      console.log("이제 값을 만들거야");

      const new_comment_list = [...state.list];
      return { ...state, list: new_comment_list };
    }

    default:
      return state;
  }
}

const initalState = {
  is_loaded: false,
  list: [],
};

// // Action Creators
export function loadComment(comment) {
  return { type: LOAD, comment };
}

export function addComment(comment) {
  console.log("액션을 생성할거야!");
  return { type: CREATE, comment };
}

export function deleteComment(comment_index) {
  console.log("지울 인덱스", comment_index);
  return { type: DELETE, comment_index };
}

// /// middlewares(파이어베이스랑 통신하는 부분)
export const loadCommentApi = (id) => async (dispatch) => {
  try {
    const { data } = await apis.loadcomments(id);
    dispatch(loadComment(data));
  } catch (e) {
    console.log(`코멘트 불러오기 실패! ${e}`);
  }
};

export const createCommentApi = (comment) => async (dispatch, getState) => {
  const userEmail = localStorageGet("useremail");
  const tokenCheck = document.cookie;
  try {
    console.log("댓글 만들 준비");
    console.log(comment);
    const { data } = await apis.createComment(comment);
    console.log(data);

    dispatch(addComment(data));
  } catch (e) {}
};

export const deleteCommentApi = (coId) => (dispatch) => {
  try {
    apis.delComment(coId);
    dispatch(deleteComment(coId));
  } catch (e) {}
};
