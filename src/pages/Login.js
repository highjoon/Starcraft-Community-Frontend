import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../elements";
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
        <div className="Login">
            <p>아이디</p>
            <input type="text" value={email} onChange={getEmail} />
            <p>비밀번호</p>
            <input type="password" value={password} onChange={getPwd} />
            <br />
            <Button type="submit" text="로그인" _onClick={login} />
        </div>
    );
}

export default Login;
