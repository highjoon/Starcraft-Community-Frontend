import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

const LOAD_POST = "LOAD_POST";
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const EDIT_POST = "EDIT_POST";

const loadPost = createAction(LOAD_POST, (postList) => ({ postList }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }));
const editPost = createAction(EDIT_POST, (postId, post) => ({ postId, post }));

const initialState = {
    postList: [
        {
            id: 1,
            categori: 0,
            title: "연결 끊겼을 시 나오는 임시 데이터",
            filePath: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            id: 2,
            categori: 1,
            title: "연결 끊겼을 시 나오는 임시 데이터",
            filePath: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            id: 3,
            categori: 2,
            title: "연결 끊겼을 시 나오는 임시 데이터",
            filePath: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            id: 4,
            categori: 0,
            title: "연결 끊겼을 시 나오는 임시 데이터",
            filePath: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            id: 5,
            categori: 1,
            title: "연결 끊겼을 시 나오는 임시 데이터",
            filePath: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            id: 6,
            categori: 2,
            title: "연결 끊겼을 시 나오는 임시 데이터",
            filePath: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            id: 7,
            categori: 0,
            title: "연결 끊겼을 시 나오는 임시 데이터",
            filePath: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            id: 8,
            categori: 1,
            title: "연결 끊겼을 시 나오는 임시 데이터",
            filePath: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            id: 9,
            categori: 2,
            title: "연결 끊겼을 시 나오는 임시 데이터",
            filePath: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            id: 10,
            categori: 0,
            title: "연결 끊겼을 시 나오는 임시 데이터",
            filePath: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            id: 11,
            categori: 1,
            title: "연결 끊겼을 시 나오는 임시 데이터",
            filePath: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            id: 12,
            categori: 2,
            title: "연결 끊겼을 시 나오는 임시 데이터",
            filePath: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
    ],
};

const getPostDB = () => {
    return (dispatch, getState, { history }) => {
        apis.getPost()
            .then((res) => {
                const post_list = res.data;
                post_list.forEach((post) => {
                    const path = `http://54.180.148.132:8080/display/${post.filePath}`;
                    post.filePath = path;
                });
                dispatch(loadPost(post_list));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

const addPostDB = (post) => {
    return (dispatch) => {
        console.log(post);
        apis.createPost(post)
            .then((res) => {
                console.log(res);
                dispatch(addPost(post));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

const deletePostDB = (id) => {
    return (dispatch, getState, { history }) => {
        apis.deletePost(id)
            .then((res) => {
                console.log(res);
                dispatch(deletePost(id));
                window.alert("삭제되었습니다.");
                history.push("/");
            })
            .then((err) => {
                console.log(err);
            });
    };
};

const editPostDB = (id, post) => {
    return (dispatch, getState, { history }) => {
        apis.editPost(id, post)
            .then((res) => {
                console.log(res);
                dispatch(editPost(id, post));
                window.alert("수정 완료!");
                history.push(`/post/${id}`);
            })
            .then((err) => {
                console.log(err);
                console.error(err);
            });
    };
};

export default handleActions(
    {
        [LOAD_POST]: (state, action) =>
            produce(state, (draft) => {
                draft.postList = action.payload.postList;
            }),
        [ADD_POST]: (state, action) =>
            produce(state, (draft) => {
                draft.postList.push(action.payload.post);
            }),
        [DELETE_POST]: (state, action) =>
            produce(state, (draft) => {
                draft.postList = draft.postList.filter((post, idx) => {
                    if (post.id !== action.payload.id) {
                        return [...draft.postList, post];
                    }
                });
            }),
        [EDIT_POST]: (state, action) =>
            produce(state, (draft) => {
                let postIdx = draft.postList.findIndex((post) => post.id == action.payload.id);
                console.log(postIdx);
                console.log(action.payload.id);
                draft.postList[postIdx] = { ...draft.postList[postIdx], ...action.payload.post };
                console.log(draft.postList[postIdx]);
            }),
    },
    initialState
);

const actionCreators = {
    getPostDB,
    addPostDB,
    deletePostDB,
    editPostDB,
};

export { actionCreators };
