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
import Button from '@mui/material/Button';

function Feeling ({ theme }) {
    const [newFeeling, setNewFeeling] = useState('');

    const dispatch = useDispatch();

    const history = useHistory();

    const handleFeelingSubmit = () => {
        event.preventDefault();
        console.log('in my feelings');
        dispatch({
            type: 'SET_FEELING',
            payload: newFeeling
        });
        history.push('/understanding');
        setNewFeeling('');
    }

    return (
        <>
        <Stack spacing={2}>
            <Card>
                <CardHeader
                    title= "How are you feeling today?"
                    subheader="On a scale of 1 to 5, were you in a good mood (5) or were you feeling down (1)?"
                    />
                <CardContent>
                    <form onSubmit={handleFeelingSubmit}>
                        <Input
                            type="number"
                            min="1"
                            max="5"
                            sx={{input: {textAlign: "center"}}}
                            value={newFeeling}
                            onChange={(evt) => setNewFeeling(evt.target.value)}
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

export default Feeling;

