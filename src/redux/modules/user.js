import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { deleteCookie, setCookie } from "../../shared/Cookie";
import { apis } from "../../lib/axios";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";
const LOGIN_CHECK = "LOGIN_CHECK";

const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (is_login, user) => ({ is_login, user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const logInCheck = createAction(LOGIN_CHECK, (is_login, user) => ({ is_login, user }));

const initialState = {
    user: {
        email: "test@test.com",
        password: "test1234",
        userNick: "testNick",
    },
    is_login: false,
};

const signUpDB = (userObj) => {
    return (dispatch, getState, { history }) => {
        apis.signUp(userObj)
            .then((res) => {
                window.alert("회원가입에 성공했습니다.");
                history.push("/login");
            })
            .catch((err) => {
                console.error(err.response.data);
                window.alert("오류가 발생했습니다. 입력 정보를 다시 한번 확인해주세요!");
            });
    };
};

const logInDB = (email, pwd) => {
    return (dispatch, getState, { history }) => {
        // let loginPostData = new FormData();
        // loginPostData.append("username", email);
        // loginPostData.append("password", pwd);
        let loginPostData = {
            user: {
                username: email,
                password: pwd,
            },
        };
        // console.log(loginPostData);
        apis.logIn(loginPostData)
            .then((res) => {
                console.log("response값 들어옴!");
                console.log(res);
                // console.log(res.data);
                // setCookie("token", res.data[1].token, 7);
                // localStorage.setItem("username", res.data.id);
                // localStorage.setItem("userNick", res.data.userNick);
                // localStorage.setItem("is_login", true);
                // let user = {
                //     username: res.data.id,
                //     userNick: res.data.userNick,
                // };
                // dispatch(setUser(user));
                // window.alert(`${res.data.userNick}님. 환영합니다!`);
                // history.push("/");
            })
            .catch((err) => {
                window.alert("오류가 발생했습니다.");
                console.log(err);
            });
    };
};

const logInCheckDB = () => {
    return (dispatch, getState, { history }) => {
        const tokenCheck = document.cookie;
        if (tokenCheck) {
            const username = localStorage.getItem("username");
            const userNick = localStorage.getItem("userNick");
            const is_login = localStorage.getItem("is_login");
            const userObj = {
                username: username,
                userNick: userNick,
            };
            dispatch(logInCheck(is_login, userObj));
        } else {
            let is_login = false;
            let user = null;
            dispatch(logOut(is_login, user));
        }
    };
};

//  apis.getCheck()
//      .then((res) => {
//  const username = localStorage.getItem("username");
//  const userNick = localStorage.getItem("userNick");
//  const is_login = localStorage.getItem("is_login");
//          const tokenCheck = document.cookie;
//          if (tokenCheck) {
//  const userObj = {
//      username: username,
//      userNick: userNick,
//  };
//  dispatch(logInCheck(is_login, userObj));
//          } else {
//  is_login = false;
//  let user = null;
//  dispatch(logOut(is_login, user));
//          }
//      })
//      .catch((err) => {
//          console.log(err);
//      });

const logOutDB = () => {
    return (dispatch, getState, { history }) => {
        let is_login = false;
        let user = null;
        dispatch(logOut(is_login, user));
        deleteCookie("token");
        localStorage.removeItem("username");
        localStorage.removeItem("userNick");
        localStorage.removeItem("is_login");
        window.alert("성공적으로 로그아웃 했습니다.");
        history.push("/");
    };
};

export default handleActions(
    {
        [LOG_IN]: (state, action) =>
            produce(state, (draft) => {
                draft.is_login = true;
            }),
        [LOG_OUT]: (state, action) =>
            produce(state, (draft) => {
                draft.is_login = action.payload.is_login;
                draft.user = action.payload.user;
            }),
        [LOGIN_CHECK]: (state, action) =>
            produce(state, (draft) => {
                draft.user = action.payload.user;
                draft.is_login = action.payload.is_login;
            }),
        [SET_USER]: (state, action) =>
            produce(state, (draft) => {
                draft.user = action.payload.user;
                draft.is_login = true;
            }),
    },
    initialState
);

const actionCreators = {
    logIn,
    logInCheckDB,
    logOutDB,
    logOut,
    signUpDB,
    logInDB,
};

export { actionCreators };
