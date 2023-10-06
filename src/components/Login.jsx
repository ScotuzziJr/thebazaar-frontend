import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <Box>
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
                />
                
                <TextField 
                    type="password"
                    variant="outlined" 
                    placeholder="Password"
                    margin="normal"
                />
                
                <Button
                    variant="contained"
                    sx={{
                        margin: 3,
                        borderRadius: 3
                    }}
                >
                    Login
                </Button>
            </Box>
        </form>
    </Box>
  )
}

export default Login
