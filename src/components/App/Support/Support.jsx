import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Support () {
    const [newSupport, setNewSupport] = useState(0);

    const dispatch = useDispatch();

    const history = useHistory();

    const handleSupportSubmit = () => {
        event.preventDefault();
        console.log('need additional pylons');
        dispatch({
            type: 'SET_SUPPORT',
            payload: newSupport
        });
        history.push('/comment');
        setNewSupport(0);
    }

    return (
        <>
        <form onSubmit={handleSupportSubmit}>
            <p>How well are you being supported?</p>
            <input 
                type="number"
                min="1"
                max="5"
                value={newSupport}
                onChange={(evt) => setNewSupport(evt.target.value)}
            />
            <button type="submit">Next</button>
        </form>
        </>
    )
}

export default Support;