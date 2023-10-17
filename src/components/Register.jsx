import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HeaderLogin from './HeaderLogin';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");


    const handleRegistration = async () => {
        try {
            const new_user = await fetch("http://localhost:8000/api/users/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "username": username,
                    "email": email,
                    "password": password
                })
            })
            .then((res) => {
                if(res.status === 201) {
                    toast.success("Successfull registration");
                } else {
                    toast.error("User already exists");
                }

                return res.json();
            })
        } catch(e) {
            toast.error("Error connecting to API");
        }
    }

    return (
        <Box>
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
                        Registration
                    </Typography>

                    <TextField 
                        type="text"
                        variant="outlined" 
                        placeholder="Username"
                        margin="normal"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <TextField 
                        type="text"
                        variant="outlined" 
                        placeholder="Email"
                        margin="normal"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    
                    <TextField 
                        type="password"
                        variant="outlined" 
                        placeholder="Password"
                        margin="normal"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    <Button
                        onClick={handleRegistration}
                        variant="contained"
                        sx={{
                            margin: 3,
                            borderRadius: 3
                        }}
                    >
                        Submit
                    </Button>
                    <ToastContainer />
                </Box>
            </form>
        </Box>
    );
}

export default Register;
