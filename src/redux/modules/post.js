import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST";

const getPost = createAction(GET_POST, (postList) => ({ postList }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
    post: [],
    postList: [
        {
            header: "저그",
            title: "제목",
            src: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
    ],
};

export default handleActions(
    {
        [GET_POST]: (state, action) =>
            produce(state, (draft) => {
                console.log(action.payload);
                draft.postList = action.payload.postList;
            }),
        [ADD_POST]: (state, action) =>
            produce(state, (draft) => {
                console.log(action.payload.post);
                draft.postList.push(action.payload.post);
            }),
    },
    initialState
);

const actionCreators = {
    getPost,
    addPost,
};

export { actionCreators };
