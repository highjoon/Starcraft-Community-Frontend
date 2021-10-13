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
    background-color: #4a5666;
    color: #ffffff;
    border: 1px solid #4a5666;
    border-radius: 7px;
    box-sizing: border-box;
    font-family: "NanumSquareB";
    font-size: 20px;
    font-weight: bold;
    transition: all 200ms ease-in-out;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.3);

    &.AddBtn {
        position: fixed;
        right: 5%;
        bottom: 10%;
    }

    &:hover {
        font-size: 20px;
        font-weight: bold;
        border: 1px solid #ffffff;
        background-color: #ffffff;
        color: #4a5666;
        box-shadow: 0 6px 6px rgba(0, 0, 0, 0.3);
    }
`;

export default Button;
