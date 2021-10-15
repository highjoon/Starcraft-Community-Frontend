import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Category, Post, AddBtn } from "../components";

const Main = (props) => {
    const { history } = props;
    const [categorize, setCategorize] = useState("전체보기");
    const is_login = useSelector((state) => state.user.is_login);

    const addPost = () => {
        if (!is_login) {
            window.alert("로그인이 필요합니다.");
            return;
        }
        history.push("/write");
    };
    return (
        <React.Fragment>
            <Category setCategorize={setCategorize} />
            <Post categorize={categorize} />
            <AddBtn isLogin={is_login} onClick={addPost} />
        </React.Fragment>
    );
};

export default Main;
