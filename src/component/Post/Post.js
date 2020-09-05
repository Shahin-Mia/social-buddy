import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';
import { Container } from '@material-ui/core';

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);
    return (
        <Container maxWidth="md">
            <h1 style={{ textAlign: 'center', textDecoration: "underline" }}>ALL POSTS</h1>

            {
                posts.map(post => <PostCard key={post.id} post={post}></PostCard>)
            }
        </Container>
    );
};

export default Post;