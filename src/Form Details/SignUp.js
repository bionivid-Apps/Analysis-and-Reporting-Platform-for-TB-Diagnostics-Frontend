import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export let formData = {}

function SignUp() {

    // Intialiazing and setting values

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [cpwd, setCpwd] = useState('')

    const [fnameErr, setFnameErr] = useState('')
    const [lnameErr, setLnameErr] = useState('')
    const [phoneErr, setPhoneErr] = useState('')
    const [emailErr, setEmailErr] = useState('')
    const [pwdErr, setPwdErr] = useState('')
    const [cpwdErr, setCpwdErr] = useState('')

    const navigate = useNavigate()

    //Firstname validation

    const validateFname = () => {

        if (fname.match(/^[A-Za-z]{3,}$/)) {
            setFnameErr("")
            return true
        }

        if (fname.length === 0) {
            setFnameErr("First name should not be empty!")
            return false
        }

        if (!fname.match(/^[A-Za-z]{3,}$/)) {
            setFnameErr("Invalid first name!")
            return false
        }
    }

    //Lastname validation

    const validateLname = () => {

        if (lname.match(/^[A-Za-z]{1,}$/)) {
            setLnameErr("")
            return true
        }

        if (lname.length === 0) {
            setLnameErr("Last name should not be empty!")
            return false
        }

        if (!lname.match(/^[A-Za-z]{1,}$/)) {
            setLnameErr("Invalid last name!")
            return false
        }
    }

    //Phone number validation

    const validatePhone = () => {

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
            return false
        }
    }

    //Email validation

    const validateEmail = () => {

        if (email.match(/^[A-Za-z0-9._-]+[@][A-Za-z]+[.][a-z]{2,4}$/)) {
            setEmailErr("")
            return true
        }

        if (email.length === 0) {
            setEmailErr("Email should not be empty!")
            return false
        }

        if (!email.match(/^[9,8,7]\d{9}$/)) {
            setEmailErr("Invalid email!")
            return false
        }
    }

    //Password validation

    const validatePwd = () => {
        if (pwd.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)) {
            setPwdErr("")
            return true
        }
        if (pwd.length === 0) {
            setPwdErr("Password should not be empty!")
            return false
        }

        if (!pwd.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)) {
            setPwdErr("Password is not strong")
            return false
        }
    }

    // Confirm password validation

    const validateCpwd = () => {
        if (cpwd === pwd) {
            setCpwdErr("")
            return true
        }
        if (cpwd.length === 0) {
            setCpwdErr("Password should not be empty!")
            return false
        }

        if (cpwd !== pwd) {
            setCpwdErr("Password is not same")
            return false
        }
    }

    // Form validation

    const formHandler = async (event) => {
        event.preventDefault()
        if (!validateFname() || !validateLname() || !validatePhone() || !validateEmail() || !validatePwd() || !validateCpwd()) {
            return false
        }

        try {
            const response = await axios.post("/signup", {
                fname, lname, phone, email, pwd, cpwd
            });
            console.log(response);
            const message = response.data;
            alert(message);
            if (message === 'Successfull!') {
                navigate('/otp');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <React.Fragment>
            <div className='container-fluid pt-4'>
                <div className='row'>

                    {/* Sign Up introduction */}

                    <div className="col mt-5 ms-5 mb-5 position-relative insideBgImg4">
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <h1 className='text-white text-center fs-1 fw-bold'>Create an account to join us</h1>
                            <p className='text-white text-center fs-4'>sign Up here to Continue</p>
                        </div>
                    </div>

                    {/* Heading */}

                    <div className="col mt-5 mb-5 me-5 bg-light contentBgImg">

                        <div className='row'>
                            <div className='col'>
                                <h3 className='text-center mt-5 mb-5 fw-bold text-success'>Sign Up</h3>
                            </div>
                        </div>

                        {/* Form */}

                        <form onSubmit={formHandler} action='POST' className="ms-5 me-5">

                            <div className='row'>

                                {/* Firstname field */}

                                <div className='col'>
                                    <label htmlFor="fname" className="form-label"><b>First Name</b></label>
                                    <input type="text" className="form-control" value={fname} onChange={(e) => setFname(e.target.value)} onKeyUp={validateFname} placeholder="Enter your first name" name="fname" required />
                                    <p className="text-warning">{fnameErr}</p>
                                </div>

                                {/* Lastname field */}

                                <div className='col'>
                                    <label htmlFor="lname" className="form-label"><b>Last Name</b></label>
                                    <input type="text" className="form-control" value={lname} onChange={(e) => setLname(e.target.value)} onKeyUp={validateLname} placeholder="Enter your last name" name="lname" required />
                                    <p className="text-warning">{lnameErr}</p>
                                </div>
                            </div>

                            {/* Phone number field */}

                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor="phone" className="form-label"><b>Phone Number</b></label>
                                    <input type="number" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} onKeyUp={validatePhone} placeholder="Enter your phone number" name="phone" required />
                                    <p className="text-warning">{phoneErr}</p>
                                </div>

                                {/* Email field */}

                                <div className='col'>
                                    <label htmlFor="email" className="form-label"><b>Email</b></label>
                                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} onKeyUp={validateEmail} placeholder="Enter your email" name="email" required />
                                    <p className="text-warning">{emailErr}</p>
                                </div>
                            </div>

                            {/* Password field */}

                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor="pwd" className="form-label"><b>Password</b></label>
                                    <input type="password" className="form-control" value={pwd} onChange={(e) => setPwd(e.target.value)} onKeyUp={validatePwd} placeholder="Enter Password" name="pwd" required />
                                    <p className="text-warning">{pwdErr}</p>
                                </div>

                                {/* Confirm password field */}

                                <div className='col'>
                                    <label htmlFor="cpwd" className="form-label"><b>Confirm Password</b></label>
                                    <input type="password" className="form-control" value={cpwd} onChange={(e) => setCpwd(e.target.value)} onKeyUp={validateCpwd} placeholder="Re-enter Password" name="cpwd" required />
                                    <p className="text-warning">{cpwdErr}</p>
                                </div>
                            </div>

                            {/* Sign Up button */}

                            <div className='row mt-3 mb-3'>
                                <div className='col'>
                                    <button className="btn btn-success mt-3" type="submit">Sign Up</button>
                                </div>
                            </div>

                            {/* Footer */}

                            <footer className="row mt-4">
                                <div className='col'>
                                    <p>Already a user, &nbsp;<Link to="/login">Login</Link> here</p>
                                </div>
                            </footer>

                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default SignUp
