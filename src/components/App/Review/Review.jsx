import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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

    return (
        <>
        <h3>Feelings: {feeling}</h3>
        <h3>Understanding: {understanding}</h3>
        <h3>Support: {support}</h3>
        <h3>Comments: {comment}</h3>
        <button onClick={handleFeedbackSubmit}>Submit</button>
        </>
    )

}
export default Review;