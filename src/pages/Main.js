import React, { useState } from "react";
import Category from "../components/Category";
import Post from "../components/Post";
import AddBtn from "../components/AddBtn";

const Main = (props) => {
    const { history } = props;
    const [categorize, setCategorize] = useState("전체보기");
    return (
        <React.Fragment>
            <Category setCategorize={setCategorize} />
            <Post categorize={categorize} />
            <AddBtn onClick={() => history.push("/write")} />
        </React.Fragment>
    );
};

export default Main;
