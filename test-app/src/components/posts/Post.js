import React from 'react';
import {DivBoxPostItemSC} from "../../styles/posts.styles";
import { DateTime } from "luxon";

const Post = (props) => {
    const {
        post
    } = props

    return (
        <DivBoxPostItemSC>
            {post.name ? <h4>
                {
                    post.name
                }
            </h4> : null}
            {
                post.namePost ? <h5>{post.namePost}</h5> : null
            }
            <p>
                {post.text}
            </p>
            {
                post.date ? <span>{DateTime.fromISO(post.date).setLocale('ru').toFormat('dd MMMM yyyy')}</span> : null
            }
        </DivBoxPostItemSC>
    );
}

export default Post;