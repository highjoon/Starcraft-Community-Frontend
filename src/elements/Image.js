import React from "react";
import styled from "styled-components";

const Image = (props) => {
    const { shape, src, width, height } = props;

    const styles = {
        shape: shape,
        width: width,
        height: height,
        src: src,
    };
    return (
        <AspectOutter>
            <AspectInner {...styles}></AspectInner>
        </AspectOutter>
    );
};

Image.defaultProps = {
    shape: "",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSOaq8AXmVYKpL3jLAzV80WpZEIGB4Kz8MuCgcwKIweHv-aQZbHHEqKhcdW5YKTE5j88&usqp=CAU",
    width: "",
    height: "",
};

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspectInner = styled.div`
    postion: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

export default Image;
