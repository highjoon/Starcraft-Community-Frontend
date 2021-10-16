import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const { bold, color, size, children, margin, center, className } = props;

    const styles = { bold: bold, color: color, size: size, margin, center };

    return (
        <P {...styles} className={className}>
            {children}
        </P>
    );
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

    ${({ theme }) => theme.device.desktop} {
        &.password {
            margin: 20px auto 20px auto;
        }
    }

    ${({ theme }) => theme.device.tablet} {
        &.password {
            margin: 15px auto 15px auto;
        }
    }

    ${({ theme }) => theme.device.mobile} {
        &.password {
            margin: 10px auto 10px auto;
        }
    }
`;

export default Text;
