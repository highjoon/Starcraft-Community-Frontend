import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const { text, className, _onClick, children, margin, width, border, padding } = props;

    const styles = {
        border,
        margin: margin,
        width: width,
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
    is_float: false,
    margin: false,
    width: "100%",
    border: false,
    padding: "12px 0px",
};

const DefaultButton = styled.button`
    width: ${(props) => props.width};
    background-color: #212121;
    color: #ffffff;
    padding: ${(props) => props.padding};
    border: 1px solid black;
    box-sizing: border-box;
    border: none;
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Button;
