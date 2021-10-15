import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Text } from "../elements";
import { useHistory } from "react-router";
import { actionCreators as postActions } from "../redux/modules/post";
import zergImg from "../img/zerg.png";
import protossImg from "../img/protoss.png";
import terranImg from "../img/terran.png";

const Post = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const postList = useSelector((state) => state.post.postList);
    let category = null;
    let categoryImageDir = null;
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
                categoryImageDir = zergImg;
                break;
            case 1:
                category = "테란";
                categoryImageDir = terranImg;
                break;
            case 2:
                category = "프로토스";
                categoryImageDir = protossImg;
                break;
            default:
                category = "";
        }
    };

    return (
        <React.Fragment>
            <WholeContainer>
                <PostWrapper>
                    {postList
                        .slice()
                        .sort((a, b) => a.id - b.id)
                        .map((post, idx) => {
                            chooseCategory(post.categori);
                            if (!is_all && categorize !== category) return;
                            return (
                                <PostContainer
                                    key={idx}
                                    onClick={() => {
                                        history.push(`/post/${post.id}`);
                                    }}
                                >
                                    <Image src={categoryImageDir} />
                                    <Text size="18px" margin="5px">
                                        {post.title}
                                    </Text>
                                    <PostImage width="100%" src={post.filePath} />
                                </PostContainer>
                            );
                        })}
                </PostWrapper>
            </WholeContainer>
        </React.Fragment>
    );
};

const WholeContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const PostWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    gap: 10px 10px;
`;

const PostContainer = styled.div`
    flex-grow: 1;
    width: 300px;
    height: 400px;
    border-radius: 5px;
    margin: 15px auto;
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
