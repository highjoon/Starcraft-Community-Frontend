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
            categori: "저그",
            title: "제목",
            filePath: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
    ],
};

const getPostDB = () => {
    return (dispatch) => {
        apis.getPost()
            .then((res) => {
                const post_list = res.data;
                dispatch(loadPost(post_list));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

const addPostDB = (post) => {
    return (dispatch) => {
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
