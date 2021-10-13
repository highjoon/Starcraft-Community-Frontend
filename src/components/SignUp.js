import React, { useState } from "react";
import styled from "styled-components";

function SignUp() {
  const [id, setId] = useState("");
  const [userNick, setUserNick] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordconfirm] = useState("");

  return (
    <Create_membership>
      <Title>회원가입</Title>
      <Inputs>
      <Label type="text" for="id">
        아이디
      </Label>
      <input
        name="id"
        type="id"
        placeholder="id"
        required
        value={id}
        id="id"
      ></input>
      <Label type="text" for="userNick">
        닉네임
      </Label>
      <input
        name="userNick"
        type="userNick"
        placeholder="userNick"
        required
        value={userNick}
        id="userNick"
      ></input>
      <Label type="text" for="password">
        비밀번호
      </Label>
      <input
        name="password"
        type="password"
        placeholder="password"
        required
        value={password}
        id="password"
      ></input>
      <Label type="text" for="passwordconfirm">
        비밀번호 확인
      </Label>
      <input
        name="passwordconfirm"
        type="passwordconfirm"
        placeholder="passwordconfirm"
        required
        value={passwordconfirm}
        id="passwordconfirm"
      ></input>
      </Inputs>
      <input type="submit" value="사진 업로드" />
      <input type="submit" value="작성완료" />
    </Create_membership>
  );
}

const Create_membership = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 30px auto;
  background-color:#F3F3F3;
`;

const Title = styled.div`
  font-size: 30px;
  width:100%;
  text-align:center;
  margin: 40px;
`;

const Inputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background-color:red;
`;

const Label = styled.div`
`;


export default SignUp;
