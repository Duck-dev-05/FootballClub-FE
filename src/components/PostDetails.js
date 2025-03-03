import React from 'react';
import { useParams } from 'react-router-dom';
import { newsItems } from '../newsData'; // Import the news data

const PostDetails = () => {
    const { postId } = useParams();
    const post = newsItems.find(p => p.id === parseInt(postId));

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="post-details">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default PostDetails; 