import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

function Navbar() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Bank of React
                    </Typography>

                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar
