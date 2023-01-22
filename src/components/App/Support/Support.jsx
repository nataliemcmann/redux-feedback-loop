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

function Support ({ theme }) {
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
        <Stack spacing={2}>
            <Card>
                <CardHeader
                    title="How well are you being supported?"
                    subheader="How easy was it to get help when you asked (5 being easy, 1 being hard)?"
                />
                <CardContent>
                    <form onSubmit={handleSupportSubmit}>
                        <Input 
                            type="number"
                            min="1"
                            max="5"
                            value={newSupport}
                            onChange={(evt) => setNewSupport(evt.target.value)}
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

export default Support;