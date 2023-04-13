import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RightSideBar() {

    const [expanded, setExpanded] = React.useState(false);
    const [data, setData] = React.useState(null);
    const navigate = useNavigate();

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const navigateReport = () => {
        axios.get('/report')
            .then((response) => {
                setData(response.data);
                console.log(data);
                navigate("/dashboardDiagnostic/report");
            })
            .catch(error => console.log(error));
    }

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
                        New Analysis or all Analysis
                    </Typography>

                    <Accordion className='m-2 overflow-auto' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >

                            <Typography sx={{ color: 'text.secondary' }}>New Analysis</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>
                                {/* <Link to="/dashboardDiagnostic/report"  className='text-decoration-none'>Analysis report</Link> */}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='m-2 overflow-auto' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >

                            <Typography sx={{ color: 'text.secondary' }}>All Analysis</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>
                                <Button variant="text" onClick={navigateReport}>Analysis report</Button>
                                {/* <Link to="/dashboardDiagnostic/report"  className='text-decoration-none'>Analysis report</Link> */}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </Paper>
            </Box>
        </React.Fragment>
    )
}

export default RightSideBar