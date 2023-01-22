import React from 'react';

//mui components
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

function ProgressBar({ progress }) {

  return (
    <Box sx={{ width: '100%',
               height: '2%' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}

export default ProgressBar;