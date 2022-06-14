
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from '../../shared/api';

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
    user: null,
    is_login: false,
};

//미들웨어
// Signup
const SginupDB = (nickname, email, password, passwordChek, regionDetail, ProfileImage) => {
    return function (dispatch, getState,) {
        console.log("가랏!")
        apis.signup(nickname, email, password, passwordChek, regionDetail, ProfileImage).then((res) => {
            alert(res.data.result);
            return;
            // history.replace('/login');
        }).catch((err) => {
            window.alert('이미 존재하는 아이디 또는 이메일입니다.');
            console.log("가랏!")
        });
    };
};

//Login
// 로그인
const loginDB = (id, pwd) => {
    return function (dispatch, getState, { history }) {
        apis.login(id, pwd).then((res) => {
            console.log(res);
            if (res.data.ok === false) {
                alert('없는 회원정보 입니다! 회원가입을 해주세요!');
                return;
            }
            localStorage.setItem('login-token', res.data.token);
            alert(`안녕하세요! ${id}님`);
            dispatch(setUser({ userId: id }));
            history.replace('/');
        });
    };
};

//reducer
export default handleActions(
    {
        [SET_USER]: (state, action) =>
            produce(state, (draft) => {
                draft.user = action.payload.user;
                draft.is_login = true;
                console.log(draft.user.userId);
                draft.uploading = false;
            }),
    },
    initialState
)
const actionCreators = {
    SginupDB,

};
export { actionCreators };