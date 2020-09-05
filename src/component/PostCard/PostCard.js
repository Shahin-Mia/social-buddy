import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        boxShadow: "1px 1px 6px grey",
        marginTop: 25,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const PostCard = (props) => {
    const classes = useStyles();
    const { id, title, body } = props.post;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                    </Typography>
                <Typography variant="body2" component="p">
                    {body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button href={'/post/' + id} size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
export default PostCard;