import React, { useState } from "react";
import dataSource from "./dataSource";

const Post = function(params) {
    const [likes, setLikes] = useState(params.post.likes);

    const handleLike = function() {
        console.log('liking post', params.post.postID)
        dataSource.put('/pray/' + params.post.postID);
        setLikes(likes+1);
    };

    const handleDelete = function() {
        console.log('deleting post', params.post.postID)
        dataSource.delete('/prayers/' + params.post.postID);
        params.onDelete();
    }

    return(
        <div className="card m-3">
            <div className="card-body">
                <h5 className="card-title"> user {params.post.userID} </h5>
                <p className="card-text"> {params.post.content} </p>
                <div className="float-end">
                    <button href="#" className="btn btn-outline-primary mx-1" onClick={handleLike}>🙏 {likes} </button>
                    <button className="btn btn-outline-danger mx-1" onClick={handleDelete}>delete</button>
                </div>
            </div>
        </div>
    );
};

export default Post;