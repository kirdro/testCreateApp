import React from 'react';
import {DivBoxPostItemSC} from "../../styles/posts.styles";

const Post = (props) => {
    const {
        post
    } = props

    return (
        <DivBoxPostItemSC>
            <p>
                {post}
            </p>
        </DivBoxPostItemSC>
    );
}

export default Post;