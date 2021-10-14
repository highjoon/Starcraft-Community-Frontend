import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";
import { setCookie, deleteCookie } from "../../shared";
import axios from "axios";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const LOAD_USER = "LOAD_USER";
const LOGIN_CHECK = "LOGIN_CHECK";
// const SET_USER = "SET_USER";
// const ADD_USER = "ADD_USER";

const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
// const loadUser = createAction(LOAD_USER, (user) => ({ user }));
const loginCheck = createAction(LOGIN_CHECK, (cookie) => ({ cookie }));
// const setUser = createAction(SET_USER, (email) => ({ email }));
// const addUser = createAction(ADD_USER, (userObj) => ({ userObj }));

const initialState = {
    user: {
        email: "test@test.com",
        password: "test1234",
        userNick: "testNick",
    },
    is_login: false,
};

// const getUserDB = () => {
//     return (dispatch) => {
//         apis.getUser()
//             .then((res) => {
//                 const userData = res.data;
//                 dispatch(loadUser(userData));
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };
// };

// const loginAction = (user) => {
//     return (dispatch, getState, { history }) => {
//         dispatch(logIn(user));
//         history.push("/");
//     };
// };

const logInDB = (email, pwd) => {
    return (dispatch, getState, { history }) => {
        const loginPostData = {
            username: email,
            password: pwd,
        };
        // console.log(JSON.stringify(loginPostData));
        console.log(loginPostData);
        // apis.logIn(JSON.stringify(loginPostData))
        apis.logIn(loginPostData)
            .then((res) => {
                console.log(res);
                if (res.data.token != null) {
                    console.log(res.data);
                    const jwtToken = res.data.token;
                    setCookie("user_login", jwtToken);
                    axios.defaults.headers.common["Authorization"] = `${jwtToken}`;
                    dispatch(
                        logIn({
                            email: email,
                            password: pwd,
                        })
                    );
                    window.alert(`로그인 성공! 이메일 : ${email}, 비밀번호 : ${pwd} (테스트용 임시 알림)`);
                    history.push("/");
                } else {
                    window.alert("ID 또는 비밀번호를 다시 확인해주세요.");
                }
            })
            .catch((err) => {
                console.log(err);
                window.alert("오류 발생!");
            });
    };
};

const signUpDB = (userObj) => {
    return (dispatch, getState, { history }) => {
        apis.signUp(userObj)
            .then((res) => {
                console.log("회원가입 정보 ", res.data);
                // dispatch(addUser(userObj));
                window.alert("회원가입에 성공했습니다.");
                history.push("/login");
            })
            .catch((err) => {
                console.log("signUpDB 에서 오류 발생 ", err);
                console.error(err.response.data);
                window.alert("오류가 발생했습니다. 입력 정보를 다시 한번 확인해주세요!");
            });
    };
};

export default handleActions(
    {
        [LOG_IN]: (state, action) =>
            produce(state, (draft) => {
                draft.user = action.payload.user;
                draft.is_login = true;
            }),
        [LOG_OUT]: (state, action) =>
            produce(state, (draft) => {
                deleteCookie("user_login");
                localStorage.removeItem("userNickName");
                draft.user = null;
                draft.is_login = false;
            }),
        [LOAD_USER]: (state, action) =>
            produce(state, (draft) => {
                draft.user = action.payload.user;
            }),
        [LOGIN_CHECK]: (state, action) =>
            produce(state, (draft) => {
                draft.is_login = action.payload.cookie;
            }),
        // [SET_USER]: (state, action) =>
        //     produce(state, (draft) => {
        //         draft.email = action.paylaod.email;
        //     }),
        // [ADD_USER]: (state, action) =>
        //     produce(state, (draft) => {
        //         draft.user.push(action.payload.userObj);
        //     }),
    },
    initialState
);

const actionCreators = {
    logIn,
    loginCheck,
    logOut,
    // getUserDB,
    signUpDB,
    logInDB,
};

export { actionCreators };
