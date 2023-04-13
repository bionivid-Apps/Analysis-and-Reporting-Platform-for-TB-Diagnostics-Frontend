import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Otp = () => {

    const navigate = useNavigate()

    // Intialiazing and setting values

    const [phone, setPhone] = useState('')
    const [otp, setOtp] = useState('')
    const [otpValue, setOtpValue] = useState('')

    // OTP validation

    function otpFunction() {
        var digits = '0123456789'
        let value = ''

        if (phone.match(/^[9,8,7]{1}[0-9]{9}$/)) {
            for (let i = 0; i < 4; i++) {
                value += digits[Math.floor(Math.random() * 4)]
            }
            setOtpValue(value)
            alert(`The OTP is ${value}`)
        }

        if (!phone.match(/^[9,8,7,6]{1}[0-9]{9}$/) && (phone !== "")) {
            setPhone("")
            alert("Please enter a valid Phone Number!")
        }

        if (phone === "") {
            setPhone("")
            alert("Phone number should not be empty!")
        }
    }

    function aBtnFunction(e) {

        if (phone === '' || otp === '') {
            e.preventDefault()
            alert("Fields should not be empty!")
        }

        else if (otp === otpValue) {
            alert("Successfull!")
            // navigate('/dashboardUsers')
            navigate('/dashboardDiagnostic')
            // navigate('/dashboardAdmin')
        }

        else {
            e.preventDefault()
            alert("Invalid OTP!")
            setOtp("")
        }

    }

    return (
        <React.Fragment>
            <div className='container-fluid pt-4'>

                {/* Introduction */}

                <div className='row'>
                    <div className="col mt-5 ms-5 mb-5 position-relative insideBgImg5">
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <h1 className='text-white text-center fs-1 fw-bold'>Verify your account with One Time Password</h1>
                        </div>
                    </div>

                    <div className="col mt-5 mb-5 me-5 bg-light contentBgImg">

                        {/* Heading */}

                        <div className='row'>
                            <div className='col'>
                                <h3 className='text-center mt-5 mb-5 fw-bold text-success'>OTP Verification</h3>
                            </div>
                        </div>

                        <form className='ms-5 me-5'>
                            {/* Phone number field */}

                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor="phone" className="form-label"><b>Phone Number</b></label>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col'>
                                    <input type="number" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" name="phone" required />
                                </div>

                                {/* OTP button */}

                                <div className='col'>
                                    <button className="btn btn-success" onClick={otpFunction} type="button">Get OTP</button>
                                </div>
                            </div>

                            {/* OTP field */}

                            <div className='row mt-3'>
                                <div className='col'>
                                    <label htmlFor="otp" className="form-label"><b>OTP</b></label>
                                    <input type="number" className="form-control" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter the OTP" name="otp" required />
                                </div>
                            </div>

                            {/* Submit button */}

                            <div className='row mt-4'>
                                <div className='col'>
                                    <button className="btn btn-success" onClick={aBtnFunction} type="button">Submit</button>
                                </div>
                            </div>
                        </form>



                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Otp