import { createAction, handleActions } from "redux-actions";
import { setCookie, deleteCookie } from "../../shared/Cookie";
import { produce } from "immer";
import { apis } from "../../shared/api";
import { useNavigate } from "react-router-dom";



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

//navigate
const navigate = useNavigate


//미들웨어
// Signup

const SignupDB = (nickname, email, password, regionGu, regionDetail, ProfileImage) => {
    return function (dispatch, getState,) {
        console.log("가랏!")
        apis.signup(nickname, email, password, regionGu, regionDetail, ProfileImage).then((res) => {
            alert(res.data.result);
            navigate.replace('/login');
            
        }).catch((err) => {
            window.alert('이미 존재하는 아이디 또는 이메일입니다.');
            console.log("가랏!")
        });
    };
};

//Login
// 로그인

const loginDB = (email, password) => {
    return function (dispatch, getState,) {
        apis.login(email, password).then((res) => {
            console.log(res);
            alert(res.data.success);
            const _auth = res.headers.authorization;
            const _cookie = _auth.split(" ")[1];

            // setCookie = (name, value, exp)
            setCookie("token", _cookie, 7);
            localStorage.setItem("email", email);
            localStorage.setItem("token", _cookie);
           console.log("토큰을 받았어!", email, _cookie)
        })

            .catch((error) => {
                console.log(error);
                alert('없는 회원정보 입니다! 회원가입을 해주세요!');
            });
        dispatch(setUser({ userEmail: email }));
    };

};


const logoutDB = () => {
    return function (dispatch, getState, { navigate }) {
        dispatch(logOut());
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        navigate.replace("/");
    };
};
//reducer
export default handleActions(

    {
        [SET_USER]: (state, action) =>
            produce(state, (draft) => {
                draft.user = action.payload.user;
                draft.is_login = true;
                console.log(draft.user.userEmail);
                draft.uploading = false;
            }),
        [GET_USER]: (state, action) => produce(state, (draft) => { }),

    },
    initialState
)
const actionCreators = {
    SignupDB,
    loginDB,
    logoutDB

};
export { actionCreators };
