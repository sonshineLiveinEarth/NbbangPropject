import { createAction, handleActions } from "redux-actions";
import { setCookie, deleteCookie } from "../../shared/Cookie";
import { produce } from "immer";
import { apis } from "../../shared/api";
import { useNavigate } from "react-router-dom";


import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";
import { localStorageGet, localStorageSet } from "../../shared/localStorage";
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

//cookie

const cookies = new Cookies();

//navigate
const navigate = useNavigate


//미들웨어
// Signup

const SignupDB = (
    nickname,
    email,
    password,
    regionGu,
    regionDetail,
    ProfileImage
) => {
    return function (dispatch, getState,) {
        console.log("가랏!")
        apis.signup(
            nickname,
            email,
            password,
            regionGu,
            regionDetail,
            ProfileImage
        ).then((res) => {
            console.log(res)
            alert(res.data.result);
            console.log(res)
            navigate.replace('/login');

        }).catch((err) => {
            window.alert('이미 존재하는 아이디 또는 이메일입니다.');
            console.log("가랏!")
        });
    };
};

//Login
// 로그인
// const loginDB = () => {
// 	return function (dispatch, getState, { history }) {
// 		const userId = localStorage.getItem('username');
// 		const tokenCheck = document.cookie;
// 		if (tokenCheck) {
// 			dispatch(setLogin({ id: userId }));
// 		} else {
// 			dispatch(logOut());
// 		}
// 	};
// };

const loginDB = (userEmail, userPassword) => {
    console.log(userEmail, userPassword);
    return function (dispatch, getState,) {

        apis.login(userEmail, userPassword)

            .then((res) => {
                console.log(res);
                console.log(res.data.token);
                const cookie = (res.data.token);
                //     setCookie("token", _cookie, 7);
                const DecodedToken = jwt_decode(cookie)
                console.log(DecodedToken);
                localStorage.setItem("jwtToken", cookie)
                dispatch(
                    setUser({
                        is_login: true,
                        userEmail: userEmail,
                        nickname: DecodedToken.nickname
                    })

                );
                console.log("야!야!야!")
                localStorage.setItem("email", userEmail);
                localStorageSet("token", cookie);
                // console.log(setItem);
                console.log(localStorage);

                //    console.log("토큰을 받았어!", userEmail, _cookie)
                cookies.set("userEmail", userEmail, { path: "/" });
                cookies.set("token", cookie, `${cookie}`);
            })

            .catch((error) => {
                console.log(error);
                alert('없는 회원정보 입니다! 회원가입을 해주세요!');
            });
        dispatch(setUser({ userEmail: userEmail }));
    };

};


const loginCheck = () => {
    return function (dispatch, getState,) {
        const userEmail = localStorageGet("useremail");
        const tokenCheck = document.cookie;
        if (tokenCheck) {
            dispatch(
                setUser({
                    userEmail: userEmail,
                })
            );

        }
    }
}

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
                console.log("리듀서로 적용 완료", state, action.payload);
            }),
        [GET_USER]: (state, action) => produce(state, (draft) => { }),

    },
    initialState
)
const actionCreators = {
    SignupDB,
    loginDB,
    logoutDB,
    loginCheck
};
export { actionCreators };
