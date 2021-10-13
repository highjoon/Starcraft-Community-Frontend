import React, { useState } from "react";

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
        <div className="Login">
            <p>로그인</p>
            <label type="text" for="input-id">
                아이디
            </label>
            <input name="id" type="id" placeholder="Id" required value={id} id="input-id" onChange={onChange}></input>
            <label type="text" for="input-password">
                비밀번호
            </label>
            <input name="password" type="password" placeholder="Password" required value={password} id="input-password" onChange={onChange}></input>
            <input type="submit" value="로그인" />
        </div>
    );
}

export default Login;
