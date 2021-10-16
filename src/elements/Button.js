import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const { text, className, _onClick, children, margin, width, height, border, padding } = props;

    const styles = {
        border,
        margin: margin,
        width: width,
        height: height,
        padding: padding,
    };

    return (
        <React.Fragment>
            <DefaultButton {...styles} className={className} onClick={_onClick}>
                {text ? text : children}
            </DefaultButton>
        </React.Fragment>
    );
};

Button.defaultProps = {
    text: false,
    children: null,
    _onClick: () => {},
    margin: false,
    width: "150px",
    border: false,
    padding: "12px 0px",
    absolute: false,
};

const DefaultButton = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    line-height: calc(${(props) => props.height} / 3);
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    padding: ${(props) => props.padding};
    background-color: #37a2ff;
    color: #ffffff;
    border: 1px solid #37a2ff;
    border-radius: 7px;
    box-sizing: border-box;
    font-family: "NanumSquareB";
    font-size: 20px;
    font-weight: bold;
    transition: all 200ms ease-in-out;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

    ${({ theme }) => theme.device.desktop} {
        font-size: 15px;

        &.signIn_btn,
        &.signUp_btn,
        &.signOut_btn,
        &.AddBtn {
            width: 100px;
            height: 35px;
            line-height: 50%;
        }

        &.signIn_btn {
            margin-right: 10px;
        }

        &.submitBtn {
            height: 50px;
            line-height: 50%;
            margin-top: 50px;
        }
    }

    ${({ theme }) => theme.device.tablet} {
        font-size: 13px;

        &.signIn_btn,
        &.signUp_btn,
        &.signOut_btn,
        &.AddBtn {
            width: 90px;
            height: 30px;
            line-height: 50%;
        }

        &.submitBtn {
            height: 20px;
            line-height: 50%;
            padding: 15px;
            margin-top: 40px;
        }
    }

    ${({ theme }) => theme.device.mobile} {
        font-size: 10px;

        &.signIn_btn,
        &.signUp_btn,
        &.signOut_btn,
        &.AddBtn {
            width: 60px;
        }

        &.submitBtn {
            margin-top: 30px;
        }
    }

    &.AddBtn {
        position: fixed;
        right: 5%;
        bottom: 10%;
    }

    &:hover {
        border: 1px solid #ffffff;
        background-color: #ffffff;
        color: #37a2ff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    }
`;

export default Button;
