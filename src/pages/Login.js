import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Button, Text } from "../elements";
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
        console.log(email, password);
        dispatch(userActions.logInDB(email, password));
    };

    return (
        <Wrapper>
            <InputBox className="input-wrapper">
                <form action="http://54.180.148.132/user/login" method="post">
                    <Text bold>이메일</Text>
                    <input type="text" name="username" placeholder="userID" />
                    <Text bold margin="70px auto 20px auto">
                        비밀번호
                    </Text>
                    <input type="password" name="password" placeholder="password" />
                    <Button type="submit">Sign In</Button>
                </form>
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

const InputBox = styled.div`
    flex-basis: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 50px;
    text-align: center;
`;

const Title = styled.div`
    font-size: 36px;
    margin: 66px 0 55px 0;
`;

export default Login;
