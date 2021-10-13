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
    // getPost: () => instance.get("api/post"),
    getPost: () => instance.get("post"),
    // createPost: (contents) => instance.post("api/post", contents),
    createPost: (contents) => instance.post("post", contents),
    // editPost: (id, content) => instance.put(`/posts/${id}`, content),
    // delPost: (id) => instance.delete(`/posts/${id}`),
    getUser: () => instance.get("user"),
    signUp: (contents) => instance.post("user", contents),
    logIn: (contents) => instance.post("user", contents),
};
