import React from "react";
import { Routes, Route } from 'react-router-dom';

import NavBar from "./Form Details/NavBar";

import Intro from "./Form Details/Intro";
import About from "./Form Details/About";
import Login from "./Form Details/Login";
import SignUp from "./Form Details/SignUp";
import Otp from "./Form Details/Otp";
import ForgotPwd from "./Form Details/ForgotPwd";

import DashboardUsers from "./Dashboard/Dashboard Normal Users/DashboardUsers";
import DashboardDiagnostic from "./Dashboard/Dashboard Diagnostic Center Users/DashboardDiagnostic";
import DashboardAdmin from "./Dashboard/Dashboard Admin/DashboardAdmin";

import GridSystemUser from "./Dashboard/Dashboard Normal Users/GridSystemUser";
import GridSystemDiagnostic from "./Dashboard/Dashboard Diagnostic Center Users/GridSystemDiagnostic";
import GridSystemAdmin from "./Dashboard/Dashboard Admin/GridSystemAdmin";

import PatientDetails from "./Analysis Details/PatientDetails";
import SampleDetails from "./Analysis Details/SampleDetails";
import Summary from "./Analysis Details/Summary";

import ReportDownload from "./Report/ReportDownload";

function Routing() {

    return (
        <React.Fragment>
            <NavBar />

            <Routes>
                <Route index element={<Intro />} />
                <Route path='home' element={<Intro />} />
                <Route path="login" element={<Login />} />
                <Route path="about" element={<About />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="otp" element={<Otp />} />
                <Route path="forgot" element={<ForgotPwd />} />

                <Route path="/dashboardUsers/*" element={<DashboardUsers />}>
                    <Route index element={<GridSystemUser />} />
                    <Route path='gridSystemUser' element={<GridSystemUser />} />
                    <Route path="patientDetails" element={<PatientDetails />} />
                    <Route path="sampleDetails" element={<SampleDetails />} />
                    <Route path="summary" element={<Summary />} />
                    <Route path="report" element={<ReportDownload />} />
                </Route>

                <Route path="/dashboardDiagnostic/*" element={<DashboardDiagnostic />}>
                    <Route index element={<GridSystemDiagnostic />} />
                    <Route path='gridSystemDiagnostic' element={<GridSystemDiagnostic />} />
                    <Route path="patientDetails" element={<PatientDetails />} />
                    <Route path="sampleDetails" element={<SampleDetails />} />
                    <Route path="summary" element={<Summary />} />
                    <Route path="report" element={<ReportDownload />} />
                </Route>

                <Route path="/dashboardAdmin/*" element={<DashboardAdmin />}>
                    <Route index element={<GridSystemAdmin />} />
                    <Route path='gridSystemAdmin' element={<GridSystemAdmin />} />
                    <Route path="patientDetails" element={<PatientDetails />} />
                    <Route path="sampleDetails" element={<SampleDetails />} />
                    <Route path="summary" element={<Summary />} />
                    <Route path="report" element={<ReportDownload />} />
                </Route>
            </Routes>
        </React.Fragment>
    )
}

export default Routing