import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Button, Text, Input } from "../elements";
import { actionCreators as userActions } from "../redux/modules/user";

function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getEmail = (e) => {
        setEmail(e.target.value);
    };

    const getPwd = (e) => {
        setPassword(e.target.value);
    };

    const login = () => {
        dispatch(userActions.logInDB(email, password));
    };

    return (
        <Wrapper>
            <InputBox>
                <Text bold className="email">
                    이메일
                </Text>
                <Input type="text" width="100%" borderRadius="7px" placeholder="이메일을 입력해주세요" _onChange={getEmail} />
                <Text bold margin="70px auto 20px auto" className="password">
                    비밀번호
                </Text>
                <Input type="text" width="100%" borderRadius="7px" placeholder="비밀번호를 입력해주세요" _onChange={getPwd} />
                <Button margin="70px auto 0 auto" padding="22px" width="100%" className="submitBtn" _onClick={login}>
                    로그인
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

    ${({ theme }) => theme.device.desktop} {
        height: 300px;
    }
`;

const InputBox = styled.div`
    flex-basis: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 50px;
    text-align: center;
`;

export default Login;
