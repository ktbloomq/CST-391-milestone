import React, { useEffect, useState } from "react";
import dataSource from "./dataSource";

const EditPost = function (props) {
    const [userID, setUserID] = useState(1);
    const [content, setContent] = useState('');
    const [likes, setLikes] = useState(0);
    const [parent_post, set_parent_post] = useState(null);

    let _post = {
        userID: 1,
        content: '',
        likes: 0,
        parent_post: null
    };

    let isNew = true;

    if(props.post) {
        _post = props.post;
        isNew = false;
    }

    useEffect(() => {
        setUserID(_post.userID);
        setContent(_post.content);
        setLikes(_post.likes);
        set_parent_post(_post.parent_post);
    }, []);

    const savePost = async (post) => {
        let response;
        if(isNew) {
            response = await dataSource.post('/prayers', post);
        } else {
            response = await dataSource.put('/prayers', post);
        }
        console.log(response);
        console.log(response.data);
    };

    const handleFormSubmit = function(event) {
        event.preventDefault();

        console.log('submit');
        const editedPost = {
            postID: _post.postID,
            userID: userID,
            content: content,
            likes: likes,
            parent_post: parent_post
        };
        console.log(editedPost);
        savePost(editedPost);
    }

    const updateContent = function(event) {
        setContent(event.target.value);
    }

    return (
        <form>
            <div className="mb-3">
                <textarea className="form-control" id="content" placeholder="Create a prayer request" value={content} onChange={updateContent} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
        </form>
    );
};

export default EditPost;