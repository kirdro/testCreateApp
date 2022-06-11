import React, {useState, useEffect} from 'react';
import {DivBoxPostSC, DivPostColumnSC} from "../../styles/posts.styles";
import Post from "./Post";

const arrayPosts = [
    '3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis distinctio dolorum iusto libero omnis reiciendis rerum. Aspernatur blanditiis ducimus ipsam quidem quis rerum similique ullam. Dolorum minus natus voluptate.',
    '1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis distinctio dolorum iusto libero omnis reiciendis rerum. Aspernatur blanditiis ducimus ipsam quidem quis rerum similique ullam. Dolorum minus natus voluptate.',
    '2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis distinctio dolorum iusto libero omnis reiciendis rerum. Aspernatur blanditiis ducimus ipsam quidem quis rerum similique ullam. Dolorum minus natus voluptate.',
    '4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis distinctio dolorum iusto libero omnis reiciendis rerum. Aspernatur blanditiis ducimus ipsam quidem quis rerum similique ullam. Dolorum minus natus voluptate.',
    '5Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis distinctio dolorum iusto libero omnis reiciendis rerum. Aspernatur blanditiis ducimus ipsam quidem quis rerum similique ullam. Dolorum minus natus voluptate.',
    '6Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis distinctio dolorum iusto libero omnis reiciendis rerum. Aspernatur blanditiis ducimus ipsam quidem quis rerum similique ullam. Dolorum minus natus voluptate.',
    '7Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis distinctio dolorum iusto libero omnis reiciendis rerum. Aspernatur blanditiis ducimus ipsam quidem quis rerum similique ullam. Dolorum minus natus voluptate.',
    '8Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis distinctio dolorum iusto libero omnis reiciendis rerum. Aspernatur blanditiis ducimus ipsam quidem quis rerum similique ullam. Dolorum minus natus voluptate.',
    '9Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis distinctio dolorum iusto libero omnis reiciendis rerum. Aspernatur blanditiis ducimus ipsam quidem quis rerum similique ullam. Dolorum minus natus voluptate.',
    '10Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis distinctio dolorum iusto libero omnis reiciendis rerum. Aspernatur blanditiis ducimus ipsam quidem quis rerum similique ullam. Dolorum minus natus voluptate.',
    '11Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis distinctio dolorum iusto libero omnis reiciendis rerum. Aspernatur blanditiis ducimus ipsam quidem quis rerum similique ullam. Dolorum minus natus voluptate.',
    '12Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis distinctio dolorum iusto libero omnis reiciendis rerum. Aspernatur blanditiis ducimus ipsam quidem quis rerum similique ullam. Dolorum minus natus voluptate.',
    '13Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis distinctio dolorum iusto libero omnis reiciendis rerum. Aspernatur blanditiis ducimus ipsam quidem quis rerum similique ullam. Dolorum minus natus voluptate.',
    '14Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis distinctio dolorum iusto libero omnis reiciendis rerum. Aspernatur blanditiis ducimus ipsam quidem quis rerum similique ullam. Dolorum minus natus voluptate.',
    '15Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis distinctio dolorum iusto libero omnis reiciendis rerum. Aspernatur blanditiis ducimus ipsam quidem quis rerum similique ullam. Dolorum minus natus voluptate.',
    '16Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis distinctio dolorum iusto libero omnis reiciendis rerum. Aspernatur blanditiis ducimus ipsam quidem quis rerum similique ullam. Dolorum minus natus voluptate.',
    '17Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis distinctio dolorum iusto libero omnis reiciendis rerum. Aspernatur blanditiis ducimus ipsam quidem quis rerum similique ullam. Dolorum minus natus voluptate.',

]

const MainPost = (props) => {
    const [posts, getPosts] = useState([])

    useEffect(() => {
        getPosts(arrayPosts)
    }, [])


    return (
        <DivBoxPostSC>
            <DivPostColumnSC>
                {
                    posts.map((item, i) => {
                        return (
                            <Post
                                post={item}
                            ></Post>
                        )
                    })
                }
            </DivPostColumnSC>
            <div></div>
        </DivBoxPostSC>
    );
}

export default MainPost;