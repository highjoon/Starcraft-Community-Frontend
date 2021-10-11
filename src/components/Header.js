import React from "react";
import styled from "styled-components";
import { Button } from "../elements";

const Header = (props) => {
    return (
        <React.Fragment>
            <Navbar>
                <Logo>logo</Logo>
                <BtnContainer>
                    <Button text="로그인" className="signIn_btn" />
                    <Button text="회원가입" className="signUp_btn" />
                </BtnContainer>
            </Navbar>
        </React.Fragment>
    );
};

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2eeea;
    border-bottom: 1px solid black;
`;

const Logo = styled.div`
    width: 80px;
    height: 80px;
    line-height: 80px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: white;
    border: 1px solid black;
    text-align: center;
    margin-left: 10%;
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
