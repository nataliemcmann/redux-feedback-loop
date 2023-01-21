import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//import component
import FeedbackTable from './FeedbackTable';

function Admin () {
    const dispatch = useDispatch();

    //GET route
    const getFeedback = () => {
        axios.get('/feedback')
        .then((res) => {
            console.log('GET successful');
            dispatch({
                type: 'SET_FEEDBACK',
                data: res.data
            });
        })
        .catch((err) => {
            console.log('Error in GET request', err);
        })
    }

    useEffect(()=>{
        getFeedback();
    })

    return (
        <>
            <FeedbackTable />
        </>
    )
}

export default Admin;