import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState, useEffect } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {'Copyright © '}
      <Link color="white" to="https://github.com/boopathylakshmanan" style={{ color: "white" }}>
        LAKSHMANAN
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Login() {
  const [showPassword, setShowPassword] = useState(true);
  const [typed, setType] = useState('password');
  const [showForm, setShowForm] = useState(false);

  const popOutForm = () => {
    setShowForm(true);
  };

  useEffect(() => {
    popOutForm();
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    setType(showPassword ? 'text' : 'password');
  };

  // State to manage form inputs
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // State to store all users fetched from the backend
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to fetch users from the backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:7777/api/users');
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching users:', err);
      setError('Error fetching users');
      setLoading(false);
    }
  };

  // useEffect to fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const navigate = useNavigate();
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the user exists and if the password matches
    const user = users.find(u => u.email === formData.email);

    if (user && user.password === formData.password) {
      alert('Login successful!');
     navigate('/');
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  // Render the component
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
      }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '0.5px solid black',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.6)',
            overflow: 'hidden',
            backdropFilter: 'blur(8px)',
            transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
            transform: showForm ? 'scale(1)' : 'scale(0.5)',
            opacity: showForm ? 1 : 0,
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email} // Controlled input
              onChange={handleChange} // Update state on input change
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" style={{ cursor: 'pointer' }}>
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={typed}
              id="password"
              autoComplete="current-password"
              value={formData.password} // Controlled input
              onChange={handleChange} // Update state on input change
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" style={{ cursor: 'pointer' }}>
                    {showPassword ? (
                      <VisibilityOffIcon onClick={handleClickShowPassword} />
                    ) : (
                      <VisibilityIcon onClick={handleClickShowPassword} />
                    )}
                  </InputAdornment>
                ),
              }}
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              // href='http://localhost:3000/'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" style={{ color: 'white', fontFamily: 'sans-serif' }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/SignUp" variant="body2" style={{ color: 'white' }}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4, color: 'white' }} />
      </Container>
    </ThemeProvider>
  );
}
