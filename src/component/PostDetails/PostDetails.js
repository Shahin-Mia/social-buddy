import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';
import Comments from '../Comment/Comments';

const PostDetails = (props) => {
    const { postId } = useParams();
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    }, []);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);
    const style = {
        textDecoration: "none",
        float: "right",
        color: "white",
        padding: 5,
        backgroundColor: "gray"
    }
    return (
        <>
            <Container maxWidth="md">
                <h1>{postId}.{post.title}</h1>
                <p style={{ fontSize: 24 }}>{post.body}</p>
                <hr />

            </Container>
            <Container maxWidth="sm">
                <Typography variant="button">Comments</Typography>
                <Link to="/" style={style}>All Posts</Link>
                {
                    comments.map(comment => <Comments key={comment.id} comment={comment}></Comments>)
                }
            </Container>

        </>
    );
};

export default PostDetails;