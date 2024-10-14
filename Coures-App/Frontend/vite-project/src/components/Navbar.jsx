import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'

import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div >
      <Box>
      <AppBar   sx={{height:'50px'}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            {/* <MenuIcon/> */}
          </IconButton>
          

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FUTURE LEARNING
          </Typography>
          <Link to={'/'}><Button  color="inherit" sx={{color: 'white'}}>Home</Button></Link>
          <Link to={'/course'}><Button  color="inherit" sx={{color: 'white'}}>add</Button></Link>
           </Toolbar>
      </AppBar>
    </Box>
  
    </div>
  )
}

export default Navbar