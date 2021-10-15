import React from "react";
import styled from "styled-components";

const Input = (props) => {
    const { width, borderRadius, label, placeholder, _onChange, type, multiLine, is_submit, onSubmit, is_file, _ref, _value } = props;

    if (is_file) {
        return <FileUpload type="file"></FileUpload>;
    }

    if (multiLine) {
        return <ElTextarea rows={10} borderRadius={borderRadius} placeholder={placeholder} onChange={_onChange} ref={_ref} value={_value} />;
    }

    return (
        <React.Fragment>
            {is_submit ? (
                <ElInput
                    type={type}
                    width={width}
                    borderRadius={borderRadius}
                    placeholder={placeholder}
                    onChange={_onChange}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            onSubmit(e);
                        }
                    }}
                    ref={_ref}
                />
            ) : (
                <ElInput type={type} width={width} borderRadius={borderRadius} placeholder={placeholder} onChange={_onChange} ref={_ref} value={_value} />
            )}
        </React.Fragment>
    );
};

Input.defaultProps = {
    multiLine: false,
    label: false,
    placeholder: "텍스트를 입력해주세요.",
    type: "text",
    value: "",
    is_submit: false,
    onSubmit: () => {},
    _onChange: () => {},
    width: "40%",
    borderRadius: null,
};

const ElTextarea = styled.textarea`
    border: 1px solid #212121;
    width: 100%;
    padding: 12px 4px;
    box-sizing: border-box;
    resize: none;
    ${(props) => (props.borderRadius ? `border-radius: ${props.borderRadius};` : "")}

    &::placeholder {
        text-align: center;
        line-height: 150px;
    }
`;

const ElInput = styled.input`
    border: 1px solid #212121;
    width: 40%;
    padding: 12px 4px;
    box-sizing: border-box;
    ${(props) => (props.width ? `width: ${props.width};` : "")}
    ${(props) => (props.borderRadius ? `border-radius: ${props.borderRadius};` : "")}

    &::placeholder {
        text-align: center;
    }
`;

const FileUpload = styled.input`
    display: inline-block;
    height: 40px;
    padding: 0 10px;
    vertical-align: middle;
    border: 1px solid #dddddd;
    width: 78%;
    color: #999999;
`;

export default Input;
