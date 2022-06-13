
import moment from "moment";
import { produce } from "immer";

import { createAction, handleActions } from "redux-actions";



//Action
const LOAD = "post/LOAD";

const ADD = "post/ADD";

const EDIT = "post/EDIT";

const DELETE = "post/DELETE";

const LOADING = "LOADING";



//Action Creator
export function createPost(post){
    console.log("포스트를 생성할거야!");
      return {type: ADD, post: post};
  }

//InitialState
const initialState = {
    list: [
        {
        postId: 1,
        postCategory: "All",
        postTitle: "이거 먹을 사람",
        postImage: null,
        postAddress: "아파트 어딘가",
        postOrderTime: "09:53",
        postContent: "안올거면 말고",
        postDate: "오늘",
        userNickname: "String",
        authorId: null
      },
      {
        postId: 2,
        postCategory: "Chinese",
        postTitle: "이거 먹을 사람",
        postImage: null,
        postAddress: "이런 동네",
        postOrderTime: "18:56",
        postContent: "여기여기 모여라",
        postDate: "오늘",
        userNickname: "String",
        authorId: null
      }
    ]

};

//Reducer


export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "post/ADD": {
            console.log("공구가 올라갈거야!");
            const new_post_list = [...state.list, action.post];
            return {list : new_post_list};
        }

        default:
      return state;
      
    }
    
}


// handleActions(
//     {
//         [ADD]: (state, action) =>
//             produce(state, (draft) => {
//                 draft.post.unshift(action.payload.post);
//                 console.log(state, draft);
//             })

//     },
// initialState
// );

// const actionCreators = {
//     addPost
// }

console.log(initialState)