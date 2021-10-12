import React from "react";
import { Button } from "../elements";

const AddBtn = (props) => {
    const { onClick } = props;
    return (
        <React.Fragment>
            <Button text="작성하기" className="AddBtn" _onClick={onClick} />
        </React.Fragment>
    );
};

export default AddBtn;
