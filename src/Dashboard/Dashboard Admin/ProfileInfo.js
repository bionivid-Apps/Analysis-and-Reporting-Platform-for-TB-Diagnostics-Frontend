import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const options = ['John Doe', 'Henry Cavill', 'Edgar Ramirez'];

function ProfileInfo() {

    const [value, setValue] = React.useState('');

    return (
        <React.Fragment>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        width: '37.5vw',
                        height: '30vh',
                        // opacity: '.9'
                    },
                }}
            >
                <Paper elevation={3} className='overflow-auto'>
                    <Typography sx={{ fontSize: 23 }} variant='h5' color="text.secondary" gutterBottom className='text-center p-3'>
                        Patient Details
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
                            renderInput={(params) => <TextField {...params} label="Search here for patient details" />}
                        />
                        <br/>

                        <div>Patient name : {value !== null ? 
                            <Link to='/dashboardAdmin/summary' className='text-decoration-none'>{value}</Link>
                             : ''}</div>
                    </div>
                </Paper>
            </Box>

        </React.Fragment >
    )
}

export default ProfileInfo