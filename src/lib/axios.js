import axios from "axios";

const instance = axios.create({
    baseURL: "http://54.180.148.132:8080/",
    headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

instance.interceptors.request.use(function (config) {
    const accessToken = document.cookie.split("=")[1];
    config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
    return config;
});

export const apis = {
    getPost: () => instance.get("/api/post"),
    createPost: (contents) =>
        instance.post("/api/post", contents, {
            headers: {
                "content-type": "multipart/form-data",
            },
        }),
    deletePost: (id) => instance.delete(`/api/post/${id}`),

    editPost: (id, contents) =>
        instance.put(`/api/post/${id}`, contents, {
            headers: {
                "content-type": "application/json",
            },
        }),

    signUp: (contents) => instance.post("/user/signup", contents),
    logIn: (contents) =>
        instance.post("/user/login", contents, {
            headers: {
                // "content-type": "multipart/form-data",
                "content-type": "application/json",
            },
        }),
    logOut: () => instance.get("/user/logout"),
    getCheck: () => instance.get("/api/checklogin"),
};
