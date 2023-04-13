import React from 'react';

import { BsFillSkipStartFill } from "react-icons/bs";
import { BsFillSkipEndFill } from "react-icons/bs";

import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { message } from '../Form Details/Login';
import { formData1 } from '../Analysis Details/PatientDetails';
import { formData2 } from '../Analysis Details/SampleDetails';

function Summary() {

    const navigate = useNavigate()

    const navigateSampleDetails = () => {
        if(message === "normal_users") {
            navigate('/dashboardUsers/sampleDetails');
        }

        if(message === "diagnostic_users") {
            navigate('/dashboardDiagnostic/sampleDetails');
        }
        
        if(message === "admin_users") {
            navigate('/dashboardAdmin/sampleDetails');
        }
    }

    const navigateDashboard = () => {
        if(message === "normal_users") {
            navigate('/dashboardUsers');
        }

        if(message === "diagnostic_users") {
            navigate('/dashboardDiagnostic');
        }
        
        if(message === "admin_users") {
            navigate('/dashboardAdmin');
        }
    }

    return (
        <React.Fragment>

            <div className='container-fluid mt-5 pt-5'>

                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        width: '90vw',
                        height: '135vh',
                        overflow: 'auto'
                    },
                }}>
                    <Paper elevation={3}>
                        {/* Introduction */}


                        <div className='row ms-5 me-5 text-secondary'>
                            {/* <div className="col mt-5 ms-5 mb-5 position-relative insideBgImg3">
                            <div className="position-absolute top-50 start-50 translate-middle">
                                <h1 className='text-white text-center fs-1 fw-bold'>Analytical & Reporting Platform for M. Tuberculosis</h1>
                            </div>
                        </div> */}

                            <div className="col">

                                {/* Heading */}

                                <div className='row'>
                                    <div className='col'>
                                        {/* <h3 className='text-center mt-3 mb-3 fw-bold text-success'>Analysis Summary</h3> */}
                                        <Typography sx={{ fontSize: 23 }} variant='h5' color="text.secondary" gutterBottom className='text-center pt-5'>
                                            Analysis Summary
                                        </Typography>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col'>
                                        {/* <h5 className='text-center mt-4 mb-4'>Patient Details</h5> */}
                                        <Typography sx={{ fontSize: 20 }} variant='h5' color="text.secondary" gutterBottom className='pt-5 pb-3'>
                                            Patient Details
                                        </Typography>
                                    </div>
                                </div>

                                {/* Patient Fullname */}

                                <div className='row'>

                                    <div className='col'>
                                        <label htmlFor="patientFullname" className="form-label">Patient Full Name</label>
                                    </div>

                                    <div className='col'>
                                        <label>:&nbsp;{formData1.name}</label>
                                    </div>
                                </div>


                                {/* Patient Address */}

                                <div className='row'>


                                    <div className='col'>
                                        <label htmlFor="patientAddress" className="form-label">Patient Address</label>
                                    </div>

                                    <div className='col'>
                                        <label>:&nbsp;{formData1.address}</label>
                                    </div>

                                </div>

                                <div className='row'>

                                    {/* Client id */}

                                    <div className='col'>
                                        <label htmlFor="clientId" className="form-label">Client ID</label>
                                    </div>

                                    <div className='col'>
                                        <label>:&nbsp;{formData2.clientId}</label>
                                    </div>

                                </div>

                                <div className='row'>

                                    {/* Test id */}

                                    <div className='col'>
                                        <label htmlFor="testId" className="form-label">Test ID</label>
                                    </div>

                                    <div className='col'>
                                        <label>:&nbsp;{formData2.testId}</label>
                                    </div>

                                </div>

                                <div className='row'>

                                    {/* City */}

                                    <div className='col'>
                                        <label htmlFor="city" className="form-label">City</label>
                                    </div>

                                    <div className='col'>
                                        <label>:&nbsp;{formData1.city}</label>
                                    </div>

                                </div>

                                <div className='row'>


                                    {/* State */}

                                    <div className='col'>
                                        <label htmlFor="state" className="form-label">State</label>
                                    </div>

                                    <div className='col'>
                                        <label>:&nbsp;{formData1.state}</label>
                                    </div>

                                </div>

                                <div className='row'>

                                    {/* Postal Code */}

                                    <div className='col'>
                                        <label htmlFor="postalCde" className="form-label">ZIP / Postal Code</label>
                                    </div>

                                    <div className='col'>
                                        <label>:&nbsp;{formData1.postalCode}</label>
                                    </div>

                                </div>

                                <div className='row'>

                                    {/* Country */}

                                    <div className='col'>
                                        <label htmlFor="country" className="form-label">Country</label>
                                    </div>

                                    <div className='col'>
                                        <label>:&nbsp;{formData1.country}</label>
                                    </div>

                                </div>

                                <div className='row'>

                                    {/* Phone Number */}

                                    <div className='col'>
                                        <label htmlFor="phone" className="form-label">Phone Number</label>
                                    </div>

                                    <div className='col'>
                                        <label>:&nbsp;{formData1.phone}</label>
                                    </div>

                                </div>

                                <div className='row'>

                                    {/* Email */}

                                    <div className='col'>
                                        <label htmlFor="email" className="form-label">Email</label>
                                    </div>

                                    <div className='col'>
                                        <label>:&nbsp;{formData1.email}</label>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col'>
                                        {/* <h5 className='mt-4 mb-4'>Input Specification</h5> */}
                                        <Typography sx={{ fontSize: 20 }} variant='h5' color="text.secondary" gutterBottom className='pt-5 pb-3'>
                                            Input Specification
                                        </Typography>
                                    </div>
                                </div>

                                {/* Input Directory */}

                                <div className='row'>

                                    <div className='col'>
                                        <label htmlFor="inputDir" className="form-label">Sample Input Directories</label>
                                    </div>

                                    <div className='col'>
                                        <label>:&nbsp;{formData2.filename}</label>
                                    </div>
                                </div>

                                <div className='row'>

                                    {/* Sample Source */}

                                    <div className='col'>
                                        <label htmlFor="sampleSource" className="form-label">Sample Source</label>
                                    </div>

                                    <div className='col'>
                                        <label>:&nbsp;{formData2.sampleSource}</label>
                                    </div>

                                </div>

                                <div className='row'>
                                    {/* Sample Type */}

                                    <div className='col'>
                                        <label htmlFor="sampleType" className="form-label">Sample Type</label>
                                    </div>

                                    <div className='col'>
                                        <label>:&nbsp;{formData2.sampleType}</label>
                                    </div>
                                </div>

                                {/* <div className='row'>
                            Output Directory

                            <div className='col'>
                                <label htmlFor="sampleType" className="form-label">Sample Input Directories</label>
                            </div>

                            <div className='col'>
                                <label>:&nbsp;{  }</label>
                            </div>
                        </div> */}

                                <div className='row'>
                                    <div className='col'>
                                        {/* <h5 className='mt-4 mb-4'>System Parameters</h5> */}
                                        <Typography sx={{ fontSize: 20 }} variant='h5' color="text.secondary" gutterBottom className='pt-5 pb-3'>
                                            System Parameters
                                        </Typography>
                                    </div>
                                </div>

                                <div className='row'>

                                    {/* Maximum CPU */}

                                    <div className='col'>
                                        <label htmlFor="cpu" className="form-label">Maximum CPU</label><span>{formData2.thread}</span>
                                    </div>

                                    <div className='col'>
                                        <label>:&nbsp;{formData2.thread}</label>
                                    </div>

                                </div>

                                <div className='row'>

                                    {/* Maximum RAM */}

                                    <div className='col'>
                                        <label htmlFor="ram" className="form-label">Maximum RAM</label>
                                    </div>

                                    <div className='col'>
                                        <label>:&nbsp;{formData2.memory}</label>
                                    </div>
                                </div>

                                {/* Back and Continue button */}

                                <div className='row mt-3 mb-3'>
                                    <div className='col'>
                                        <Button type='button' size="small" variant="contained" onClick={navigateSampleDetails} ><BsFillSkipStartFill /> &nbsp;Back</Button>
                                    </div>
                                    <div className='col'>
                                        <Button type='submit' size="small" variant="contained" onClick={navigateDashboard} ><BsFillSkipEndFill /> &nbsp;Execute</Button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </Paper>
                </Box>

            </div>

        </React.Fragment >
    )
}

export default Summary