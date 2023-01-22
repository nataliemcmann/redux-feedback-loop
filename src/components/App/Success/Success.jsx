import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

function Success () {
    const history = useHistory();

    const sendToFeelings = () => {
        history.push('/');
    }

    return (
        <>
        <h2>Feedback submitted successfully!</h2>
        <Button 
            variant= "contained" 
            onClick={sendToFeelings}
        >
            Retake Survey
        </Button>
        </>
    )
}

export default Success;