import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Input, Text, Button } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";
import Species from "../components/Species";

const PostWrite = (props) => {
    const dispatch = useDispatch();
    const title = React.useRef();
    const content = React.useRef();
    const fileInput = React.useRef();

    const { history } = props;

    const [imageDir, setImageDir] = useState("");
    const [species, setSpecies] = useState("");
    const getSpecies = (species) => {
        setSpecies(species);
    };

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
            categori: species,
            filePath: imageDir,
        };
        console.log(newObj);
        dispatch(postActions.addPostDB(newObj));
        window.alert("작성 완료!");
        history.push("/");
    };

    return (
        <React.Fragment>
            <Wrapper>
                <Species species={species} getSpecies={getSpecies} />
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

export default PostWrite;
