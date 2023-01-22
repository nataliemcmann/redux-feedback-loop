import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

//mui imports
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Input from '@mui/material/Input';
import { ThemeProvider } from '@mui/material/styles';

function Understanding ({ theme }) {
    const [newUnderstanding, setNewUnderstanding] = useState('');

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
        setNewUnderstanding('');
    }

    return (
        <>
        <Stack spacing={2}>
            <Card>
                <CardHeader 
                title="How well did you understanding today's content?"
                subheader="On a scale of 1 to 5, could you teach it back (5) or are you feeling lost (1)?"
                />
                <CardContent>
                    <form onSubmit={handleUnderstandingSubmit}>
                        <Input 
                            type="number"
                            min="1"
                            max="5"
                            value={newUnderstanding}
                            onChange={(evt) => setNewUnderstanding(evt.target.value)}
                            required
                        />
                        <ThemeProvider theme={theme}>
                            <CardActions>
                                <button type="submit">Next</button>
                            </CardActions>
                        </ThemeProvider>
                    </form>
                </CardContent>
            </Card>
        </Stack>
        </>
    )
}

export default Understanding;