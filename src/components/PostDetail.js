import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { postId } = useParams();

    // Sample data for demonstration purposes
    const posts = [
        { id: 1, title: "My First Post", content: "This is the content of my first post." },
        { id: 2, title: "My Second Post", content: "This is the content of my second post." },
        // Add more posts as needed
    ];

    // Find the post by ID
    const post = posts.find(p => p.id === parseInt(postId));

    if (!post) {
        return <h2>Post not found</h2>;
    }

    return (
        <div className="post-detail">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
};

export default PostDetail; 