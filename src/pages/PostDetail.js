
import React, { useState } from "react";
import Post from "../components/Post";
import CommentWrite from "../components/CommentWrite";
import CommentList from "../components/CommentList";


const PostDetail= (props)=> {
    const { history } = props;
    // const [categorize,] = useState("전체보기");
    // const dispatch = useDispatch();
    // const detail = useSelector((state) => state.detail.info);
    // const comment_list = useSelector((state) => state.detail.info.comments);

    return(
        <React.Fragment> 
             <Post/>
            {/* <CommentWrite/>
            <CommentList/> */}
        </React.Fragment>
    )
}

export default PostDetail;