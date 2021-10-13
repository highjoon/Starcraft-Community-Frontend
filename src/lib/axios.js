import axios from "axios";

const instance = axios.create({
    // baseURL: "http://54.180.148.132/",
    baseURL: "http://localhost:4000/",
    headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
    },
});

export const apis = {
    // 게시물 불러오기
    // getPost: () => instance.get("api/post"),
    getPost: () => instance.get("post"),
    // 게시물 작성하기
    // createPost: (contents) => instance.post("api/post", contents),
    createPost: (contents) => instance.post("post", contents),
    // 게시물 수정하기
    // editPost: (id, content) => instance.put(`/posts/${id}`, content),
    // 게시물 삭제하기
    // delPost: (id) => instance.delete(`/posts/${id}`),
};
