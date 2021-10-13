import React, { useState } from "react";

function SignUp() {
    const [id, setId] = useState("");
    const [userNick, setUserNick] = useState("");
    const [password, setPassword] = useState("");
    const [passwordconfirm, setPasswordconfirm] = useState("");

    return (
        <div className="Create_membership">
            <p>회원가입</p>
            <label type="text" for="id">
                아이디
            </label>
            <input name="id" type="id" placeholder="id" required value={id} id="id"></input>
            <label type="text" for="userNick">
                닉네임
            </label>
            <input name="userNick" type="userNick" placeholder="userNick" required value={userNick} id="userNick"></input>
            <label type="text" for="password">
                비밀번호
            </label>
            <input name="password" type="password" placeholder="password" required value={password} id="password"></input>
            <label type="text" for="passwordconfirm">
                비밀번호 확인
            </label>
            <input name="passwordconfirm" type="passwordconfirm" placeholder="passwordconfirm" required value={passwordconfirm} id="passwordconfirm"></input>
            <input type="submit" value="사진 업로드" />
            <input type="submit" value="작성완료" />
        </div>
    );
}

export default SignUp;
