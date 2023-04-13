import React from 'react';
import { useRef } from 'react';
import jsPDF from 'jspdf';
import AnalysisReport from './AnalysisReport';

function ReportDownload() {

    const analysisReportRef = useRef(null);

    const handleGeneratePdf = () => {

        const doc = new jsPDF({
            orientation: 'landscape',
            format: 'a1',
            unit: 'px',
        });

        // Adding the fonts.
        doc.setFont('Inter-Regular', 'normal');

        doc.html(analysisReportRef.current, {
            async callback(doc) {
                await doc.save('document');
            },
        });
    };

    return (
        <React.Fragment>
            <div>
                <div ref={analysisReportRef}>
                    <AnalysisReport />
                </div>
                <div className="fixed-bottom" id="downloadButton"  onClick={handleGeneratePdf}>
                    <div className="m-2 float-end btn btn-outline-success">
                        <i className="fa fa-download"></i>
                        Download
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ReportDownload