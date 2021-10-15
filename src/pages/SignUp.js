import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { CheckEmail, CheckNick, CheckPwd, UploadImage } from "../shared";
import { Text, Input, Button } from "../elements";
import { actionCreators as userActions } from "../redux/modules/user";
import basicProfileImg from "../img/basicProfileImg.jpg";

const SignUp = (props) => {
    const { history } = props;
    const dispatch = useDispatch();

    let [imageDir, setImageDir] = useState("");
    const [email, setEmail] = useState("");
    const [nickName, setNickName] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");

    const getImageDir = (imageDir) => {
        setImageDir(imageDir);
    };

    const submitInfo = () => {
        if (!email) {
            window.alert("이메일을 입력해주세요!");
            return;
        }
        if (!CheckEmail(email)) {
            window.alert("이메일 형식을 확인해주세요!");
            return;
        }
        if (!nickName) {
            window.alert("닉네임을 입력해주세요!");
            return;
        }
        if (!CheckNick(nickName)) {
            window.alert("닉네임은 한글, 영문 대소문자, 숫자만 가능합니다!");
            return;
        }
        if (!pwd) {
            window.alert("비밀번호를 입력해주세요!");
            return;
        }
        if (!CheckPwd(pwd)) {
            window.alert("비밀번호는 숫자와 문자를 포함하여 6~12자리 이내로 작성해주세요!");
            return;
        }
        if (pwd !== confirmPwd) {
            window.alert("비밀번호가 일치하지 않습니다!");
            return;
        }
        if (!imageDir) {
            imageDir = basicProfileImg;
        }

        let userObj = {
            id: email,
            password: pwd,
            passwordconfirm: pwd,
            userNick: nickName,
        };
        dispatch(userActions.signUpDB(userObj));
    };

    return (
        <Wrapper>
            <ImgBox>
                <Text bold>이미지</Text>
                <UploadImage getImage={getImageDir} />
            </ImgBox>
            <InputBox>
                <Text bold>이메일</Text>
                <Input
                    type="text"
                    width="100%"
                    borderRadius="7px"
                    placeholder="이메일을 입력해주세요"
                    _onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <Text bold>닉네임</Text>
                <Input
                    type="text"
                    width="100%"
                    borderRadius="7px"
                    placeholder="닉네임을 입력해주세요"
                    _onChange={(e) => {
                        setNickName(e.target.value);
                    }}
                />
                <Text bold>비밀번호</Text>
                <Input
                    type="text"
                    width="100%"
                    borderRadius="7px"
                    placeholder="비밀번호를 입력해주세요"
                    _onChange={(e) => {
                        setPwd(e.target.value);
                    }}
                />
                <Text bold>비밀번호 확인</Text>
                <Input
                    type="text"
                    width="100%"
                    borderRadius="7px"
                    placeholder="비밀번호를 확인해주세요"
                    _onChange={(e) => {
                        setConfirmPwd(e.target.value);
                    }}
                />
                <Button margin="10px auto 0 auto" width="100%" className="submitBtn" _onClick={submitInfo}>
                    회원가입
                </Button>
            </InputBox>
        </Wrapper>
    );
};

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
