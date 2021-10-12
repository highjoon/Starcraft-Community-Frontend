import React from "react";
import Category from "../components/Category";
import Post from "../components/Post";
import AddBtn from "../components/AddBtn";

const Main = (props) => {
    const { history } = props;
    return (
        <React.Fragment>
            <Category />
            <Post />
            <AddBtn onClick={() => history.push("/write")} />
        </React.Fragment>
    );
};

export default Main;
