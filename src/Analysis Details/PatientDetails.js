import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { BsFillPersonFill } from "react-icons/bs";
import { BsFillSkipEndFill } from "react-icons/bs";

import { useNavigate } from 'react-router-dom';

import { message } from '../Form Details/Login';

export let formData1={};

function PatientDetails() {

    // Intialiazing and setting values

    const [patientName, setPatientName] = useState('')
    const [patientAddress, setPatientAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [country, setCountry] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const [patientNameErr, setPatientNameErr] = useState('')
    const [patientAddressErr, setPatientAddressErr] = useState('')
    const [cityErr, setCityErr] = useState('')
    const [stateErr, setStateErr] = useState('')
    const [postalCodeErr, setPostalCodeErr] = useState('')
    const [countryErr, setCountryErr] = useState('')
    const [phoneErr, setPhoneErr] = useState('')
    const [emailErr, setEmailErr] = useState('')

    const navigate = useNavigate()

    // Patientname validation

    const validatePatientName = () => {

        if (patientName.match(/^[A-Za-z]{3,}\s{1}[A-Za-z]+$/)) {
            setPatientNameErr("")
            return true
        }

        if (patientName.length === 0) {
            setPatientNameErr("Name should not be empty!")
            return false
        }

        if (!patientName.match(/^[A-Za-z]{3,}\s{1}[A-Za-z]+$/)) {
            setPatientNameErr("Invalid name!")
            return false
        }
    }

    // Patientaddress validation

    const validatePatientAddress = () => {

        if (patientAddress.length !== 0) {
            setPatientAddressErr("")
            return true
        }

        if (patientAddress.length === 0) {
            setPatientAddressErr("Address should not be empty!")
            return false
        }
    }

    // City validation

    const validateCity = () => {

        if (city.length !== 0) {
            setCityErr("")
            return true
        }

        if (city.length === 0) {
            setCityErr("City should not be empty!")
            return false
        }
    }

    // State validation

    const validateState = () => {

        if (state.length !== 0) {
            setStateErr("")
            return true
        }

        if (state.length === 0) {
            setStateErr("State should not be empty!")
            return false
        }

    }

    // Postalcode validation

    const validatePostalCode = () => {
        if (postalCode.match(/^\d{6}$/)) {
            setPostalCodeErr("")
            return true
        }
        if (postalCode.length === 0) {
            setPostalCodeErr("Postal code should not be empty!")
            return false
        }

        if (!postalCode.match(/^\d{6}$/)) {
            setPostalCodeErr("Invalid postal code!")
            return false
        }
    }

    // Country validation

    const validateCountry = () => {

        if (country.length !== 0) {
            setCountryErr("")
            return true
        }

        if (country.length === 0) {
            setCountryErr("Country should not be empty!")
            return false
        }

    }

    // Phone number validation

    function validatePhone() {

        if (phone.match(/^[9,8,7]\d{9}$/)) {
            setPhoneErr("")
            return true
        }

        if (phone.length === 0) {
            setPhoneErr("Phone number should not be empty!")
            return false
        }

        if (!phone.match(/^[9,8,7]\d{9}$/)) {
            setPhoneErr("Invalid phone number!")
            return true
        }
    }

    // Email validation

    const validateEmail = () => {

        if (email.match(/^[A-Za-z0-9._-]+[@][A-Za-z]+[.][a-z]{2,4}$/)) {
            setEmailErr("")
            return true
        }

        if (email.length === 0) {
            setEmailErr("Email should not be empty!")
            return false
        }

        if (!email.match(/^[A-Za-z0-9._-]+[@][A-Za-z]+[.][a-z]{2,4}$/)) {
            setEmailErr("Invalid email!")
            return false
        }
    }

    // Form validation

    const formHandler = async (event) => {
        event.preventDefault()
        if (!validatePatientName() || !validatePatientAddress() || !validateCity() || !validateState() || !validatePostalCode() || !validateCountry() || !validatePhone() || !validateEmail()) {
            return false
        }

        // formData1 = {name: patientName,
        //     address: patientAddress,
        //     city,
        //     state,
        //     postalCode: +postalCode,
        //     country,
        //     phone: +phone,
        //     email};

        // console.log(formData1);

        try {
            const response = await axios.post("/patientDetails", {
                name: patientName,
                address: patientAddress,
                city,
                state,
                postalCode: +postalCode,
                country,
                phone: +phone,
                email
            });

            console.log(response.data);
            formData1 = response.data;

            if (message === "normal_users") {
                alert("Successfull!");
                navigate('/dashboardUsers/sampleDetails');
            }
            else if (message === "diagnostic_users") {
                alert("Successfull!");
                navigate('/dashboardDiagnostic/sampleDetails');
            }
            else if (message === "admin_users") {
                alert("Successfull");
                navigate('/dashboardAdmin/sampleDetails');
            }
            else {
                alert(formData1)
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
                        height: '93vh',
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

                            <div className="col">

                                {/* Heading */}

                                <div className='row'>
                                    <div className='col'>
                                        {/* <h3 className='text-center mt-4 mb-4 fw-bold text-success'><BsFillPersonFill /> &nbsp;Patient Details</h3> */}
                                        <Typography sx={{ fontSize: 23 }} variant='h5' color="text.secondary" gutterBottom className='text-center pt-5 pb-3'>
                                            <BsFillPersonFill /> &nbsp;Patient Details
                                        </Typography>
                                    </div>
                                </div>

                                {/* Form */}

                                <form onSubmit={formHandler} className="text-secondary">

                                    <div className='row'>

                                        {/* Patient fullname field */}

                                        <div className='col'>
                                            <label htmlFor="patientName" className="form-label">Patient Full Name</label>
                                            <input type="text" className="form-control" value={patientName} onChange={(e) => setPatientName(e.target.value)} onKeyUp={validatePatientName} placeholder="Enter your full name" name="patientName" required />
                                            <p className="text-warning fs-6">{patientNameErr}</p>
                                        </div>
                                    </div>

                                    {/* Patient address field */}

                                    <div className='row'>
                                        <div className='col'>
                                            <label htmlFor="patientAddress" className="form-label">Patient Address</label>
                                            <input type="text" className="form-control" value={patientAddress} onChange={(e) => setPatientAddress(e.target.value)} onKeyUp={validatePatientAddress} placeholder="Enter your address" name="patientAddress" required />
                                            <p className="text-warning fs-6">{patientAddressErr}</p>
                                        </div>
                                    </div>

                                    {/* City field */}

                                    <div className='row'>
                                        <div className='col'>
                                            <label htmlFor="city" className="form-label">City</label>
                                            <input type="text" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} onKeyUp={validateCity} placeholder="Enter your city" name="city" required />
                                            <p className="text-warning fs-6">{cityErr}</p>
                                        </div>

                                        {/* State field */}

                                        <div className='col'>
                                            <label htmlFor="state" className="form-label">State</label>
                                            <input type="text" className="form-control" value={state} onChange={(e) => setState(e.target.value)} onKeyUp={validateState} placeholder="Enter your state" name="state" required />
                                            <p className="text-warning fs-6">{stateErr}</p>
                                        </div>
                                    </div>

                                    {/* Postal code field */}

                                    <div className='row'>
                                        <div className='col'>
                                            <label htmlFor="postalCode" className="form-label">Postal Code</label>
                                            <input type="number" className="form-control" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} onKeyUp={validatePostalCode} placeholder="Enter your ZIP/postal code" name="postalCode" required />
                                            <p className="text-warning fs-6">{postalCodeErr}</p>
                                        </div>

                                        {/* Country field */}

                                        <div className='col'>
                                            <label htmlFor="country" className="form-label">Country</label>
                                            <input type="text" className="form-control" value={country} onChange={(e) => setCountry(e.target.value)} onKeyUp={validateCountry} placeholder="Enter your Country" name="cpwd" required />
                                            <p className="text-warning fs-6">{countryErr}</p>
                                        </div>
                                    </div>

                                    {/* Phone number field */}

                                    <div className='row'>
                                        <div className='col'>
                                            <label htmlFor="phone" className="form-label">Phone Number</label>
                                            <input type="number" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} onKeyUp={validatePhone} placeholder="Enter your phone number" name="phone" required />
                                            <p className="text-warning fs-6">{phoneErr}</p>
                                        </div>

                                        {/* Email field */}

                                        <div className='col'>
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} onKeyUp={validateEmail} placeholder="Enter your email" name="email" required />
                                            <p className="text-warning fs-6">{emailErr}</p>
                                        </div>
                                    </div>

                                    {/* Continue button */}

                                    <div className='row mt-3'>
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
        </React.Fragment >
    )
}


export default PatientDetails
