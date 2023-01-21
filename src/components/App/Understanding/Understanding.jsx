import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Understanding () {
    const [newUnderstanding, setNewUnderstanding] = useState(0);

    const dispatch = useDispatch();

    const history = useHistory();

    const handleUnderstandingSubmit = () => {
        event.preventDefault();
        console.log('what is understanding');
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: newUnderstanding
        });
        history.push('/support');
        setNewUnderstanding(0);
    }

    return (
        <>
        <form onSubmit={handleUnderstandingSubmit}>
            <p>How well are you understanding the content?</p>
            <input 
                type="number"
                min="1"
                max="5"
                value={newUnderstanding}
                onChange={(evt) => setNewUnderstanding(evt.target.value)}
            />
            <button type="submit">Next</button>
        </form>
        </>
    )
}

export default Understanding;