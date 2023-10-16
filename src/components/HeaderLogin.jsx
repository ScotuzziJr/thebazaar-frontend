import { Box, Typography } from '@mui/material'
import React from 'react'

const HeaderLogin = () => {
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
                    fontWeight: "bold"
                }}
            >
                the bazaar
            </Typography>
        </Box>
    </Box>
  )
}

export default HeaderLogin
