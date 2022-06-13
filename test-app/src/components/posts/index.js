import React, {useState, useEffect} from 'react';
import {DivBoxPostSC, DivPostColumnSC} from "../../styles/posts.styles";
import Post from "./Post";
import BoxCreatePost from "./BoxCreatePost";

const arrayPosts = [

]

const MainPost = (props) => {
    const [posts, getPosts] = useState([])

    useEffect(() => {
        getPosts(arrayPosts)
    }, [])

    const addNewPost = (data) => {
        const tempArray = posts
        tempArray.push(data)
        getPosts([...tempArray])

    }


    return (
        <DivBoxPostSC>
            <DivPostColumnSC>
                {
                    posts.map((item, i) => {
                        return (
                            <Post
                                post={item}
                                key={i}
                            ></Post>
                        )
                    })
                }
                <BoxCreatePost
                    addNewPost={addNewPost}
                />
            </DivPostColumnSC>
            <div></div>
        </DivBoxPostSC>
    );
}


export default MainPost;