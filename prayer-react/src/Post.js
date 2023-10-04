import React, { useState } from "react";

const Post = function(params) {
    const [likes, setLikes] = useState(params.post.likes);
    return(
        <div className="card m-3">
            <div className="card-body">
                <h5 className="card-title"> user {params.post.userID} </h5>
                <p className="card-text"> {params.post.content} </p>
                <div className="float-end">
                    <button href="#" className="btn btn-outline-primary mx-1">🙏 {likes} </button>
                    <button className="btn btn-outline-danger mx-1">delete</button>
                </div>
            </div>
        </div>
    );
};

export default Post;