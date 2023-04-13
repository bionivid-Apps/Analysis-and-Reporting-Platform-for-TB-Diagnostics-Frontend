import React from 'react';
import Grid from '@mui/material/Grid';

import NewAnalysis from './NewAnalysis';
import ProfileInfo from './ProfileInfo';
import RightSideBar from './RightSideBar';
import BottomSection from './BottomSection';

function GridSystemAdmin() {
    return (
        <React.Fragment>
            <Grid container rowSpacing={1} columnSpacing={2} className='mt-4 pt-5'>
                <Grid item xs={8}>
                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <NewAnalysis />
                        </Grid>

                        <Grid item xs={6}>
                            <ProfileInfo />
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} className='mt-1'>
                        <Grid item xs={12}>
                            <BottomSection />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <RightSideBar />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default GridSystemAdmin