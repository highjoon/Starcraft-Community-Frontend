import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { deleteCookie, setCookie } from "../../shared/Cookie";
import { apis } from "../../lib/axios";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, () => ({}));
const setUser = createAction(SET_USER, (user) => ({ user }));

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
        let loginPostData = {
            username: email,
            password: pwd,
        };
        apis.logIn(loginPostData)
            .then((res) => {
                const username = res.data[0].username;
                setCookie("token", res.data[1].token, 7);
                localStorage.setItem("username", username);
                let user = { username: username };
                dispatch(setUser(user));
                window.alert(`${username}님. 환영합니다!`);
                history.push("/");
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
            const userObj = { username: username };
            dispatch(logIn(userObj));
        } else {
            dispatch(logOut());
        }
    };
};

const logOutDB = () => {
    return (dispatch, getState, { history }) => {
        deleteCookie("token");
        localStorage.removeItem("username");
        dispatch(logOut());
        window.alert("성공적으로 로그아웃 했습니다.");
        history.push("/");
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
                draft.user = null;
                draft.is_login = false;
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
    logInCheckDB,
    logOutDB,
    signUpDB,
    logInDB,
};

export { actionCreators };
