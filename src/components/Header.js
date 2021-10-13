import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button } from "../elements";
import starcraftImg from "../img/starcraft.png";

const Header = (props) => {
    const history = useHistory();
    console.log(props);
    return (
        <React.Fragment>
            <Navbar>
                <Logo src={starcraftImg} onClick={() => history.push("/")} />
                <BtnContainer>
                    <Button text="로그인" className="signIn_btn" _onClick={() => history.push("/login")} />
                    <Button text="회원가입" className="signUp_btn" _onClick={() => history.push("/signup")} />
                </BtnContainer>
            </Navbar>
        </React.Fragment>
    );
};

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
    width: 150px;
    height: 80px;
    line-height: 80px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10%;
    cursor: pointer;
`;

const BtnContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-right: 10%;

    & .signIn_btn {
        margin-right: 20px;
    }
`;

export default Header;
