import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Text } from "../elements";

import { actionCreators as postActions } from "../redux/modules/post";

const Post = (props) => {
    const dispatch = useDispatch();
    const postList = useSelector((state) => state.post.postList);
    let category = null;

    useEffect(() => {
        dispatch(postActions.getPostDB());
    }, []);

    const chooseCategory = (target) => {
        switch (target) {
            case 0:
                category = "저그";
                break;
            case 1:
                category = "테란";
                break;
            case 2:
                category = "프로토스";
                break;
            default:
                category = "";
        }
    };

    return (
        <React.Fragment>
            <PostWrapper>
                {postList
                    .slice()
                    .sort((a, b) => a.id - b.id)
                    .map((post, idx) => {
                        chooseCategory(post.categori);
                        return (
                            <PostContainer key={idx}>
                                <PostHeader>{category}</PostHeader>
                                <PostTitle>{post.title}</PostTitle>
                                <PostImg src={post.filePath} />
                            </PostContainer>
                        );
                    })}
            </PostWrapper>
        </React.Fragment>
    );
};

const PostWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
`;

const PostContainer = styled.div`
    width: 300px;
    height: 350px;
    border: 1px solid black;
    border-radius: 7px;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const PostHeader = styled.div`
    width: 100%;
    text-align: center;
    font-size: 25px;
    border-bottom: 1px solid black;
`;

const PostTitle = styled.div`
    width: 100%;
    height: 35px;
    text-align: center;
    font-size: 25px;
    margin: 10px 0 10px 0;
`;

const PostImg = styled.img`
    width: 100%;
    height: 220px;
`;

export default Post;
