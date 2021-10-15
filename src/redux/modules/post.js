import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/axios";

const LOAD_POST = "LOAD_POST";
const ADD_POST = "ADD_POST";

const loadPost = createAction(LOAD_POST, (postList) => ({ postList }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

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
                    const path = `http://localhost:8080/display/${post.filePath}`;
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
            .then(() => {
                dispatch(addPost(post));
            })
            .catch((err) => {
                console.log(err);
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
    },
    initialState
);

const actionCreators = {
    getPostDB,
    addPostDB,
};

export { actionCreators };
