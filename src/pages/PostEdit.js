import React, { useState, useRef, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Species } from "../components";
import { Input, Text, Button } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";

const PostEdit = (props) => {
    const { history } = props;
    const dispatch = useDispatch();
    const title = useRef();
    const content = useRef();
    const postList = useSelector((state) => state.post.postList);
    const [species, setSpecies] = useState("");
    const getSpecies = (species) => setSpecies(species);

    const storedId = props.match.params.id;

    useEffect(() => {
        dispatch(postActions.getPostDB());
    }, []);

    const createNewContens = () => {
        const newTitle = title.current.value;
        const newContent = content.current.value;

        if (!species && species !== 0) {
            window.alert("종족을 선택해주세요!");
            return;
        }

        const formData = new FormData();
        formData.append("title", newTitle);
        formData.append("content", newContent);
        formData.append("categori", species);

        for (let [key, val] of formData) {
            console.log(key, val);
        }

        dispatch(postActions.editPostDB(storedId, formData));
    };

    return (
        <React.Fragment>
            {postList.map((post, idx) => {
                if (String(post.id) === String(storedId)) {
                    return (
                        <Wrapper key={idx}>
                            <Species species={species} getSpecies={getSpecies} origin={post.categori} />
                            <Text bold>제목</Text>
                            <Input type="text" width="100%" borderRadius="7px" placeholder={post.title} _ref={title} />
                            <Text bold>내용</Text>
                            <Input multiLine type="text" borderRadius="7px" placeholder={post.content} _ref={content} />
                            <Button margin="30px" height="40px" _onClick={createNewContens}>
                                수정하기
                            </Button>
                        </Wrapper>
                    );
                }
            })}
        </React.Fragment>
    );
};

const Wrapper = styled.div`
    width: 600px;
    margin: 0 auto;
    text-align: center;
`;

export default PostEdit;
