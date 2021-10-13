import React, { useState } from "react";
import { Category, Post, AddBtn } from "../components";

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
