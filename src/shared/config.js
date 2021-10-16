const config = {
    api: "http://54.180.148.132:8080",
    token: {
        headers: { authorization: `Bearer ${sessionStorage.getItem("JWT")}` },
    },
};

export { config };
