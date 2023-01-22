import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

//mui import
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';

function Review ({ theme }) {
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comment = useSelector(store => store.comment);

    const history = useHistory();

    //POST route
    const postFeedback = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comment
            }
        }).then((res) => {
            console.log('POST request successful');
            history.push('/success');
        }).catch((err) => {
            console.log('Error in POST request', err);
        })
    }


    const handleFeedbackSubmit = () => {
        event.preventDefault();
        console.log('ready to submit');
        postFeedback();
    }

    const sendToFeelings = () => {
        history.push('/');
    }

    const sendToU = () => {
        history.push('/understanding')
    }

    const sendToSupport = () => {
        history.push('/support');
    }

    const sendToComment = () => {
        history.push('/comment');
    }

    return (
        <>
        <Stack spacing={2}>
            <Card>
                <h3>Feelings: {feeling}</h3>
                <ThemeProvider theme={theme}>
                    <CardActions>
                        <EditIcon onClick={sendToFeelings}/>
                    </CardActions>
                </ThemeProvider>
            </Card>
            <Card>
                <h3>Understanding: {understanding}</h3>
                <ThemeProvider theme={theme}>
                    <CardActions>
                        <EditIcon onClick={sendToU}/>
                    </CardActions>
                </ThemeProvider>
            </Card>
            <Card>
                <h3>Support: {support}</h3>
                <ThemeProvider theme={theme}>
                    <CardActions>
                        <EditIcon onClick={sendToSupport} />
                    </CardActions>
                </ThemeProvider>
            </Card>
            <Card>
                <h3>Comments: {comment}</h3>
                    <ThemeProvider theme={theme}>
                        <CardActions>
                            <EditIcon onClick={sendToComment} />
                        </CardActions>
                    </ThemeProvider>
                </Card>
            <Button 
                variant="contained"
                onClick={handleFeedbackSubmit}
            >
                Submit
            </Button>
        </Stack>
        </>
    )
}
export default Review;