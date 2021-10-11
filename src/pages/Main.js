import React from "react";
import Header from "../components/Header";
import Category from "../components/Category";
import Post from "../components/Post";

const Main = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Category />
            <Post />
        </React.Fragment>
    );
};

export default Main;
