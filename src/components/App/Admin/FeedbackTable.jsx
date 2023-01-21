import React from 'react';
import { useSelector } from 'react-redux';

function FeedbackTable () {
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
        </>
    )
}

export default FeedbackTable;