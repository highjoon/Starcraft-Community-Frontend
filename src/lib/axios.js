import axios from "axios";

const instance = axios.create({
    baseURL: "http://54.180.148.132/",
    headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json",
    },
});

export const apis = {
    getPost: () => instance.get("/api/post"),
    createPost: (contents) =>
        instance.post("/api/post", contents, {
            headers: {
                "content-type": "multipart/form-data",
            },
        }),
    signUp: (contents) => instance.post("/user/signup", contents),
    logIn: (contents) =>
        instance.post("/user/login", contents, {
            headers: {
                "content-type": "application/x-www-form-urlencoded",
            },
        }),
};
