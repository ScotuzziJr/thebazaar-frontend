import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";

const HeaderLogin = () => {
    const navigate = useNavigate();
    return (
        <Box>
            <Box
                bgcolor={"#12222e"}
            >
                <Typography
                    variant="h2"
                    color={"white"}
                    padding={3}
                    sx={{
                        fontWeight: "bold",
                        cursor: 'pointer',
                    }}
                    onClick={() => navigate("/")}
                >
                    the bazaar
                </Typography>
            </Box>
        </Box>
    )
}

export default HeaderLogin
