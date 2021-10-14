import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Text } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";

const PostDetail = (props) => {
    const dispatch = useDispatch();
    const postList = useSelector((state) => state.post.postList);
    const storedId = props.match.params.id;

    useEffect(() => {
        dispatch(postActions.getPostDB());
    }, []);

    return (
        <React.Fragment>
            {postList.map((post, idx) => {
                if (String(post.id) === String(storedId)) {
                    return (
                        <Wrapper key={idx}>
                            <Text size="35px" margin="10px" center bold>
                                {post.title}
                            </Text>
                            <ImageBox style={{ backgroundImage: `url(${post.filePath})` }} />
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

const ImageBox = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 7px;
    margin: 10px auto;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;

const TextContainer = styled.div`
    width: 700px;
    height: 200px;
    border-radius: 7px;
    margin: 20px auto;
    background-color: #fff;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
    overflow-y: scroll;
`;

export default PostDetail;
