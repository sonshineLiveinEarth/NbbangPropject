import { apis } from "../../shared/api";
import { localStorageGet, localStorageSet } from "../../shared/localStorage";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

//navigate
const navigate = useNavigate;

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

    //     case "magazine/DELETE": {
    //       const new_magazine_list = state.list.filter((l, idx) => {
    //         return parseInt(action.magazine_index) !== idx;
    //       });
    //       return { ...state, list: new_magazine_list };
    //     }
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
    navigate(0);
  } catch (e) {}
};

// export const createCommentApi = (comment) => async (dispatch, getState) => {
//     const token = localStorage.getItem("token");
//     console.log("토큰", token);
//     return async function (dispatch, getState, { history }) {
//       const user = getState().user.user;
//       const body = {
//         ...comment,
//       };
//       await apis
//         .post(`/api/detail/${comment.postId}`, body, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then(dispatch(addComment(...comment)))
//         .catch((err) => {
//           console.log("댓글추가실패", err);
//         });
//     };
//   };

// export const deleteMagazineFB = (magazine_id) => {
//   return async function (dispatch, getState) {
//     if (!magazine_id) {
//       window.alert("아이디가 없네요!");
//       return;
//     }
//     const docRef = doc(db, "magazine", magazine_id);
//     await deleteDoc(docRef);

//     const _magazine_list = getState().magazine.list;
//     const magazine_index = _magazine_list.findIndex((m) => {
//       return m.id === magazine_id;
//     });

//     dispatch(deleteMagazine(magazine_index));
//   };
// };

export const deleteCommentApi = (coId) => (dispatch) => {
  try {
    apis.delComment(coId);
    dispatch(deleteComment(coId));
  } catch (e) {}
};
