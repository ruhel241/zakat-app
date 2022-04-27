// import logo from './logo.svg';
import './App.css';

import * as React from 'react';
// import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

function App() {
  return (
      <div className="App">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              '& > :not(style)': {
                m: 1,
                width: 500,
                height: '100%'
              },
            }}
          >
            
            <Paper elevation={3}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography style={{textAlign: 'center'}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Zakat App
                  </Typography>
                  {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
              </AppBar>


              <div className="px-2">
                  <form>       
                      
                    <Grid container spacing={2} style={{textAlign: 'center'}}>
                      <Grid item xs={12}>
                        <p> আপনার পুরো বছরের সম্পদের পরিমানের তথ্য দিন:</p>
                      </Grid>
                      <Grid item xs={12}>
                        <p> এই ক্যালকুলেটরে প্রদত্ত তথ্য সংরক্ষণ, প্রক্রিয়াকরণ বা অন্য কোন উদ্দেশ্যে ব্যবহার করা হবে না</p>
                      </Grid>
                    </Grid>
                    
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{textAlign: 'center'}}>
                            <h3>ক্যাশ এমাউন্ট </h3>
                        </Grid>

                        <Grid item xs={6}>
                            <label>ক্যাশ টাকা </label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="ক্যাশ টাকা"
                            size="small"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <label>ব্যাংক একাউন্টে ক্যাশ টাকা</label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="ব্যাংক একাউন্টে ক্যাশ টাকা "
                            size="small"
                          />
                        </Grid>
                    </Grid> 

                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{textAlign: 'center'}}>
                            <h3>স্বর্ণের সমতুল্য টাকার পরিমান</h3>
                        </Grid>

                        <Grid item xs={6}>
                            <label>স্বর্ণ</label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="টাকা"
                            size="small"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <label>রুপা</label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="টাকা"
                            size="small"
                          />
                        </Grid>
                    </Grid> 


                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{textAlign: 'center'}}>
                            <h3>বিনিয়োগের পরিমান</h3>
                        </Grid>

                        <Grid item xs={6}>
                            <label>শেয়ার বাজার</label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="টাকা"
                            size="small"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <label>অন্যান্য বিনিয়োগ</label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="টাকা"
                            size="small"
                          />
                        </Grid>
                    </Grid> 

                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{textAlign: 'center'}}>
                            <h3>সম্পত্তি</h3>
                        </Grid>

                        <Grid item xs={6}>
                            <label>বাসা ভাড়া থেকে প্রাপ্ত আয় </label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="টাকা"
                            size="small"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <label>অন্যান্য সম্পত্তি</label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="টাকা"
                            size="small"
                          />
                        </Grid>
                    </Grid> 
        
                      
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{textAlign: 'center'}}>
                            <h3>ব্যবসা থেকে আয়ের পরিমান</h3>
                        </Grid>

                        <Grid item xs={6}>
                            <label>ব্যবসায় জমাকৃত আয়</label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="টাকা"
                            size="small"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <label>ব্যবসায় জমাকৃত পন্য</label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="টাকা"
                            size="small"
                          />
                        </Grid>
                    </Grid> 

                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{textAlign: 'center'}}>
                            <h3>অন্যান্য</h3>
                        </Grid>

                        <Grid item xs={6}>
                            <label>পেনশন থেকে প্রাপ্ত আয়</label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="টাকা"
                            size="small"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <label>যে ঋণের টাকা আপনি ফেরত পাবেন</label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="টাকা"
                            size="small"
                          />
                        </Grid>

                        <Grid item xs={6}>
                            <label>অন্যান্য মূলধন</label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="টাকা"
                            size="small"
                          />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{textAlign: 'center'}}>
                            <h3>কৃষিকাজ</h3>
                        </Grid>

                        <Grid item xs={6}>
                            <label>কৃষিকাজ থেকে প্রাপ্ত আয়ের পরিমান</label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="টাকা"
                            size="small"
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{textAlign: 'center'}}>
                            <h3>দায়</h3>
                        </Grid>

                        <Grid item xs={6}>
                            <label>ক্রেডিট কার্ডের ঋণের পরিমান</label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="টাকা"
                            size="small"
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <label>গাড়ির ঋণের পরিমান</label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="টাকা"
                            size="small"
                          />
                        </Grid>

                        <Grid item xs={6}>
                            <label>ব্যবসার জন্য ঋণের পরিমান</label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="টাকা"
                            size="small"
                          />
                        </Grid>

                        <Grid item xs={6}>
                            <label>পারিবারিক ঋণের পরিমান</label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="টাকা"
                            size="small"
                          />
                        </Grid>

                        <Grid item xs={6}>
                            <label>অন্যান্য ঋণ</label> 
                        </Grid>
                        <Grid item xs={6}>
                          <TextField 
                            label="টাকা"
                            size="small"
                          />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{textAlign: 'center', paddingLeft: 'initial'}}>
                            <Button className="zakat_btn" variant="contained" color="success">হিসাব করুন</Button>
                        </Grid>
                        <Grid item xs={12} style={{textAlign: 'center', paddingBottom: '30px', paddingLeft: 'initial'}}>
                          <p>
                              এই ক্যালকুলেটর এ প্রদেয় তথ্য থেকে প্রাপ্ত যাকাত সংক্রান্ত হিসাবের জন্য জাকাত অ্যাপ এর কোন দায়বদ্ধতা নেই। জাকাত অ্যাপ এখানে শুধুমাত্র আপনার জাকাত ক্যালকুলেট করে দিবে ।
                          </p>                        
                        </Grid>
                    </Grid>
                  </form>
              </div>

              <BottomNavigation style={{backgroundColor: '#1976d2'}}>
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
              </BottomNavigation>
            </Paper>
        </Box>
        
    </div>
  );
}

export default App;
