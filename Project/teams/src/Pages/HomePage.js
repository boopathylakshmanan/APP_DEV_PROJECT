import React from 'react';
import { Container, Box, Typography, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Footer from './Footer';
import homeImg from './../home.jpeg';

const HomePage = () => {
  return (
    <Box className="container">
      <Container>
        <div>
          <div className='welcome'>
            Welcome to Remote Work Collaboration
          </div>
          <div className='home'>
            <div className='textcontainer'>
              <p>
                This system helps team leaders to manage team members and work
                efficiently.
              </p>
              <button className='button'>
                <a href="/">Start working</a>
              </button>
            </div>
            <div className='imgcontainer'>
              <img className='img' src={homeImg} alt="Remote work collaboration" />
            </div>
          </div>
        </div>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} className="feature-card">
              <Typography variant="h5" gutterBottom>Chat</Typography>
              <Typography variant="body1" gutterBottom>Communicate with your team in real-time.</Typography>
              <Button variant="outlined" color="primary" component={Link} to="/chat">
                Open Chat
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} className="feature-card">
              <Typography variant="h5" gutterBottom>Video Call</Typography>
              <Typography variant="body1" gutterBottom>Have face-to-face meetings from anywhere.</Typography>
              <Button variant="outlined" color="primary" component={Link} to="/vidcall">
                Start Video Call
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} className="feature-card">
              <Typography variant="h5" gutterBottom>Calendar</Typography>
              <Typography variant="body1" gutterBottom>Schedule Tasks and Deadlines easily.</Typography>

              <Button variant="outlined" color="primary" component={Link} to="/calendar">
                Schedule Now
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} className="feature-card">
              <Typography variant="h5" gutterBottom>Task Management</Typography>
              <Typography variant="body1" gutterBottom>Manage Tasks and goals now!.</Typography>
              <br />
              <Button variant="outlined" color="primary" component={Link} to="/task">
                Manage
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} className="feature-card">
              <Typography variant="h5" gutterBottom>Project Management</Typography>
              <Typography variant="body1" gutterBottom>Manage Projects with your team.</Typography>
              <br />
              <Button variant="outlined" color="primary" component={Link} to="/project">
                Manage
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} className="feature-card">
              <Typography variant="h5" gutterBottom>Profile</Typography>
              <Typography variant="body1" gutterBottom>Manage user details and credentials.</Typography>
              <br />
              <Button variant="outlined" color="primary" component={Link} to="/profile">
                Visit Profile
              </Button>
            </Paper>
          </Grid>
          {/* New Paper for Team Management */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} className="feature-card">
              <Typography variant="h5" gutterBottom>Team Management</Typography>
              <Typography variant="body1" gutterBottom>Manage your teams and roles effectively.</Typography>

              <Button variant="outlined" color="primary" component={Link} to="/team-management">
                Manage Teams
              </Button>
            </Paper>
          </Grid>
          {/* New Paper for File Sharing */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} className="feature-card">
              <Typography variant="h5" gutterBottom>File Sharing</Typography>
              <Typography variant="body1" gutterBottom>Share files securely with your team.</Typography>

              <Button variant="outlined" color="primary" component={Link} to="/file">
                Share Files
              </Button>
            </Paper>
          </Grid>
        </Grid>

        <br /><br />
        <Footer />
      </Container>
    </Box>
  );
};

export default HomePage;
