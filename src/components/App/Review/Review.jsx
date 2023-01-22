import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

function Review () {
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
        }).catch((err) => {
            console.log('Error in POST request', err);
        })
    }

    const handleFeedbackSubmit = () => {
        event.preventDefault();
        console.log('ready to submit');
        history.push('/success');
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
        <h3>
            Feelings: {feeling}
            <EditIcon onClick={sendToFeelings}/>
        </h3>
        <h3>
            Understanding: {understanding}
            <EditIcon onClick={sendToU} />
        </h3>
        <h3>
            Support: {support}
            <EditIcon onClick={sendToSupport} />
        </h3>
        <h3>
            Comments: {comment}
            <EditIcon onClick={sendToComment} />
        </h3>
        <button onClick={handleFeedbackSubmit}>Submit</button>
        </>
    )

}
export default Review;