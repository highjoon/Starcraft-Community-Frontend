import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const { bold, color, size, children, margin, center } = props;

    const styles = { bold: bold, color: color, size: size, margin, center };

    return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
    children: null,
    bold: false,
    color: "#161a1f",
    size: "20px",
    margin: false,
    center: null,
};

const P = styled.p`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold ? "600" : "400")};
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
    ${(props) => (props.center ? `text-align: center;` : "")};
`;

export default Text;
