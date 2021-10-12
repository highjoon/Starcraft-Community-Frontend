import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Post = (props) => {
    const postList = useSelector((state) => state.post.postList);

    return (
        <React.Fragment>
            <PostWrapper>
                {postList.map((post, idx) => {
                    return (
                        <PostContainer key={idx}>
                            <PostHeader>{post.header}</PostHeader>
                            <PostTitle>{post.title}</PostTitle>
                            <PostImg src={post.src} />
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