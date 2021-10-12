import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Input, Text, Button } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";

const PostWrite = (props) => {
    const dispatch = useDispatch();
    const title = React.useRef();
    const content = React.useRef();
    const fileInput = React.useRef();

    const [imageDir, setImageDir] = React.useState("");

    const selectFile = (e) => {
        const reader = new FileReader();
        const file = fileInput.current.files[0];
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageDir(reader.result);
        };
    };

    const createNewContens = () => {
        const newTitle = title.current.value;
        const newContent = content.current.value;
        const newObj = {
            title: newTitle,
            content: newContent,
            filePath: imageDir,
        };
        dispatch(postActions.addPost(newObj));
        window.alert("작성 완료!");
    };

    return (
        <React.Fragment>
            <Wrapper>
                <Species>저그</Species>
                <Text bold>제목</Text>
                <Input type="text" width="100%" borderRadius="7px" placeholder="제목을 입력해주세요" _ref={title} />
                <Text bold>내용</Text>
                <Input multiLine type="text" borderRadius="7px" placeholder="내용을 입력해주세요" _ref={content} />
                <Text bold>이미지</Text>
                <input type="file" onChange={selectFile} ref={fileInput} />
                <Button _onClick={createNewContens}>작성하기</Button>
            </Wrapper>
        </React.Fragment>
    );
};

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
`;

const Species = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    padding: 12px 0px;
    border: 1px solid black;
    border-radius: 7px;
    background-color: #212121;
    color: #ffffff;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export default PostWrite;
