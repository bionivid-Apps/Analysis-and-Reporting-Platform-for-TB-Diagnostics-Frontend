import React from 'react'
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function NewAnalysis() {
    const navigate = useNavigate()

    const navigatePatient = () => {
        navigate('/dashboardUsers/patientDetails')
    }

    return (
        <React.Fragment>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        width: '30vw',
                        height: '30vh',
                    },
                }}
            >
                <Paper elevation={3} className='overflow-auto'>
                    <Typography sx={{ fontSize: 23 }} variant='h5' color="text.secondary" gutterBottom className='text-center pt-5'>
                        Analyze samples
                    </Typography>

                    <div className='p-3'>
                        <Button size="small" variant="contained" onClick={navigatePatient}>Click here <br/>to analyse samples</Button>
                    </div>
                </Paper>
            </Box>

        </React.Fragment>
    )
}

export default NewAnalysis
