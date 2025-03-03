import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = ({ title, content, postId }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Navigate to the post detail page
        navigate(`/posts/${postId}`);
    };

    return (
        <div className="post" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default Post; 