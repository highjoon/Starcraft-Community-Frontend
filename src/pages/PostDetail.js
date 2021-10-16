import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Text, Button } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";
import { useHistory } from "react-router";

const PostDetail = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const postList = useSelector((state) => state.post.postList);
    const storedId = props.match.params.id;
    const is_login = useSelector((state) => state.user.is_login);
    const username = localStorage.getItem("username");

    useEffect(() => {
        dispatch(postActions.getPostDB());
    }, []);

    const deletePost = (id, writerNickname) => {
        if (!is_login) {
            window.alert("로그인이 필요합니다.");
            return;
        }
        if (writerNickname !== username) {
            window.alert("권한이 없습니다.");
            return;
        }
        if (window.confirm("게시물을 삭제하시겠습니까?")) {
            dispatch(postActions.deletePostDB(id));
        }
    };

    const editPost = (id, writerNickname) => {
        if (!is_login) {
            window.alert("로그인이 필요합니다.");
            return;
        }
        if (writerNickname !== username) {
            window.alert("권한이 없습니다.");
            return;
        }
        history.push(`/edit/${id}`);
    };

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
                            <BtnContainer>
                                <Button margin="30px" className="editBtn" height="40px" text="수정" _onClick={() => editPost(post.id, post.userNick)} />
                                <Button margin="30px" className="delBtn" height="40px" text="삭제" _onClick={() => deletePost(post.id, post.userNick)} />
                            </BtnContainer>
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

    ${({ theme }) => theme.device.desktop} {
        & p {
            font-size: 30px;
        }
    }

    ${({ theme }) => theme.device.tablet} {
        & p {
            font-size: 25px;
        }
    }

    ${({ theme }) => theme.device.mobile} {
        & p {
            font-size: 20px;
        }
    }
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

    ${({ theme }) => theme.device.desktop} {
        width: 400px;
        height: 400px;
    }

    ${({ theme }) => theme.device.tablet} {
        width: 300px;
        height: 300px;
    }

    ${({ theme }) => theme.device.mobile} {
        width: 200px;
        height: 200px;
    }
`;

const TextContainer = styled.div`
    width: 700px;
    height: 200px;
    border-radius: 7px;
    margin: 20px auto;
    background-color: #fff;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
    overflow-y: scroll;

    ${({ theme }) => theme.device.desktop} {
        width: 600px;
        height: 150px;
        & p {
            font-size: 25px;
        }
    }

    ${({ theme }) => theme.device.tablet} {
        width: 400px;
        height: 150px;
        & p {
            font-size: 20px;
        }
    }

    ${({ theme }) => theme.device.mobile} {
        width: 250px;
        height: 100px;
        & p {
            font-size: 15px;
        }
    }
`;

const BtnContainer = styled.div`
    width: 500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    ${({ theme }) => theme.device.desktop} {
        width: 300px;
        height: 80px;

        & button {
            margin: 5px;
            width: 100%;
        }
    }

    ${({ theme }) => theme.device.tablet} {
        width: 200px;
        height: 70px;

        & button {
            margin: 5px;
            width: 100%;
        }
    }

    ${({ theme }) => theme.device.mobile} {
        width: 200px;
        height: 60px;

        & button {
            margin: 5px;
            width: 100%;
        }
    }
`;

export default PostDetail;
