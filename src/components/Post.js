import React from "react";
<<<<<<< HEAD
import Image from "../elements/Image";
import Text from "../elements/Text"

const Post = (props)=> {

    console.log(props)
    return(
        <React.Fragment>
            <Text> dsada</Text>
            <Image src={props.src}/>
        </React.Fragment>
    )
}

Post.defaultProps = {
    category: "테란",
    title: "테란 꿀팁!",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSOaq8AXmVYKpL3jLAzV80WpZEIGB4Kz8MuCgcwKIweHv-aQZbHHEqKhcdW5YKTE5j88&usqp=CAU",
    insert_dt: "2021-10-11 10:00:00"
}
export default Post;
=======
import styled from "styled-components";

const Post = (props) => {
    const postList = [
        {
            header: "헤더",
            title: "타이틀",
            src: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            header: "헤더",
            title: "타이틀",
            src: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            header: "헤더",
            title: "타이틀",
            src: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            header: "헤더",
            title: "타이틀",
            src: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            header: "헤더",
            title: "타이틀",
            src: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            header: "헤더",
            title: "타이틀",
            src: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            header: "헤더",
            title: "타이틀",
            src: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            header: "헤더",
            title: "타이틀",
            src: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
        {
            header: "헤더",
            title: "타이틀",
            src: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg",
        },
    ];

    return (
        <React.Fragment>
            <PostWrapper>
                {postList.map((post, idx) => {
                    return (
                        <PostContainer key={idx}>
                            <PostHeader>{post.header}</PostHeader>
                            <PostTitle>{post.title}</PostTitle>
                            <PostImg src={post.src} />
                        </PostContainer>
                    );
                })}
            </PostWrapper>
        </React.Fragment>
    );
};

const PostWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
`;

const PostContainer = styled.div`
    width: 300px;
    height: 350px;
    border: 1px solid black;
    border-radius: 7px;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const PostHeader = styled.div`
    width: 100%;
    text-align: center;
    font-size: 25px;
    border-bottom: 1px solid black;
`;

const PostTitle = styled.div`
    width: 100%;
    height: 35px;
    text-align: center;
    font-size: 25px;
    margin: 10px 0 10px 0;
`;

const PostImg = styled.img`
    width: 100%;
    height: 220px;
`;

export default Post;
>>>>>>> 18aa8d55eae321ea5546632856210cbc9bfadb10
