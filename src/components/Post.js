import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Text } from "../elements";

import { actionCreators as postActions } from "../redux/modules/post";

const Post = (props) => {
    const dispatch = useDispatch();
    const postList = useSelector((state) => state.post.postList);
    let category = null;
    let is_all = true;

    const { categorize } = props;
    categorize === "전체보기" ? (is_all = true) : (is_all = false);

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
                        if (!is_all && categorize !== category) return;
                        return (
                            <PostContainer key={idx}>
                                <Text margin="0" center bold>
                                    {category}
                                </Text>
                                <Text margin="10px" center bold>
                                    {post.title}
                                </Text>
                                <PostImage width="100%" src={post.filePath} />
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
    & :nth-child(1) {
        border-bottom: 1px solid black;
    }
`;

const PostImage = styled.img`
    width: 100%;
    height: 60%;
`;

export default Post;
