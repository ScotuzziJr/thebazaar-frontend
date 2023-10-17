import React, { useEffect, useState } from 'react'
import { Box, Button, TextField, Typography, createTheme, ThemeProvider } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

import HeaderLogin from './HeaderLogin';

const Login = () => {
    const theme = createTheme({
        typography: {
          fontFamily: [
            'Poppins',
            'sans-serif',
          ].join(','),
    },});

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const login = await fetch("http://localhost:8000/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "username": username,
                    "password": password
                })
            })
            .then((res) => {
                if(res.status === 200) {
                    toast.success("Successfull login");
                } else {
                    toast.warn("Invalid credentials");
                }

                return res.json();
            })
        } catch(e) {
            toast.error("Error connecting to API");
        }
    }

    useEffect(() => {
        document.title = 'Login';
    }, []);

    return (
        <Box>
            <ThemeProvider theme={theme}>
                <HeaderLogin />
                <form>
                    <Box 
                        display={"flex"} 
                        flexDirection={"column"}
                        alignItems={"center"} 
                        justifyContent={"center"}
                        maxWidth={400}
                        margin={"auto"}
                        marginTop={10}
                        padding={5}
                        borderRadius={5}
                        boxShadow={"5px 5px 10px #ccc"}
                        sx={{
                            ":hover": {
                                boxShadow: "10px 10px 20px #ccc"
                            }
                    }}
                    >
                        <Typography
                            variant='h4'
                            padding={3}
                        >
                            Login
                        </Typography>

                        <TextField 
                            type="text"
                            variant="outlined" 
                            placeholder="Username"
                            margin="normal"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        
                        <TextField 
                            type="password"
                            variant="outlined" 
                            placeholder="Password"
                            margin="normal"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        
                        <Button
                            onClick={handleLogin}
                            variant="contained"
                            sx={{
                                margin: 3,  
                                borderRadius: 3
                            }}
                        >
                            Login
                        </Button>
                        <ToastContainer />
                        <Typography 
                            variant="p"
                        >
                            Don't have an account? <Link to='/register'>Join us</Link>  
                        </Typography>
                    </Box>
                </form>
            </ThemeProvider>
        </Box>
    );
}

export default Login;
