import React from "react";
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