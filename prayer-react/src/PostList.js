import React from "react";
import Post from "./Post";

const PostList = function (props) {
    console.log('posts', props.posts);
    const renderPosts = props.posts.map((post) => {
        return (
            <Post post={post} key={post.postID} />
        );
    });

    return (
        <>
            {renderPosts}
        </>
    );
};

export default PostList;