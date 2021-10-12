import React from "react";
import styled from "styled-components";
import { Button } from "../elements";

const Category = (props) => {
    const categoryList = ["전체보기", "저그", "테란", "프로토스"];
    const { setCategorize } = props;

    const getSpecies = (e) => {
        setCategorize(e.target.innerText);
    };

    return (
        <React.Fragment>
            <BtnContainer>
                {categoryList.map((category, idx) => {
                    return <Button key={idx} text={category} width="20%" height="50px" _onClick={getSpecies} />;
                })}
            </BtnContainer>
        </React.Fragment>
    );
};

const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 10px auto;
`;

export default Category;
