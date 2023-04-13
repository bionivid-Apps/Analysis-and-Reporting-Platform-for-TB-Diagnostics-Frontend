import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const options = ['John Doe', 'Henry Cavill', 'Edgar Ramirez'];

function NewAnalysis() {

    const [value, setValue] = React.useState('');

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
                    <Typography sx={{ fontSize: 23 }} variant='h5' color="text.secondary" gutterBottom className='text-center p-3'>
                        Diagnostic Center User Details
                    </Typography>

                    <div className='ps-5 pe-5'>
                        <Autocomplete
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            id="free-solo-demo"
                            freeSolo
                            options={options.map((option) => option)}
                            renderInput={(params) => <TextField {...params} label="Search here for user details" />}
                        />
                        <br />
                        
                        <div>Diagnostic center user name : {value !== null ? 
                            <Link to='/dashboardAdmin/summary' className='text-decoration-none'>{value}</Link>
                             : ''}</div>
                    </div>
                </Paper>
            </Box>

        </React.Fragment>
    )
}

export default NewAnalysis
