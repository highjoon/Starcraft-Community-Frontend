import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";
import { deleteCookie } from "../../shared";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const LOAD_USER = "LOAD_USER";
const LOGIN_CHECK = "LOGIN_CHECK";

const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const loginCheck = createAction(LOGIN_CHECK, (cookie) => ({ cookie }));

const initialState = {
    user: {
        email: "test@test.com",
        password: "test1234",
        userNick: "testNick",
    },
    is_login: false,
};

const logInDB = (email, pwd) => {
    return (dispatch, getState, { history }) => {
        let loginPostData = new FormData();
        loginPostData.append("username", email);
        loginPostData.append("password", pwd);
        console.log(loginPostData);
        apis.logIn(loginPostData)
            .then((res) => {
                console.log(res);
                window.alert(`로그인 성공! 이메일 : ${email}, 비밀번호 : ${pwd} (테스트용 임시 알림)`);
                history.push("/");
                // if (res.data.token != null) {
                //     console.log(res.data);
                //     const jwtToken = res.data.token;
                //     setCookie("user_login", jwtToken);
                //     axios.defaults.headers.common["Authorization"] = `${jwtToken}`;
                //     dispatch(
                //         logIn({
                //             email: email,
                //             password: pwd,
                //         })
                //     );

                // } else {
                //     window.alert("ID 또는 비밀번호를 다시 확인해주세요.");
                // }
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
    },
    initialState
);

const actionCreators = {
    logIn,
    loginCheck,
    logOut,
    signUpDB,
    logInDB,
};

export { actionCreators };
