import { apis } from "../../shared/api";

// // Actions
const LOAD = "comment/LOAD";
// const CREATE = "magazine/CREATE";
// const DELETE = "magazine/DELETE";

// // Reducer
export default function reducer(state = initalState, action = {}) {
  switch (action.type) {
    case "comment/LOAD": {
      console.log("이제 값을 불러올거야");
      console.log(action.comment);
      // const q = query(action.magazine, orderBy("posting_id"), limit(1000));
      return { list: action.comment, is_loaded: true };
    }

    //     case "magazine/CREATE": {
    //       console.log("이제 값을 만들거야");

    //       const new_magazine_list = [...state.list];
    //       return { ...state, list: new_magazine_list };
    //     }

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

// export function createMagazine(magazine) {
//   console.log("액션을 생성할거야!");
//   return { type: CREATE, magazine };
// }

// export function deleteMagazine(magazine_index) {
//   console.log("지울 인덱스", magazine_index);
//   return { type: DELETE, magazine_index };
// }

// /// middlewares(파이어베이스랑 통신하는 부분)
// export const loadCommentApi = (id) => {
//   return async function (dispatch) {
//     try {
//       console.log(id);
//       const data = await apis.loadcomments(id);
//       console.log(data);
//       dispatch(loadComment(data));
//       return { is_loaded: true };

//     } catch (e) {
//       console.log(`포스팅 조회 오류 발생!${e}`);
//     }
//   };
// };

export const loadCommentApi = (id) => async (dispatch) => {
  try {
    const { data } = await apis.loadcomments(id);
    dispatch(loadComment(data));
  } catch (e) {
    console.log(`코멘트 불러오기 실패! ${e}`);
  }
};

// export const createMagazineFB = (magazine) => {
//   return async function (dispatch) {
//     const docRef = await addDoc(collection(db, "magazine"), magazine);
//     const magazine_data = { id: docRef.id, ...magazine };
//     dispatch(createMagazine(magazine_data));
//   };
// };

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
