import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Box, Avatar } from '@material-ui/core';
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
    large: {
        width: 75,
        height: 75,
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
                    <Avatar src={photo[id]} className={classes.large} />
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