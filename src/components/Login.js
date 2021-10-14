import React, { useState } from "react";
import styled from "styled-components";
import { Text, Input } from "../elements";
import { Button } from "../elements";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "id") {
      setId(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Wrapper>
      <InputBox>
        <Title bold>로그인</Title>
        <Text bold>이메일</Text>
        <Input
          type="text"
          width="100%"
          borderRadius="7px"
          placeholder="이메일을 입력해주세요"
        />
        <Text bold margin="70px auto 20px auto">
          비밀번호
        </Text>
        <Input
          type="text"
          width="100%"
          borderRadius="7px"
          placeholder="비밀번호를 입력해주세요"
        />
        <Button
          margin="70px auto 0 auto"
          padding="22px"
          width="100%"
          className="submitBtn"
        >
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
