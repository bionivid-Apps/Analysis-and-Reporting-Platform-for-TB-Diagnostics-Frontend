import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import LogoutIcon from '@mui/icons-material/Logout';

import { useNavigate, Routes, Route } from 'react-router-dom';

import GridSystemAdmin from './GridSystemAdmin';
import PatientDetails from '../../Analysis Details/PatientDetails';
import SampleDetails from '../../Analysis Details/SampleDetails';
import Summary from '../../Analysis Details/Summary';
import ReportDownload from '../../Report/ReportDownload';

const drawerWidth = 240;

function DashboardAdmin(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navigateLogin = () => {
        navigate('/login')
    }

    const drawer = (
        <div className='text-white sideBar'>

            <Toolbar />

            <Divider />
            <List>

                <ListItem className='button' disablePadding>
                    <ListItemButton className='button'>
                        <ListItemIcon className='text-white'>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Profile'} />
                    </ListItemButton>
                </ListItem>

            </List>

            <List>

                <ListItem className='button' disablePadding>
                    <ListItemButton className='button' onClick={() => { navigate('/dashboardAdmin') }}>
                        <ListItemIcon className='text-white'>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Dashboard'} />
                    </ListItemButton>
                </ListItem>

            </List>

            <List>

                <ListItem className='button' disablePadding>
                    <ListItemButton className='button' onClick={() => { }}>
                        <ListItemIcon className='text-white'>
                            <ManageSearchIcon />
                        </ListItemIcon>
                        <ListItemText primary={'All Analysis'} />
                    </ListItemButton>
                </ListItem>

            </List>

            <List>

                <ListItem className='button' disablePadding>
                    <ListItemButton className='button' onClick={() => { }}>
                        <ListItemIcon className='text-white'>
                            <ContentPasteSearchIcon />
                        </ListItemIcon>
                        <ListItemText primary={'New Analysis'} />
                    </ListItemButton>
                </ListItem>

            </List>

            <Divider />

            <List>

                <ListItem className='logout' key={'Logout'} disablePadding>
                    <ListItemButton className='button' onClick={navigateLogin}>
                        <ListItemIcon className='text-white'>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Logout'} />
                    </ListItemButton>
                </ListItem>

            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', background: 'rgb(220, 225, 228)' }}>
            <CssBaseline />

            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    paddingTop: '10px',
                    paddingBottom: '10px',
                }}
            >
                <Toolbar className='d-flex justify-content-between'>

                    <Typography variant="h6" noWrap component="div">
                        APP NAME
                    </Typography>
                    <Typography variant="p" noWrap component="div">
                        User Name
                        <img src="https://media.licdn.com/dms/image/C5603AQEupqw95QMqFA/profile-displayphoto-shrink_800_800/0/1564620948115?e=2147483647&v=beta&t=wn_iSZIZLbGWXuSKaPLnEzQUkEC-avIEIaWHQ0R2t4o" className="rounded-circle ms-3 img" alt="..." />
                    </Typography>


                </Toolbar>

            </AppBar>

            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box component="main"
                sx={{ flexGrow: 1, p: 2, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>

                {/* <GridSystemAdmin /> */}

                <Routes>
                    <Route index element={<GridSystemAdmin />} />
                    <Route path='gridSystemAdmin' element={<GridSystemAdmin />} />
                    <Route path="patientDetails" element={<PatientDetails />} />
                    <Route path="sampleDetails" element={<SampleDetails />} />
                    <Route path="summary" element={<Summary />} />
                    <Route path="report" element={<ReportDownload />} />
                </Routes>

                <footer className='text-center mt-5'>
                    <p>Designed and developed by Bionivid</p>
                </footer>

            </Box>
        </Box >
    );
}

export default DashboardAdmin;