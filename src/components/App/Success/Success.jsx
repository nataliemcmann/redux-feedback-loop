import React from 'react';
import { useHistory } from 'react-router-dom';

function Success () {
    const history = useHistory();

    const sendToFeelings = () => {
        history.push('/');
    }

    return (
        <>
        <h2>Feedback submitted successfully!</h2>
        <button onClick={sendToFeelings}>Retake Survey</button>
        </>
    )
}

export default Success;