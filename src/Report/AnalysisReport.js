import React from 'react';
import { Link } from 'react-router-dom';
import { formData1 } from '../Analysis Details/PatientDetails';
import { formData2 } from '../Analysis Details/SampleDetails';


function AnalysisReport() {

    return (
        <React.Fragment>
            <div className='container mt-5 pt-3'>
                <div className='row'>
                    <div className='col-3'>
                        <nav
                            id="navbar-analysisReport"
                            className="navbar navbar-light bg-light flex-column align-items-stretch p-2"
                        >
                            <Link
                                className="navbar-brand"
                                to="#"
                                style={{ borderBottom: "2px solid green" }}
                            >Contents</Link>
                            <nav className="nav nav-pills flex-column">
                                <Link className="nav-link" to="#item-project-setting"
                                >Analysis Details</Link>
                                <Link className="nav-link" to="#item-workflow">1. WorkFlow</Link>
                                <Link className="nav-link" to="#analysis-summary">2. Analysis Summary</Link>
                                <nav className="nav nav-pills flex-column ms-3">
                                    <Link className="nav-link ms-3" to="#item-dataqc-result">
                                        2.1 Raw Data QC
                                    </Link>
                                    <nav className="nav nav-pills flex-column ms-3">
                                        <Link className="nav-link ms-3" to="#beforeFiltering">
                                            2.1.1 Before Filtering
                                        </Link>
                                        <Link className="nav-link ms-3" to="#afterFiltering">
                                            2.1.2 After Filtering
                                        </Link>
                                    </nav>
                                    <Link className="nav-link ms-3" to="#read-analysis_alignment">
                                        2.2 Alignment
                                    </Link>
                                </nav>
                            </nav>
                            <Link className="nav-link" to="#read-analysis_picard"
                            >3. Picard de-dup Stats</Link
                            >
                            <Link className="nav-link" to="#read-analysis_peak_calling"
                            >4. Peak calling</Link
                            >
                            <nav className="nav nav-pills flex-column ms-3">
                                <Link className="nav-link ms-3" to="#read-genome_wide_dist_of_peaks">
                                    4.1 Genome Wide Distribution of Peaks:
                                </Link>
                                <nav className="nav nav-pills flex-column ms-3">
                                    <Link className="nav-link ms-3" to="#pie_graphs"> 4.1.1 Pie Graphs </Link>
                                    <Link className="nav-link ms-3" to="#upset_plot_graph">
                                        4.1.2 Upset Plot Graphs
                                    </Link>
                                    <Link className="nav-link ms-3" to="#genome_coverage">
                                        4.1.3 Genome Coverage
                                    </Link>
                                </nav>
                            </nav>
                            <Link className="nav-link" to="#analysis_annotation">5. Annotation:</Link>
                            <nav className="nav nav-pills flex-column ms-3">
                                <Link className="nav-link ms-3" to="#analysis_functional_enrichment">
                                    5.1 Functional Enrichment
                                </Link>
                                <Link className="nav-link ms-3" to="#analysis_heatmap"> 5.2 Heatmap </Link>
                                <Link className="nav-link ms-3" to="#analysis_TSS_graph">
                                    5.3 TSS Graph
                                </Link>
                            </nav>
                            <Link className="nav-link" to="#differential_analysis"
                            >6. Differential Analysis</Link
                            >
                            <Link className="nav-link" to="#read-analysis_meme"
                            >7. Meme - Motif Analysis</Link
                            >
                            <Link className="nav-link" to="#item-directory-structure"
                            >8. Directory structure</Link
                            >
                            <Link className="nav-link" to="#item-acknowledgement"
                            >9. Acknowledgement</Link
                            >
                            <Link className="nav-link" to="#item-references">10. References</Link>
                            <Link className="nav-link"></Link>
                        </nav>
                    </div>

                    <div className='col-9'>
                        <div className="mt-4 text-center">
                            <span className="fw-bolder fs-1"> Analysis Report </span>
                            <span className="fw-normal fs-6 mt-1">
                                <br />
                                Analysis Report Created on: &nbsp;<span id="dateanalysis"
                                >DD / MM / YYYY at HH : MM : SS</span
                                >
                            </span>
                            <hr />
                        </div>

                        <div>
                            <div id="item-project-setting">
                                <div className="table-responsive">
                                    <table className="table table-striped mt-3 table-hover">
                                        <tbody>
                                            <tr className='text-center'>
                                                <th scope="row" colSpan="2">
                                                    <i className="fa fa-file" aria-hidden="true"></i> Patient Details
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row" width="25%">Client ID</th>
                                                <td id="v-project-report-id-analysis">:&nbsp;{formData2.clientId}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" width="25%">Patient Full Name</th>
                                                <td id="v-project-report-description-analysis">:&nbsp;{formData1.name}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" width="25%">Patient Address</th>
                                                <td id="v-project-report-description-analysis">:&nbsp;{formData1.address}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" width="25%">City</th>
                                                <td id="v-project-report-description-analysis">:&nbsp;{formData1.city}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" width="25%">State</th>
                                                <td id="v-project-report-description-analysis">:&nbsp;{formData1.state}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" width="25%">Postal Code</th>
                                                <td id="v-project-report-description-analysis">:&nbsp;{formData1.postalCode}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" width="25%">Country</th>
                                                <td id="v-project-report-description-analysis">:&nbsp;{formData1.country}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" width="25%">Phone Number</th>
                                                <td id="v-project-report-description-analysis">:&nbsp;{formData1.phone}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" width="25%">Email Address</th>
                                                <td id="v-project-report-description-analysis">:&nbsp;{formData1.email}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-striped mt-2 table-hover">
                                        <tbody>
                                            <tr className='text-center'>
                                                <th scope="row" width="25%" colSpan="2">
                                                    <i className="fa fa-file" aria-hidden="true"></i> Input
                                                    Specification
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row" width="25%">Sample Input Directories</th>
                                                <td id="v-project-report-inputs-treated-analysis">:&nbsp;{formData2.filename}</td>
                                            </tr>
                                            <tr id="control_sample_show_report">
                                                <th scope="row" width="25%">Sample Source</th>
                                                <td id="v-project-report-inputs-control-analysis">:&nbsp;{formData2.sampleSource}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" width="25%">Sample Type</th>
                                                <td id="v-project-report-perform-species-analysis">:&nbsp;{formData2.sampleType}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" width="25%">Output Directory</th>
                                                <td id="v-project-report-perform-macs3-analysis">:&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-striped mt-2 table-hover">
                                        <tbody>
                                            <tr className='text-center'>
                                                <th scope="row" width="25%" colSpan="2">
                                                    <i className="fa fa-server" aria-hidden="true"></i> System
                                                    Parameters
                                                </th>
                                            </tr>
                                            <tr>
                                                <th scope="row" width="25%">Maximum CPU</th>
                                                <td id="v-project-report-cpu-analysis">:&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" width="25%">Maximum RAM</th>
                                                <td id="v-project-report-ram-analysis">:&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <hr />

                                <h5 className='text-center'>Drug Susceptibility Test</h5>

                                <div className="table-responsive">
                                    <table className="table table-striped mt-3 table-hover">
                                        <tbody>
                                            <tr>
                                                <th scope="row" width="25%" colSpan="1">
                                                    <i className="fa fa-file" aria-hidden="true"></i> Antibiotic
                                                </th>
                                                <th scope="row" width="25%" colSpan="1">
                                                    <i className="fa fa-file" aria-hidden="true"></i> Presence of Drug-Resistant Mutation
                                                </th>
                                            </tr>
                                            <tr>
                                                <td width="25%">Rifampicin</td>
                                                <td id="v-project-report-inputs-treated-analysis">(RMP)Detected</td>
                                            </tr>
                                            <tr id="control_sample_show_report">
                                                <td>Isoniazid</td>
                                                <td id="v-project-report-inputs-control-analysis">(INH)Detected</td>
                                            </tr>
                                            <tr>
                                                <td>Ethambutol</td>
                                                <td id="v-project-report-perform-species-analysis">(EMB)Detected</td>
                                            </tr>
                                            <tr>
                                                <td>Pyrazinamid</td>
                                                <td id="v-project-report-perform-species-analysis">(PZA)Detected</td>
                                            </tr>
                                            <tr>
                                                <td>Clofazimine</td>
                                                <td id="v-project-report-perform-species-analysis">(CLO)Detected</td>
                                            </tr>
                                            <tr>
                                                <td>Pyrazinamid</td>
                                                <td id="v-project-report-perform-species-analysis">(BDQ)Detected</td>
                                            </tr>
                                            <tr>
                                                <td>Delamanid</td>
                                                <td id="v-project-report-perform-species-analysis">(DMD)Detected</td>
                                            </tr>
                                            <tr>
                                                <td>Pretomanid</td>
                                                <td id="v-project-report-perform-species-analysis">(PTM)Detected</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <hr />

                                <h5 className='text-center'>Antibiogram</h5>

                                <div className='text-center'>
                                    <span>Diagram1</span><br />
                                    <span>Diagram2</span>
                                </div>

                                <hr />

                                <h5 className='text-center'>List of Variants used to call resistance</h5>
                                <div className="table-responsive">
                                    <table className="table table-striped mt-3 table-hover">
                                        <tbody>
                                            <tr>
                                                <th scope="row" width="25%" colSpan="1">
                                                    <i className="fa fa-file" aria-hidden="true"></i> Position
                                                </th>
                                                <th scope="row" width="25%" colSpan="1">
                                                    <i className="fa fa-file" aria-hidden="true"></i> Ref. Allele
                                                </th>
                                                <th scope="row" width="25%" colSpan="1">
                                                    <i className="fa fa-file" aria-hidden="true"></i> Alternate Allele
                                                </th>
                                                <th scope="row" width="25%" colSpan="1">
                                                    <i className="fa fa-file" aria-hidden="true"></i> Type
                                                </th>
                                                <th scope="row" width="25%" colSpan="1">
                                                    <i className="fa fa-file" aria-hidden="true"></i> Frequency
                                                </th>
                                                <th scope="row" width="25%" colSpan="1">
                                                    <i className="fa fa-file" aria-hidden="true"></i> Coverage
                                                </th>
                                                <th scope="row" width="25%" colSpan="1">
                                                    <i className="fa fa-file" aria-hidden="true"></i> Substitution
                                                </th>
                                                <th scope="row" width="25%" colSpan="1">
                                                    <i className="fa fa-file" aria-hidden="true"></i> Gene Symbol
                                                </th>
                                                <th scope="row" width="25%" colSpan="1">
                                                    <i className="fa fa-file" aria-hidden="true"></i> Gene Name
                                                </th>
                                                <th scope="row" width="25%" colSpan="1">
                                                    <i className="fa fa-file" aria-hidden="true"></i> Drug
                                                </th>
                                                <th scope="row" width="25%" colSpan="1">
                                                    <i className="fa fa-file" aria-hidden="true"></i> Pubmed ID
                                                </th>
                                                <th scope="row" width="25%" colSpan="1">
                                                    <i className="fa fa-file" aria-hidden="true"></i> Mutation Confidence
                                                </th>
                                            </tr>
                                            <tr>
                                                <td width="25%">781687</td>
                                                <td width="25%">A</td>
                                                <td width="25%">G</td>
                                                <td width="25%">SNP</td>
                                                <td width="25%">99.17</td>
                                                <td width="25%">113</td>
                                                <td width="25%">Lys43Arg (aag/aGg)</td>
                                                <td width="25%">Rv0682</td>
                                                <td width="25%">rpst.</td>
                                                <td width="25%">SM</td>
                                                <td width="25%">22646308</td>
                                                <td width="25%">Yes</td>
                                            </tr>

                                            <tr>
                                                <td width="25%">781687</td>
                                                <td width="25%">A</td>
                                                <td width="25%">G</td>
                                                <td width="25%">SNP</td>
                                                <td width="25%">99.17</td>
                                                <td width="25%">113</td>
                                                <td width="25%">Lys43Arg (aag/aGg)</td>
                                                <td width="25%">Rv0682</td>
                                                <td width="25%">rpst.</td>
                                                <td width="25%">SM</td>
                                                <td width="25%">22646308</td>
                                                <td width="25%">Yes</td>
                                            </tr>

                                            <tr>
                                                <td width="25%">781687</td>
                                                <td width="25%">A</td>
                                                <td width="25%">G</td>
                                                <td width="25%">SNP</td>
                                                <td width="25%">99.17</td>
                                                <td width="25%">113</td>
                                                <td width="25%">Lys43Arg (aag/aGg)</td>
                                                <td width="25%">Rv0682</td>
                                                <td width="25%">rpst.</td>
                                                <td width="25%">SM</td>
                                                <td width="25%">22646308</td>
                                                <td width="25%">Yes</td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>

                                <hr />

                                <h5 className='text-center'>Mutation Lollipop Plot</h5>

                                <div className='text-center'>
                                    <span>Diagram</span>
                                </div>

                                <hr />

                                <h5 className='text-center'>Phalogeny Tree</h5>

                                <div className='text-center'>
                                    <span>Diagram</span>
                                </div>

                                <hr />

                                <h5 className='text-center'>Detailed Comparision</h5>

                                <div className='text-center'>
                                    <span>Diagram</span>
                                </div>

                                <hr />

                                <h5 className='text-center'>Detailed Results View</h5>

                                <div className='text-center'>
                                    <span>Diagram</span>
                                </div>

                                <hr />

                                <h5 className='text-center'>TB Drug resistance classification criteria</h5>

                                <div className="table-responsive">
                                    <table className="table table-striped mt-2 table-hover">
                                        <tbody>
                                            <tr>
                                                <th scope="row" width="25%">Multidrug resistant tuberculosis (MDR-TB)</th>
                                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Pre-extensively drug-resistant tuberculosis (Pre-XDR-TB)</th>
                                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Extensively drug-resistant tuberculosis (Pre-XDR-TB)</th>
                                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Drug resistance detected</th>
                                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Not Drug Resistant</th>
                                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <hr />

                                <h5 className='text-center'>Mixed infection classification criteria</h5>

                                <div className="table-responsive">
                                    <table className="table table-striped mt-2 table-hover">
                                        <tbody>
                                            <tr>
                                                {/* <th scope="row" width="25%">Multidrug resistant tuberculosis (MDR-TB)</th> */}
                                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <hr />

                                <h5 className='text-center'>Co-infection classification criteria</h5>

                                <div className="table-responsive">
                                    <table className="table table-striped mt-2 table-hover">
                                        <tbody>
                                            <tr>
                                                {/* <th scope="row" width="25%">Multidrug resistant tuberculosis (MDR-TB)</th> */}
                                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AnalysisReport;