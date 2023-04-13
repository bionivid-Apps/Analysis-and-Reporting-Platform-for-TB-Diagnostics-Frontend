import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { FaStethoscope } from "react-icons/fa";
import { BsFillSkipStartFill } from "react-icons/bs";
import { BsFillSkipEndFill } from "react-icons/bs";

import { message } from '../Form Details/Login';

export let formData2={};

function SampleDetails() {

    // Intializing and setting values

    const [sampleId, setSampleId] = useState('')
    const [clientId, setClientId] = useState('')
    const [testId, setTestId] = useState('')
    const [sampleType, setSampleType] = useState('')
    const [sampleSource, setSampleSource] = useState('')
    const [inputDir, setInputDir] = useState(null)
    // const [outputDir, setOutputDir] = useState('')
    // const [thread, setThread] = useState(2)
    // const [memory, setMemory] = useState(32)

    const [sampleIdErr, setSampleIdErr] = useState('')
    const [clientIdErr, setClientErr] = useState('')
    const [testIdErr, setTestIdErr] = useState('')
    const [sampleTypeErr, setSampleTypeErr] = useState('')
    const [sampleSourceErr, setSampleSourceErr] = useState('')
    const [inputDirErr, setInputDirErr] = useState('')
    // const [outputDirErr, setOutputDirErr] = useState('')

    const navigate = useNavigate()

    // useEffect(() => {
    //     let ele = document.querySelector('.threadValue');
    //     if (ele) {
    //         ele = `${(thread / 2)}`;
    //     }
    // })

    // useEffect(() => {
    //     let ele = document.querySelector('.memoryValue');
    //     if (ele) {
    //         ele = `${(memory / 4)}`;
    //     }
    // })

    // Sample id validation

    const validateSampleId = () => {

        if (sampleId.length !== 0) {
            setSampleIdErr("")
            return true
        }

        if (sampleId.length === 0) {
            setSampleIdErr("Invalid Sample ID!")
            return false
        }

    }

    // Client id validation

    const validateClientId = () => {

        if (clientId.length !== 0) {
            setClientErr("")
            return true
        }

        if (clientId.length === 0) {
            setClientErr("Invalid Client ID!")
            return false
        }
    }

    // Test id validation

    const validateTestId = () => {

        if (testId.length !== 0) {
            setTestIdErr("")
            return true
        }

        if (testId.length === 0) {
            setTestIdErr("Invalid Test ID!")
            return false
        }
    }

    // Sample Type validation

    const validateSampleType = () => {

        if (sampleType.length !== 0) {
            setSampleTypeErr("")
            return true
        }

        if (sampleType.length === 0) {
            setSampleTypeErr("Invalid Sample type!")
            return false
        }

    }

    // Sample source validation

    const validateSampleSource = () => {

        if (sampleSource.length !== 0) {
            setSampleSourceErr("")
            return true
        }
        if (sampleSource.length === 0) {
            setSampleSourceErr("Invalid Sample source!")
            return false
        }

    }

    // Input Directory validation

    const validateInputDir = () => {

        if (inputDir !== null) {
            setInputDirErr("")
            return true
        }

        if (inputDir === null) {
            setInputDirErr("This field cannot be empty!")
            return false
        }

    }

    // Output Directory validation

    // function validateOutputDir() {

    //     if (outputDir !== "") {
    //         setOutputDirErr("")
    //         return true
    //     }

    //     if (outputDir === "") {
    //         setOutputDirErr("This field cannot be empty!")
    //         return false
    //     }
    // }

    const navigatePatient = () => {
        if (message === "normal_users") {
            navigate('/dashboardUsers/patientDetails');
        }

        if (message === "diagnostic_users") {
            navigate('/dashboardDiagnostic/patientDetails');
        }

        if (message === "admin_users") {
            navigate('/dashboardAdmin/patientDetails');
        }
    }

    // Form validation

    const formHandler = async (event) => {
        event.preventDefault()

        if (!validateSampleId() || !validateClientId() || !validateTestId() || !validateSampleType() || !validateSampleSource() || !validateInputDir()) {
            return false
        }

        console.log(formData2);

        const formData = new FormData();
        formData.append('sampleId', sampleId);
        formData.append('clientId', clientId);
        formData.append('testId', testId);
        formData.append('sampleType', sampleType);
        formData.append('sampleSource', sampleSource);
        formData.append('file', inputDir);

        try {
            const response = await axios.post("/sampleDetails", formData, {
                headers: {
                    "Content-Type": "multipart/form-data" // specify encoding type
                }
            });
            console.log(response.data);
            formData2 = response.data;

            if (message === "normal_users") {
                alert('Successfull!');
                navigate('/dashboardUsers/summary');
            }
            else if (message === "diagnostic_users") {
                alert('Successfull!');
                navigate('/dashboardDiagnostic/summary');
            }
            else if (message === "admin_users") {
                alert('Successfull!');
                navigate('/dashboardAdmin/summary');
            }
            else {
                alert(formData2)
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <React.Fragment>

            <div className='container-fluid mt-5 pt-5'>

                {/* Introduction */}

                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        width: '90vw',
                        height: '75vh',
                        overflow: 'auto'
                    },
                }}>
                    <Paper elevation={3}>
                        <div className='row ms-5 me-5'>
                            {/* <div className="col mt-5 ms-5 mb-5 position-relative insideBgImg6">
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <h1 className='text-white text-center fs-1 fw-bold'>Analytical & Reporting Platform for M. Tuberculosis</h1>
                        </div>
                    </div> */}

                            <div>

                                {/* Heading */}

                                <div className='row'>
                                    <div className='col'>
                                        {/* <h3 className='text-center mt-4 mb-4 fw-bold text-success'></h3> */}
                                        <Typography sx={{ fontSize: 23 }} variant='h5' color="text.secondary" gutterBottom className='text-center pt-5 pb-5'>
                                            <FaStethoscope /> &nbsp;Sample Details
                                        </Typography>
                                    </div>
                                </div>

                                {/* Form */}

                                <form onSubmit={formHandler} className="text-secondary">

                                    <div className='row'>

                                        {/* Sample id field */}

                                        <div className='col'>
                                            <label htmlFor="sampleId" className="form-label"><b>Sample ID</b></label>
                                            <input type="text" className="form-control" value={sampleId} onChange={(e) => setSampleId(e.target.value)} onKeyUp={validateSampleId} placeholder="Sample id" name="sampleId" required />
                                            <p className="text-warning fs-6">{sampleIdErr}</p>
                                        </div>

                                        {/* Client id field */}

                                        <div className='col'>
                                            <label htmlFor="clientId" className="form-label"><b>Client ID</b></label>
                                            <input type="text" className="form-control" onChange={(e) => setClientId(e.target.value)} onKeyUp={validateClientId} placeholder="Client ID" name="clientId" required />
                                            <p className="text-warning fs-6">{clientIdErr}</p>
                                        </div>

                                        {/* Test id field */}

                                        <div className='col'>
                                            <label htmlFor="testId" className="form-label"><b>Test ID</b></label>
                                            <input type="text" className="form-control" value={testId} onChange={(e) => setTestId(e.target.value)} onKeyUp={validateTestId} placeholder="Test ID" name="testId" required />
                                            <p className="text-warning fs-6">{testIdErr}</p>
                                        </div>
                                    </div>

                                    {/* Sample type field */}

                                    <div className='row'>
                                        <div className='col'>
                                            <label htmlFor="sampleType" className="form-label"><b>Sample Type</b></label>
                                            <input type="text" className="form-control" value={sampleType} onChange={(e) => setSampleType(e.target.value)} onKeyUp={validateSampleType} placeholder="Sample Type" name="sampleType" required />
                                            <p className="text-warning fs-6">{sampleTypeErr}</p>
                                        </div>

                                        {/* Sample source field */}

                                        <div className='col'>
                                            <label htmlFor="sampleSource" className="form-label"><b>Sample Source</b></label>
                                            <input type="text" className="form-control" value={sampleSource} onChange={(e) => setSampleSource(e.target.value)} onKeyUp={validateSampleSource} placeholder="Sample Source" name="sampleSource" required />
                                            <p className="text-warning fs-6">{sampleSourceErr}</p>
                                        </div>
                                    </div>

                                    <div className='row'>

                                        {/* Input Directory field */}

                                        <div className='col'>
                                            <label htmlFor="inputDir" className="form-label"><b>Select Input Directory</b></label>
                                            <input type="file" className="form-control" onChange={(e) => setInputDir(e.target.files[0])} onKeyUp={validateInputDir} placeholder="Browse Input Directory" name="inputDir" required />
                                            <p className="text-warning fs-6">{inputDirErr}</p>
                                        </div>

                                        {/* Output Directory field*/}

                                        {/* <div className='col'>
                                    <label htmlFor="outputDir" className="form-label"><b>Select Output Directory</b></label>
                                    <input type="file" className="form-control" value={outputDir} onChange={(e) => setOutputDir(e.target.value)} onKeyUp={validateOutputDir} placeholder="Browse Output Directory" name="outputDir" required webkitdirectory={outputDir.toString()} multiple />
                                    <p className="text-warning fs-6">{outputDirErr}</p>
                                </div> */}

                                    </div>

                                    {/* <div className='row'>

                                CPU Thread field

                                <div className='col'>

                                    <label htmlFor="thread" className="form-label"><b>CPU Thread &nbsp; </b></label><span className="threadValue"> &nbsp;{thread} Cores</span>

                                    <div>
                                        <input type="range" className='form-range' min={0} max={4} step={2} value={thread}
                                            onChange={({ target: { value: core } }) => {
                                                setThread(core);
                                            }}
                                        />
                                    </div>
                                </div>

                                RAM / Memory field

                                <div className='col'>
                                    <label htmlFor="memory" className="form-label"><b>RAM / Memory &nbsp; </b></label><span className='memoryValue'> &nbsp;{memory} GB</span>
                                    <div>
                                        <input type="range" className='form-range' min={4} max={64} step={4} value={memory}
                                            onChange={({ target: { value: gb } }) => {
                                                setMemory(gb);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div> */}

                                    {/* Back and Continue button field */}

                                    <div className='row mt-3'>
                                        <div className='col'>
                                            <Button type='button' size="small" variant="contained" onClick={navigatePatient}><BsFillSkipStartFill /> &nbsp;Back</Button>
                                        </div>

                                        <div className='col'>
                                            <Button type='submit' size="small" variant="contained"><BsFillSkipEndFill /> &nbsp;Continue</Button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </Paper>
                </Box>

            </div>
        </React.Fragment>
    )
}


export default SampleDetails
