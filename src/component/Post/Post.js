import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';
import { Container, TextareaAutosize, Button } from '@material-ui/core';

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);
    return (
        <Container maxWidth="md">
            <div style={{ marginTop: 65 }}>
                <TextareaAutosize aria-label="minimum height" rowsMin={8} cols={100} placeholder="What's on your mind?" />
                <br />
                <Button variant="contained">Create Post</Button>
            </div>

            {
                posts.map(post => <PostCard key={post.id} post={post}></PostCard>)
            }
        </Container>
    );
};

export default Post;