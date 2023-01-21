import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Review () {
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comment = useSelector(store => store.comment);

    const dispatch = useDispatch();
    // const history = useHistory();

    const handleFeedbackSubmit = () => {
        event.preventDefault();
        console.log('ready to submit');
        dispatch({
            type: 'SET_FEEDBACK',
            payload: {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comment
            }
        });
        //history.push('/success');
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