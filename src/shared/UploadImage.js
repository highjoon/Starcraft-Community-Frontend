import React from "react";
import styled from "styled-components";

const UploadImage = (props) => {
    const { getImage } = props;

    const fileInput = React.useRef();

    const selectFile = (e) => {
        const reader = new FileReader();
        const file = fileInput.current.files[0];
        const imgBox = document.querySelector(".img__box");
        try {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                imgBox.style.backgroundImage = `url(${reader.result})`;
                getImage(file);
            };
        } catch {
            window.alert("다시 시도해주세요");
            return;
        }
    };

    return (
        <React.Fragment>
            <Preview className="img__box" />
            <Input name="file" type="file" id="file" onChange={selectFile} ref={fileInput} accept="image/*" />
            <label htmlFor="file">이미지 등록하기</label>
        </React.Fragment>
    );
};

const Preview = styled.div`
    width: 100%;
    height: 400px;
    background-color: #e3ddd5;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 7px;
`;

const Input = styled.input`
    width: 100%;
    height: 50px;
    text-align: center;

    & {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }

    & + label {
        display: block;
        width: 80%;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        background-color: #37a2ff;
        border-radius: 7px;
        margin: 10px auto 0 auto;
        cursor: pointer;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        transition: all 200ms ease-in-out;
    }

    & + label:hover {
        color: #37a2ff;
        background-color: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        transition: all 200ms ease-in-out;
    }
`;

export default UploadImage;
