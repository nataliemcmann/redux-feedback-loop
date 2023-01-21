import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Feeling () {
    const [newFeeling, setNewFeeling] = useState(0);

    const dispatch = useDispatch();

    const history = useHistory();

    const handleFeelingSubmit = () => {
        event.preventDefault();
        console.log('in my feelings');
        dispatch({
            type: 'SET_FEELING',
            payload: newFeeling
        })
        //history.push('/understanding');
        setNewFeeling(0);
    }

    return (
        <>
        <form onSubmit={handleFeelingSubmit}>
            <label>How are you feeling today?</label>
            <input
                type="number"
                min="1"
                max="5"
                value={newFeeling}
                onChange={(evt) => setNewFeeling(evt.target.value)}
            />
            <button type="submit">Next</button>
        </form>
        </>
    )
}

export default Feeling;

