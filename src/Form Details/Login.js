import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export let message;

function Login() {

    // Intialiazing and setting values

    const [uname, setUname] = useState('')
    const [pwd, setPwd] = useState('')

    const [unameErr, setUnameErr] = useState('')
    const [pwdErr, setPwdErr] = useState('')

    const navigate = useNavigate()

    // Validating fields

    // Username validation

    const validateUname = () => {

        if (uname.match(/^[9,8,7]\d{9}$/) || uname.match(/^[A-Za-z0-9._-]+[@][A-Za-z]+[.][a-z]{2,4}$/)) {
            setUnameErr("")
            return true
        }

        if (uname.length === 0) {
            setUnameErr("Email or Phone number should not be empty!")
            return false
        }

        if (!uname.match(/^[9,8,7]\d{9}$/) || !uname.match(/^[A-Za-z0-9._-]+[@][A-Za-z]+[.][a-z]{2,4}$/)) {
            setUnameErr("Invalid Email or Phone number!")
            return false
        }
    }

    // Password validation

    const validatePwd = () => {
        if (pwd.length === 0) {
            setPwdErr("Password should not be empty!")
            return false
        }
        else {
            setPwdErr("")
            return true
        }
    }

    // Form validation

    const formHandler = async (event) => {
        event.preventDefault()
        if (!validateUname() || !validatePwd()) {
            return false
        }

        try {
            const response = await axios.post("/login", {
                uname, pwd
            });

            console.log(response);
            message = response.data;

            if (message === 'normal_users') {
                alert('Successfull!');
                navigate('/dashboardUsers');
            }

            else if (message === 'diagnostic_users') {
                alert('Successfull!');
                navigate('/dashboardDiagnostic')
            }
            
            else if (message === 'admin_users') {
                alert('Successfull!');
                navigate('/dashboardAdmin')
            }

            else {
                alert(message);
            }

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <React.Fragment>
            <div className='container-fluid pt-4'>
                <div className='row'>

                    {/* Introduction */}

                    <div className="col mt-5 ms-5 mb-5 position-relative insideBgImg3">
                        <div className="position-absolute top-50 start-50 translate-middle">
                            <h1 className='text-white text-center fs-1 fw-bold'>Welcome Page</h1>
                            <p className='text-white text-center fs-4'>Login to Continue</p>
                        </div>
                    </div>

                    <div className="col mt-5 mb-5 me-5 bg-light contentBgImg">

                        {/* Heading */}

                        <div className='row'>
                            <div className='col'>
                                <h3 className='text-center mt-5 mb-5 fw-bold text-success'>Login</h3>
                            </div>
                        </div>

                        {/* Form */}

                        <form onSubmit={formHandler} method='POST' className="ms-5 me-5">

                            {/* Username field */}

                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor="uname" className="form-label"><b>Email or Phone number</b></label>
                                    <input type="text" className="form-control" value={uname} onChange={(e) => setUname(e.target.value)} onKeyUp={validateUname} placeholder="Enter Email or Phone number" name="uname" required />
                                    <p className="text-warning">{unameErr}</p>
                                </div>
                            </div>

                            {/* Password field */}

                            <div className='row'>
                                <div className='col'>
                                    <label htmlFor="pwd" className="form-label"><b>Password</b></label>
                                    <input type="password" className="form-control" value={pwd} onChange={(e) => setPwd(e.target.value)} onKeyUp={validatePwd} placeholder="Enter Password" name="pwd" required />
                                    <p className="text-warning">{pwdErr}</p>
                                </div>
                            </div>

                            {/* Login button */}

                            <div className='row mt-3 mb-3'>
                                <div className='col'>
                                    <button className="btn btn-success" type="submit">Login</button>
                                </div>
                            </div>

                            {/* Footer */}

                            <footer className="row mt-4">
                                <div className='col'>
                                    <p>Not a user, &nbsp;<Link to="/signup">Sign Up</Link> here</p>
                                </div>
                                <div className='col'>
                                    <p>Forgot &nbsp;<Link to="/forgot">Password?</Link></p>
                                </div>
                            </footer>

                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login
