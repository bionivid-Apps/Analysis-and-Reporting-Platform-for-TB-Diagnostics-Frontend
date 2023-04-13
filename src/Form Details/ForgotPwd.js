import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ForgotPwd() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [otp, setOtp] = useState('')
    const [otpValue, setOtpValue] = useState('')
    console.log(otp)

    const validateEmail = () => {

        if (email.match(/^[A-Za-z0-9._-]+[@][A-Za-z]+[.][a-z]{2,4}$/)) {
            setEmailErr("")
            return true
        }

        else if (email === '') {
            setEmailErr("Email should not be empty!")
            return false
        }

        else {
            setEmailErr("Invalid email!")
            return false
        }
    }

    const formHandler = async (event) => {
        event.preventDefault()

        var digits = '0123456789'
        let value = ''

        if (validateEmail()) {

            for (let i = 0; i < 4; i++) {
                value += digits[Math.floor(Math.random() * 4)]
            }
            setOtpValue(value)
            alert(`One Time Password is sent to ${email}`)
        }

        try {
            const response = await axios.post("/forgot", {
                otpValue, email
            });
            console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    const otpFunction = () => {
        if (email === '' || otp === '') {
            alert("Fields should not be empty!")
        }

        else if (otp === otpValue) {
            alert("Successfull!")
            navigate('/login')
        }

        else {
            alert("Invalid OTP!")
            setOtp("")
        }
    }

    return (
        <React.Fragment>
            <div className='container-fluid pt-4'>
                <div className='row'>

                    {/* Introduction */}

                    <div className="col mt-5 ms-5 mb-5 position-relative insideBgImg3">
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <h1 className='text-white text-center fs-1 fw-bold'>Forgot Password</h1>
                            {/* <p className='text-white text-center fs-4'>Login to Continue</p> */}

                        </div>
                    </div>

                    <div className="col mt-5 mb-5 me-5 bg-light contentBgImg">

                        {/* Heading */}

                        <div className='row'>
                            <div className='col'>
                                <h3 className='text-center mt-5 mb-5 fw-bold text-success'>Forgot Password</h3>
                            </div>
                        </div>

                        {/* Form */}

                        <form onSubmit={formHandler} method='POST' className="ms-5 me-5">

                            {/* Username field */}

                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor="phone" className="form-label"><b>Email Address</b></label>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col'>
                                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} onKeyUp={validateEmail} placeholder="Enter your email address here" name="email" required />
                                </div>
                                <p className="text-warning">{emailErr}</p>

                                {/* OTP button */}

                                <div className='col'>
                                    <button className="btn btn-success" type="submit">Get OTP</button>
                                </div>
                            </div>

                        </form>



                        <div className="ms-5 me-5">

                            {/* OTP field */}

                            <div className='row mt-3'>
                                <div className='col'>
                                    <label htmlFor="otp" className="form-label"><b>OTP</b></label>
                                    <input type="text" className="form-control" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter the OTP" name="otp" required />
                                </div>
                            </div>

                            {/* Submit button */}

                            <div className='row mt-4'>
                                <div className='col'>
                                    <button className="btn btn-success" type="button" onClick={otpFunction}>Submit</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ForgotPwd