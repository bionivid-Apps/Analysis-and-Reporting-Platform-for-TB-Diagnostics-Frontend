import React from 'react'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function BottomSection() {
    return (
        <React.Fragment>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        width: '60vw',
                        height: '57.5vh',
                    },
                }}
            >
                <Paper elevation={3} className='overflow-auto text-center pt-1'>
                    <Typography sx={{ fontSize: 23 }} variant='h5' color="text.secondary" gutterBottom className='pt-3'>
                        Analysis Process Flow chart
                    </Typography>

                    <img src="https://i.ytimg.com/vi/WHH8Gx0u9Is/maxresdefault.jpg" width="600" className="img-fluid" alt="..." />
                </Paper>
            </Box>

        </React.Fragment>
    )
}

export default BottomSection