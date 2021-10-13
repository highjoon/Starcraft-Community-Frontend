import React, { useState } from "react";
import styled from "styled-components";
import { Text, Input } from "../elements";
import UploadImage from "../shared/UploadImage";
import { Button } from "../elements";

function SignUp() {
    const [id, setId] = useState("");
    const [userNick, setUserNick] = useState("");
    const [password, setPassword] = useState("");
    const [passwordconfirm, setPasswordconfirm] = useState("");

    let [imageDir, setImageDir] = useState("");

    const getImageDir = (imageDir) => {
        setImageDir(imageDir);
    };

    return (
        <Wrapper>
            <ImgBox>
                <Text bold>이미지</Text>
                <UploadImage getImage={getImageDir} />
            </ImgBox>
            <InputBox>
                <Text bold>이메일</Text>
                <Input type="text" width="100%" borderRadius="7px" placeholder="이메일을 입력해주세요" />
                <Text bold>닉네임</Text>
                <Input type="text" width="100%" borderRadius="7px" placeholder="닉네임을 입력해주세요" />
                <Text bold>비밀번호</Text>
                <Input type="text" width="100%" borderRadius="7px" placeholder="비밀번호를 입력해주세요" />
                <Text bold>비밀번호 확인</Text>
                <Input type="text" width="100%" borderRadius="7px" placeholder="비밀번호를 확인해주세요" />
                <Button margin="10px auto 0 auto" width="100%" className="submitBtn">
                    회원가입
                </Button>
            </InputBox>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 10px auto;

    & .submitBtn {
        display: block;
    }
`;

const ImgBox = styled.div`
    flex-basis: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
`;

const InputBox = styled.div`
    flex-basis: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 50px;
    text-align: center;
`;

export default SignUp;
