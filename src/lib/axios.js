import axios from "axios";
import { getCookie } from "../shared";

const instance = axios.create({
    baseURL: "http://54.180.148.132:8080/",
    headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        // Authorization: `Bearer ${getCookie("token")}`,
        "X-AUTH-TOKEN": `${getCookie("token")}`,
    },
});

// instance.interceptors.request.use(function (config) {
//     const accessToken = document.cookie.split("=")[1];
//     config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
//     return config;
// });

export const apis = {
    getPost: () => instance.get("/api/post"),

    createPost: (contents) =>
        instance.post("/api/post", contents, {
            headers: {
                "content-type": "multipart/form-data",
                "X-AUTH-TOKEN": `${getCookie("token")}`,
            },
        }),

    deletePost: (id) =>
        instance.delete(`/api/post/${id}`, {
            headers: {
                "content-type": "application/json",
                "X-AUTH-TOKEN": `${getCookie("token")}`,
            },
        }),

    editPost: (id, contents) =>
        instance.put(`/api/post/${id}`, contents, {
            headers: {
                "content-type": "application/json",
                "X-AUTH-TOKEN": `${getCookie("token")}`,
            },
        }),

    signUp: (contents) => instance.post("/user/signup", contents),
    logIn: (contents) =>
        instance.post("/user/login", contents, {
            headers: {
                // "content-type": "multipart/form-data",
                "content-type": "application/json",
                "X-AUTH-TOKEN": `${getCookie("token")}`,
            },
        }),

    logOut: () => instance.get("/user/logout"),
    getCheck: () => instance.get("/api/checklogin"),
};
