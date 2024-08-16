import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ChatBox from './Components/ChatBox';
import VideoCall from './Components/VideoCall';
import { purple } from '@mui/material/colors';


import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from './Components/Header';


import AboutUs from './Components/AboutUs';
import Profile from './Components/Profile'
import { createTheme} from '@mui/material/styles';
import MyCalendar from './Components/Calendar';
import TaskManagement from './Components/TaskManagement';
import ProjectManagement from './Components/ProjectManagement';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import FileSharing from './Components/FileSharing';
import TeamManagement from './Components/TeamManagement';
import VedioCall from './Components/VidCall';
// import Footer from './Pages/Footer';

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, Arial, sans-serif',
    },
    palette: {
      // primary: {
      //   main: '#b182f1',
      //   contrastText: '#330c68',
      //   dark: '#9454ec',
      //   light: '#ceb0f6',
      // },
      // secondary: {
      //   main: '#f1828a',
      //   contrastText: '#680c12',
      //   dark: '#ec545f',
      //   light: '#f6b0b5',
      // },
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#f44336',
      },
      background: {
        default: '#efeaf5',
        paper: '#fbfafd',
      },
      text: {
        primary: '#241934',
        secondary: '#61428a',
      },
      success: {
        main: '#82f182',
        contrastText: '#0c680c',
      },
      warning: {
        main: '#f1f182',
        contrastText: '#68680c',
      },
      error: {
        main: '#f18282',
        contrastText: '#680c0c',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>

    <Router>
         <CssBaseline />
         <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatBox />} />
<Route path='/profile' element={<Profile/>}/>
        <Route path="/video-call" element={<VideoCall />} />
        <Route path="/about-us" component={<AboutUs/>} />
        <Route path='/task' element={<TaskManagement/>}/>
        <Route path='/project' element={<ProjectManagement/>}/>
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/team-management' element={<TeamManagement/>}/>
        <Route path='/file' element={<FileSharing/>}/>
        <Route path='vidcall' element={<VedioCall/>}/>
      </Routes>


    </Router>
    </ThemeProvider>
  );
}

export default App;
