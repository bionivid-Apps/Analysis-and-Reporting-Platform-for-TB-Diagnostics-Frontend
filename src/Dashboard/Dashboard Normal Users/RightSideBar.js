import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Link } from 'react-router-dom';

function RightSideBar() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        width: '30vw',
                        height: '89vh',
                    },
                }}
            >
                <Paper elevation={3} className='overflow-auto'>
                    <Typography sx={{ fontSize: 23 }} variant='h5' color="text.secondary" gutterBottom className='text-center pt-3'>
                        Analysis Report
                    </Typography>

                    <Accordion className='m-2 overflow-auto' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >

                            <Typography sx={{ color: 'text.secondary' }}>Analysis</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>
                                <Link to="/dashboardUsers/report"  className='text-decoration-none'>Click here to see the analysis report</Link>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </Paper>
            </Box>
        </React.Fragment>
    )
}

export default RightSideBar