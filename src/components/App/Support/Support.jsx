import React from 'react';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';

//mui imports
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Input from '@mui/material/Input';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';


function Support ({ theme, progress, setProgress }) {
    const [newSupport, setNewSupport] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {
        setProgress(75);
    })

    const handleSupportSubmit = () => {
        event.preventDefault();
        console.log('need additional pylons');
        dispatch({
            type: 'SET_SUPPORT',
            payload: newSupport
        });
        history.push('/comment');
        setNewSupport('');
    }

    return (
        <>
        <Stack spacing={2}>
            <ProgressBar progress={progress}/>
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
                            sx={{input: {textAlign: "center"}}}
                            value={newSupport}
                            onChange={(evt) => setNewSupport(evt.target.value)}
                            required
                        />
                        <ThemeProvider theme={theme}>
                            <CardActions>
                                <Button 
                                    type="submit"
                                    variant="contained"
                                >
                                    Next
                                </Button>
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