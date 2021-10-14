import React from "react";
import {Text, Button, Image, Input} from "../elements";
import styled from "styled-components";


const CommentWrite = (props)=> {

    return(
        <React.Fragment>
            <Wrapper>
                <Text bold>제목</Text>
                <Input type="text" width="100%" borderRadius="7px" placeholder="제목을 입력해주세요" />
                <Text bold>내용</Text>
                <Input multiLine type="text" borderRadius="7px" placeholder="내용을 입력해주세요"/>
                <Text bold>이미지</Text>
                <Comment>
                <Input type="text" width="100%" borderRadius="7px" placeholder="댓글 내용으르 입력해주세요"/>
                <Button>작성</Button>
                </Comment>
            </Wrapper>    
        </React.Fragment>
    )
}


const Wrapper = styled.div`
    width: 80%; 
    margin: 0 auto;
    text-align: center;
`;

const Comment = styled.div`
    display: flex;
    
`; 

export default CommentWrite;