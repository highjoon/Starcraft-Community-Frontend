import React from "react";
import { Button } from "../elements";

const Upload = (props) => {
    const { getImage, _onClick } = props;

    const fileInput = React.useRef();

    const selectFile = (e) => {
        const reader = new FileReader();
        const file = fileInput.current.files[0];
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            getImage(reader.result);
        };
    };

    return (
        <React.Fragment>
            <input type="file" onChange={selectFile} ref={fileInput} />
            <Button height="40px" _onClick={_onClick}>
                작성하기
            </Button>
        </React.Fragment>
    );
};

export default Upload;
