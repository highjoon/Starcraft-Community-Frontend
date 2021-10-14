import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Text } from "../elements";
import Post from "../components/Post";

const PostDetail = (props) => {
    const { history } = props;
    const postList = useSelector((state) => state.post.postList);
    const storedId = props.match.params.id;

    return (
        <React.Fragment>
            {postList.map((post, idx) => {
                if (String(post.id) === String(storedId)) {
                    return (
                        <Wrapper>
                            <Text size="35px" margin="10px" center bold>
                                {post.title}
                            </Text>
                            <Image src={post.filePath} alt="" />
                            <TextContainer>
                                <Text>{post.content}</Text>
                            </TextContainer>
                        </Wrapper>
                    );
                }
            })}
        </React.Fragment>
    );
};

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
`;

const Image = styled.img`
    width: 500px;
    height: 500px;
    border: 1px solid black;
    border-radius: 7px;
    margin: 10px auto;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
`;

const TextContainer = styled.div`
    width: 700px;
    height: 200px;
    border: 1px solid black;
    border-radius: 7px;
    margin: 20px auto;
    background-color: #fff;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
`;

export default PostDetail;
