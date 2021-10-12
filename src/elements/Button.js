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
    background-color: #212121;
    color: #ffffff;
    padding: ${(props) => props.padding};
    border: 1px solid black;
    border-radius: 7px;
    box-sizing: border-box;
    border: none;
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}

    &.AddBtn {
        position: fixed;
        right: 10%;
        bottom: 10%;
    }
`;

export default Button;
