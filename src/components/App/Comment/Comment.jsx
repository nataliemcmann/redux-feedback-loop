import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Comment () {
    const [newComment, setNewComment] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const handleCommentSubmit = () => {
        event.preventDefault();
        console.log('comments optional');
        dispatch({
            type: 'SET_COMMENT',
            payload: newComment
        });
        // history.push('/review');
        setNewComment('');
    }

    return (
        <>
        <form onSubmit={handleCommentSubmit}>
            <p>Any comments you want to leave?</p>
            <input 
                type="text"
                value={newComment}
                onChange={(evt) => setNewComment(evt.target.value)}
            />
            <button type="submit">Next</button>
        </form>
        </>
    )
}

export default Comment;