import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FeedbackItem from './FeedbackItem';
import axios from 'axios';
import { useEffect } from 'react';


function FeedbackTable () {
    const dispatch = useDispatch();

    //GET route
    const getFeedback = () => {
        axios.get('/feedback')
        .then((res) => {
            console.log('GET successful', 
            res.data.rows);
            dispatch({
                type: 'SET_FEEDBACK',
                payload: res.data.rows
            });
        })
        .catch((err) => {
            console.log('Error in GET request', err);
        })
    }

    useEffect(()=>{
        getFeedback();
    }, []);

    const feedbackObj = useSelector(store => store.feedbackObj);

    return (
        <>
        <thead>
            <tr>
                <td>Feeling</td>
                <td>Understanding</td>
                <td>Support</td>
                <td>Comments</td>
            </tr>
        </thead>
        <tbody>
            {feedbackObj.map((feedback) => {
            return <FeedbackItem key={feedback.id} feedback={feedback}/> 
            })}
        </tbody>
        </>
    )
}

export default FeedbackTable;