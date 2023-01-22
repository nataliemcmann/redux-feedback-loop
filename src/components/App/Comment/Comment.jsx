import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

//mui imports
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';

function Comment ({ theme }) {
    const [newComment, setNewComment] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const handleCommentSubmit = () => {
        event.preventDefault();
        console.log('comments optional');
        dispatch({
            type: 'SET_COMMENT',
            payload: newComment
        });
        history.push('/review');
        setNewComment('');
    }

    return (
        <>
        <Stack spacing={2}>
            <Card>
                <CardHeader 
                    title="Any comments you want to leave?"
                    subheader="Elaborate on your numeric feedback or give a shout out. It's totally up to you!"
                />
                <CardContent>
                    <form onSubmit={handleCommentSubmit}>
                        <TextField 
                            id="filled-multiline-flexible"
                            multiline
                            value={newComment}
                            onChange={(evt) => setNewComment(evt.target.value)}
                        />
                        <ThemeProvider theme={theme}>
                            <CardActions>
                                <button type="submit">Next</button>
                            </CardActions>
                        </ThemeProvider>
                    </form>
                </CardContent>
            </Card>
        </Stack>
        </>
    )
}

export default Comment;