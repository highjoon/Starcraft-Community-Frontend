import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Text } from "../elements";
import { useHistory } from "react-router";

import { actionCreators as postActions } from "../redux/modules/post";

const Post = (props) => {
    const dispatch = useDispatch();
    const postList = useSelector((state) => state.post.postList);
    let category = null;
    let categoryImageDir = null;
    let is_all = true;

    const { categorize } = props;
    categorize === "전체보기" ? (is_all = true) : (is_all = false);

    const history = useHistory();
    
   

    useEffect(() => {
        dispatch(postActions.getPostDB());
    }, []);

    const chooseCategory = (target) => {
        switch (target) {
            case 0:
                category = "저그";
                categoryImageDir = "img/zerg.png";
                break;
            case 1:
                category = "테란";
                categoryImageDir = "img/terran.png";
                break;
            case 2:
                category = "프로토스";
                categoryImageDir = "img/protoss.png";
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
                            <PostContainer key={idx} onClick={()=>{history.push(`/post/${post.id}`)}} >
                                <Image src={categoryImageDir} />
                                <Text size="18px" margin="5px">
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
    _onClick : ()=> {};
`;

const PostContainer = styled.div`
    width: 300px;
    height: 400px;
    border-radius: 5px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: #fff;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: all 300ms ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
    
`;

const PostImage = styled.img`
    width: 100%;
    height: 60%;
`;

const Image = styled.img`
    width: 50px;
    height: 50px;
    margin: 5px;
`;

export default Post;
