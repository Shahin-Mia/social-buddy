import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardActions, CardContent, Button, Typography, Box } from '@material-ui/core';
import { PhotoContext } from '../../App';
import './Comments.css';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        borderRadius: "none",
        boxShadow: "none"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Comments = (props) => {
    console.log(props.comment);
    const { id, name, email, body } = props.comment;
    const classes = useStyles();

    const photo = useContext(PhotoContext);

    return (
        <Card className={classes.root}>
            <CardContent>
                <Box display="flex" p={1}>
                    <img src={photo[id]} alt="" />
                    <div>
                        <Typography variant="subtitle1">{name}</Typography>
                        <Typography className={classes.pos} color="textSecondary">{email}</Typography>
                    </div>
                </Box>
                <Typography variant="body2" component="p">
                    {body}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Comments;