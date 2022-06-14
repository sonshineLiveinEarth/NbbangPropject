// // Actions
// const LOAD = "magazine/LOAD";
// const CREATE = "magazine/CREATE";
// const DELETE = "magazine/DELETE";

// // Reducer
// export default function reducer(state = initalState, action = {}) {
//   switch (action.type) {
//     case "magazine/LOAD": {
//       console.log("이제 값을 불러올거야");
//       console.log(action.magazine);
//       // const q = query(action.magazine, orderBy("posting_id"), limit(1000));
//       return { list: action.magazine, is_loaded: true };
//     }

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
//     default:
//       return state;
//   }
// }

// const initalState = {
//   is_loaded: false,
//   list: [],
// };

// // // Action Creators
// export function loadMagazine(magazine) {
//   return { type: LOAD, magazine };
// }

// export function createMagazine(magazine) {
//   console.log("액션을 생성할거야!");
//   return { type: CREATE, magazine };
// }

// export function deleteMagazine(magazine_index) {
//   console.log("지울 인덱스", magazine_index);
//   return { type: DELETE, magazine_index };
// }

// /// middlewares(파이어베이스랑 통신하는 부분)
// export const loadMagazineFB = () => {
//   return async function (dispatch) {
//     // const magazine_data = await getDocs(collection(db, "magazine"));

//     let magazine_list = [];

//     magazine_data.forEach((magazine) => {
//       magazine_list.push({ id: magazine.id, ...magazine.data() });
//       // console.log(magazine_list);
//     });
//     dispatch(loadMagazine(magazine_list));
//   };
// };

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
