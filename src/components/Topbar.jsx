import { Box, Typography } from '@mui/material'
import React from 'react'

const Topbar = () => {
  return (
    <Box>
        <Box
            bgcolor={"#12222e"}
        >
            <Typography
                variant="h4"
                color={"white"}
                padding={3}
                sx={{
                    fontWeight: "bold",
                    cursor: 'pointer',
                }}
            >
                the bazaar
            </Typography>
        </Box>
    </Box>
  )
}

export default Topbar