import React, { useState } from 'react';
import { Button, Container, TextField, Typography, Box, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (user === 'admin' && pass === 'admin') {
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-full bg-gray-100 pb-16">
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs" className="bg-white rounded-lg shadow-lg">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px',
            }}
          >
            <div style={{ color: "#204289" }} className="font-semibold text-sm mb-4">
              Powered By <span style={{ color: "#F46524" }}>CRES</span>
            </div>
            <Typography component="h1" variant="h4" className="font-bold text-center pt-4 mb-2">
              Welcome Back!
            </Typography>
            <Typography component="h2" variant="h6" className="text-center mb-4">
              Please login to continue
            </Typography>
            <Box
              component="form"
              onSubmit={handleLogin}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={user}
                onChange={(e) => setUser(e.target.value)}
                sx={{
                  marginBottom: '16px',
                  backgroundColor: '#f9f9f9',
                  borderRadius: '8px',
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                label="Password"
                type="password"
                name="password"
                autoComplete="current-password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                sx={{
                  marginBottom: '24px',
                  backgroundColor: '#f9f9f9',
                  borderRadius: '8px',
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#F46524',
                  '&:hover': {
                    backgroundColor: '#d6581f',
                  },
                }}
              >
                Log In
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
