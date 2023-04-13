import React from 'react'
import { formData1 } from '../../Analysis Details/PatientDetails';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function ProfileInfo() {
    return (
        <React.Fragment>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        width: '37.5vw',
                        height: '30vh',
                    },
                }}
            >
                <Paper elevation={3} className='overflow-auto'>
                    <Typography sx={{ fontSize: 23 }} variant='h5' color="text.secondary" gutterBottom className='text-center pt-3'>
                        Profile Information
                    </Typography>

                    <div className='p-3 text-secondary'>
                        <div className='row'>
                            <div className='col-4'>
                                <label>Full Name</label>
                            </div>
                            <div className='col-5'>
                                <label>:&nbsp;{formData1.name}</label>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-4'>
                                <label>Phone Number</label>
                            </div>
                            <div className='col-5'>
                                <label>:&nbsp;{formData1.phone}</label>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-4'>
                                <label>Email</label>
                            </div>
                            <div className='col-5'>
                                <label>:&nbsp;{formData1.email}</label>
                            </div>
                        </div>
                    </div>
                </Paper>
            </Box>

        </React.Fragment >
    )
}

export default ProfileInfo