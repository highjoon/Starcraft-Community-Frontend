import React from "react";
import Category from "../components/Category";
import Post from "../components/Post";

const Main = (props) => {
    return (
        <React.Fragment>
            <Category />
            <Post />
        </React.Fragment>
    );
};

export default Main;
