import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Species } from "../components";
import { Input, Text, Button } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";
import { UploadImage } from "../shared";

const PostWrite = (props) => {
    const { history } = props;
    const dispatch = useDispatch();
    const title = useRef();
    const content = useRef();
    let [imageDir, setImageDir] = useState("");
    const [species, setSpecies] = useState("");
    const getSpecies = (species) => setSpecies(species);
    const getImageDir = (imageDir) => setImageDir(imageDir);

    const createNewContens = () => {
        const newTitle = title.current.value;
        const newContent = content.current.value;

        if (!species && species !== 0) {
            window.alert("종족을 선택해주세요!");
            return;
        }
        if (!newTitle) {
            window.alert("제목을 입력해주세요!");
            return;
        }
        if (!newContent) {
            window.alert("내용을 입력해주세요!");
            return;
        }
        if (!imageDir) {
            imageDir = "basic.jpg";
        }

        const formData = new FormData();
        formData.append("title", newTitle);
        formData.append("content", newContent);
        formData.append("categori", species);
        formData.append("file", imageDir);

        for (let [key, val] of formData) {
            console.log(key, val);
        }

        dispatch(postActions.addPostDB(formData));
        window.alert("작성 완료!");
        history.push("/");
    };

    return (
        <React.Fragment>
            <Wrapper>
                <Species species={species} getSpecies={getSpecies} />
                <Text bold>제목</Text>
                <Input className="title" type="text" width="100%" borderRadius="7px" placeholder="제목을 입력해주세요" _ref={title} />
                <Text bold>내용</Text>
                <Input className="content" multiLine type="text" borderRadius="7px" placeholder="내용을 입력해주세요" _ref={content} />
                <Text bold>이미지</Text>
                <UploadImage getImage={getImageDir} _onClick={createNewContens} />
                <Button margin="30px" height="40px" _onClick={createNewContens}>
                    작성하기
                </Button>
            </Wrapper>
        </React.Fragment>
    );
};

const Wrapper = styled.div`
    width: 600px;
    margin: 0 auto;
    text-align: center;

    ${({ theme }) => theme.device.desktop} {
        & .title,
        & .content {
            width: 500px;
        }
    }

    ${({ theme }) => theme.device.tablet} {
        & .title,
        & .content {
            width: 300px;
            height: 70px;

            &::placeholder {
                text-align: center;
                line-height: 100%;
                font-size: 12px;
            }
        }
    }

    ${({ theme }) => theme.device.mobile} {
        & .title,
        & .content {
            width: 200px;
            height: 50px;
        }
    }
`;

export default PostWrite;
